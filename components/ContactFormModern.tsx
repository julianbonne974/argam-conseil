"use client";

import { useState, FormEvent } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFormToast, type ToastMessages } from "@/hooks/useFormToast";
import type { FormLabelsSettings, FormOption } from "@/lib/content";

interface FormData {
  name: string;
  email: string;
  phone: string;
  fonction: string;
  meetingType: "visio" | "presentiel";
  message: string;
  isCogohrMember: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  fonction?: string;
}

interface ContactFormProps {
  formLabels?: FormLabelsSettings;
  toastMessage?: string;
  presentielText?: string;
  boutonTexte?: string;
}

export function ContactFormModern({
  formLabels,
  toastMessage,
  presentielText,
  boutonTexte,
}: ContactFormProps = {}) {
  // Valeurs par défaut si les props CMS ne sont pas fournies
  const labels = formLabels?.labels || {
    nom: "Nom",
    email: "Email",
    telephone: "Téléphone",
    fonction: "Fonction",
    message: "Message (optionnel)",
    typeRendezVous: "Type de rendez-vous",
  };

  const placeholders = formLabels?.placeholders || {
    telephone: "06 XX XX XX XX",
    fonction: "Sélectionnez votre fonction",
    message: "Précisez vos questions ou votre situation...",
  };

  const validation = formLabels?.validation || {
    nomRequired: "Le nom est requis",
    nomMinLength: "Le nom doit contenir au moins 2 caractères",
    emailRequired: "L'email est requis",
    emailInvalid: "Format d'email invalide",
    phoneRequired: "Le téléphone est requis",
    phoneInvalid:
      "Format de téléphone invalide (ex: 06 XX XX XX XX ou +262...)",
    fonctionRequired: "Veuillez sélectionner votre fonction",
  };

  const cogohrConfig = formLabels?.cogohr || {
    label: "Je suis adhérent du COGOHR",
    description:
      "Les adhérents COGOHR bénéficient d'une étude gratuite + 0% de frais d'entrée",
  };

  const typeRdvConfig = formLabels?.typeRendezVous || {
    visio: "Visioconférence",
    presentiel: "Présentiel - Trois-Bassins",
  };

  const fonctionsOptions: FormOption[] = formLabels?.fonctions || [
    { value: "infirmier", label: "Infirmier(ère)" },
    { value: "aide-soignant", label: "Aide-soignant(e)" },
    { value: "medecin", label: "Médecin" },
    { value: "cadre-sante", label: "Cadre de santé" },
    { value: "technicien", label: "Technicien(ne)" },
    { value: "administratif", label: "Personnel administratif" },
    { value: "autre", label: "Autre" },
  ];

  const boutonConfig = formLabels?.bouton || {
    texte: "Demander mon étude gratuite",
    texteEnvoi: "Envoi en cours...",
  };

  const rgpdText =
    formLabels?.rgpd?.texte ||
    "Vos données sont sécurisées et ne seront jamais partagées. En soumettant ce formulaire, vous acceptez d'être recontacté par Argam Conseils.";

  // Configuration des toasts depuis le CMS
  const toastConfig: ToastMessages | undefined = formLabels?.toasts
    ? {
        success: formLabels.toasts.success,
        error: formLabels.toasts.error,
        inProgress: formLabels.toasts.inProgress,
      }
    : undefined;

  const { showSuccess, showError, showInfo, dismiss } =
    useFormToast(toastConfig);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    fonction: "",
    meetingType: "visio",
    message: "",
    isCogohrMember: false,
  });

  const validateField = (
    name: keyof FormData,
    value: string,
  ): string | undefined => {
    switch (name) {
      case "name":
        if (!value.trim()) return validation.nomRequired;
        if (value.trim().length < 2) return validation.nomMinLength;
        break;
      case "email":
        if (!value.trim()) return validation.emailRequired;
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          return validation.emailInvalid;
        break;
      case "phone":
        if (!value.trim()) return validation.phoneRequired;
        if (!/^(\+262|0)[6-7]\d{8}$/.test(value.replace(/\s/g, "")))
          return validation.phoneInvalid;
        break;
      case "fonction":
        // Fonction is only required if user is COGOHR member
        break;
    }
    return undefined;
  };

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => {
      // If unchecking COGOHR member, reset fonction field
      if (field === "isCogohrMember" && value === false) {
        return { ...prev, [field]: value, fonction: "" };
      }
      return { ...prev, [field]: value };
    });

    if (typeof value === "string" && errors[field as keyof FormErrors]) {
      const error = validateField(field as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }

    // Clear fonction error when unchecking COGOHR
    if (field === "isCogohrMember" && value === false) {
      setErrors((prev) => ({ ...prev, fonction: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    newErrors.name = validateField("name", formData.name);
    newErrors.email = validateField("email", formData.email);
    newErrors.phone = validateField("phone", formData.phone);

    // Validate fonction only if user is COGOHR member
    if (formData.isCogohrMember) {
      if (!formData.fonction) {
        newErrors.fonction = validation.fonctionRequired;
      }
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== undefined);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    const toastId = showInfo();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("form-name", "contact");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append(
        "fonction",
        formData.isCogohrMember ? formData.fonction : "Non applicable",
      );
      formDataToSend.append("meetingType", formData.meetingType);
      formDataToSend.append("message", formData.message);
      formDataToSend.append(
        "isCogohrMember",
        formData.isCogohrMember ? "Oui" : "Non",
      );

      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      });

      dismiss(toastId);

      if (response.ok) {
        showSuccess(toastMessage);
        setFormData({
          name: "",
          email: "",
          phone: "",
          fonction: "",
          meetingType: "visio",
          message: "",
          isCogohrMember: false,
        });
        setErrors({});
      } else {
        showError();
      }
    } catch {
      dismiss(toastId);
      showError();
    } finally {
      setIsSubmitting(false);
    }
  };

  // Texte du présentiel : priorité à la prop, sinon CMS, sinon fallback
  const finalPresentielText = presentielText || typeRdvConfig.presentiel;
  const finalBoutonTexte = boutonTexte || boutonConfig.texte;

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="bg-card border-[1px] border-border p-8 space-y-6"
    >
      {/* Hidden inputs for Netlify */}
      <input type="hidden" name="form-name" value="contact" />
      <div style={{ display: "none" }}>
        <label>
          Don&apos;t fill this out if you&apos;re human:{" "}
          <input name="bot-field" />
        </label>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="text-xs uppercase tracking-wide text-muted-foreground"
        >
          {labels.nom} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          onBlur={(e) => {
            const error = validateField("name", e.target.value);
            setErrors((prev) => ({ ...prev, name: error }));
          }}
          className={errors.name ? "border-red-500" : "border-[1px]"}
          disabled={isSubmitting}
        />
        {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-xs uppercase tracking-wide text-muted-foreground"
        >
          {labels.email} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          onBlur={(e) => {
            const error = validateField("email", e.target.value);
            setErrors((prev) => ({ ...prev, email: error }));
          }}
          className={errors.email ? "border-red-500" : "border-[1px]"}
          disabled={isSubmitting}
        />
        {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div className="space-y-2">
        <Label
          htmlFor="phone"
          className="text-xs uppercase tracking-wide text-muted-foreground"
        >
          {labels.telephone} <span className="text-red-500">*</span>
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder={placeholders.telephone}
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          onBlur={(e) => {
            const error = validateField("phone", e.target.value);
            setErrors((prev) => ({ ...prev, phone: error }));
          }}
          className={errors.phone ? "border-red-500" : "border-[1px]"}
          disabled={isSubmitting}
        />
        {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
      </div>

      {/* COGOHR Member */}
      <div className="flex items-start space-x-3 bg-muted/30 p-4 border-[1px] border-border">
        <Checkbox
          id="isCogohrMember"
          name="isCogohrMember"
          checked={formData.isCogohrMember}
          onCheckedChange={(checked) =>
            handleInputChange("isCogohrMember", checked === true)
          }
          disabled={isSubmitting}
        />
        <div className="flex-1">
          <Label
            htmlFor="isCogohrMember"
            className="text-xs cursor-pointer font-medium"
          >
            {cogohrConfig.label}
          </Label>
          <p className="text-[10px] text-muted-foreground mt-1">
            {cogohrConfig.description}
          </p>
        </div>
      </div>

      {/* Fonction - Only shown if COGOHR member */}
      {formData.isCogohrMember && (
        <div className="space-y-2">
          <Label
            htmlFor="fonction"
            className="text-xs uppercase tracking-wide text-muted-foreground"
          >
            {labels.fonction} <span className="text-red-500">*</span>
          </Label>
          <Select
            name="fonction"
            value={formData.fonction}
            onValueChange={(value) => {
              handleInputChange("fonction", value);
              const error = validateField("fonction", value);
              setErrors((prev) => ({ ...prev, fonction: error }));
            }}
            disabled={isSubmitting}
          >
            <SelectTrigger
              className={errors.fonction ? "border-red-500" : "border-[1px]"}
            >
              <SelectValue placeholder={placeholders.fonction} />
            </SelectTrigger>
            <SelectContent>
              {fonctionsOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.fonction && (
            <p className="text-xs text-red-500">{errors.fonction}</p>
          )}
        </div>
      )}

      {/* Meeting Type */}
      <div className="space-y-3">
        <Label className="text-xs uppercase tracking-wide text-muted-foreground">
          {labels.typeRendezVous}
        </Label>
        <RadioGroup
          name="meetingType"
          value={formData.meetingType}
          onValueChange={(value: "visio" | "presentiel") =>
            handleInputChange("meetingType", value)
          }
          disabled={isSubmitting}
          className="grid grid-cols-1 md:grid-cols-2 gap-3"
        >
          <div className="flex items-center space-x-2 border-[1px] border-border p-3 cursor-pointer">
            <RadioGroupItem value="visio" id="visio" />
            <Label htmlFor="visio" className="text-xs cursor-pointer flex-1">
              {typeRdvConfig.visio}
            </Label>
          </div>
          <div className="flex items-center space-x-2 border-[1px] border-border p-3 cursor-pointer">
            <RadioGroupItem value="presentiel" id="presentiel" />
            <Label
              htmlFor="presentiel"
              className="text-xs cursor-pointer flex-1"
            >
              {finalPresentielText}
            </Label>
          </div>
        </RadioGroup>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-xs uppercase tracking-wide text-muted-foreground"
        >
          {labels.message}
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder={placeholders.message}
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          disabled={isSubmitting}
          className="border-[1px]"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="default"
        className="w-full bg-foreground hover:bg-foreground/90 text-background text-xs uppercase tracking-wide"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {boutonConfig.texteEnvoi}
          </>
        ) : (
          finalBoutonTexte
        )}
      </Button>

      {/* Privacy Notice */}
      <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
        {rgpdText}
      </p>
    </form>
  );
}
