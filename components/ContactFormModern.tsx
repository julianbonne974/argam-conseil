'use client';

import { useState, FormEvent } from 'react';
import { Loader2, Video, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useFormToast } from '@/hooks/useFormToast';

interface FormData {
  name: string;
  email: string;
  phone: string;
  fonction: string;
  meetingType: 'visio' | 'presentiel';
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
  toastMessage?: string;
  presentielText?: string;
  boutonTexte?: string;
}

export function ContactFormModern({
  toastMessage,
  presentielText = "Présentiel - Trois-Bassins",
  boutonTexte = "Demander mon étude gratuite"
}: ContactFormProps = {}) {
  const { showSuccess, showError, showInfo, dismiss } = useFormToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    fonction: '',
    meetingType: 'visio',
    message: '',
    isCogohrMember: false,
  });

  const validateField = (name: keyof FormData, value: string): string | undefined => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Le nom est requis';
        if (value.trim().length < 2) return 'Le nom doit contenir au moins 2 caractères';
        break;
      case 'email':
        if (!value.trim()) return "L'email est requis";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Format d'email invalide";
        break;
      case 'phone':
        if (!value.trim()) return 'Le téléphone est requis';
        if (!/^(\+262|0)[6-7]\d{8}$/.test(value.replace(/\s/g, '')))
          return 'Format de téléphone invalide (ex: 06 XX XX XX XX ou +262...)';
        break;
      case 'fonction':
        // Fonction is only required if user is COGOHR member
        break;
    }
    return undefined;
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => {
      // If unchecking COGOHR member, reset fonction field
      if (field === 'isCogohrMember' && value === false) {
        return { ...prev, [field]: value, fonction: '' };
      }
      return { ...prev, [field]: value };
    });

    if (typeof value === 'string' && errors[field as keyof FormErrors]) {
      const error = validateField(field as keyof FormData, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }

    // Clear fonction error when unchecking COGOHR
    if (field === 'isCogohrMember' && value === false) {
      setErrors((prev) => ({ ...prev, fonction: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    newErrors.name = validateField('name', formData.name);
    newErrors.email = validateField('email', formData.email);
    newErrors.phone = validateField('phone', formData.phone);

    // Validate fonction only if user is COGOHR member
    if (formData.isCogohrMember) {
      if (!formData.fonction) {
        newErrors.fonction = 'Veuillez sélectionner votre fonction';
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
      formDataToSend.append('form-name', 'contact');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('fonction', formData.isCogohrMember ? formData.fonction : 'Non applicable');
      formDataToSend.append('meetingType', formData.meetingType);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('isCogohrMember', formData.isCogohrMember ? 'Oui' : 'Non');

      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formDataToSend,
      });

      dismiss(toastId);

      if (response.ok) {
        showSuccess(toastMessage);
        setFormData({
          name: '',
          email: '',
          phone: '',
          fonction: '',
          meetingType: 'visio',
          message: '',
          isCogohrMember: false,
        });
        setErrors({});
      } else {
        showError();
      }
    } catch (error) {
      dismiss(toastId);
      showError();
    } finally {
      setIsSubmitting(false);
    }
  };

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
      <div style={{ display: 'none' }}>
        <label>
          Don't fill this out if you're human: <input name="bot-field" />
        </label>
      </div>

      {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs uppercase tracking-wide text-muted-foreground">
              Nom <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              onBlur={(e) => {
                const error = validateField('name', e.target.value);
                setErrors((prev) => ({ ...prev, name: error }));
              }}
              className={errors.name ? 'border-red-500' : 'border-[1px]'}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-xs uppercase tracking-wide text-muted-foreground">
              Email <span className="text-red-500">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              onBlur={(e) => {
                const error = validateField('email', e.target.value);
                setErrors((prev) => ({ ...prev, email: error }));
              }}
              className={errors.email ? 'border-red-500' : 'border-[1px]'}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-xs uppercase tracking-wide text-muted-foreground">
              Téléphone <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="06 XX XX XX XX"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              onBlur={(e) => {
                const error = validateField('phone', e.target.value);
                setErrors((prev) => ({ ...prev, phone: error }));
              }}
              className={errors.phone ? 'border-red-500' : 'border-[1px]'}
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
                handleInputChange('isCogohrMember', checked === true)
              }
              disabled={isSubmitting}
            />
            <div className="flex-1">
              <Label htmlFor="isCogohrMember" className="text-xs cursor-pointer font-medium">
                Je suis adhérent du COGOHR
              </Label>
              <p className="text-[10px] text-muted-foreground mt-1">
                Les adhérents COGOHR bénéficient d'une étude gratuite + 0% de frais d'entrée
              </p>
            </div>
          </div>

          {/* Fonction - Only shown if COGOHR member */}
          {formData.isCogohrMember && (
            <div className="space-y-2">
              <Label htmlFor="fonction" className="text-xs uppercase tracking-wide text-muted-foreground">
                Fonction <span className="text-red-500">*</span>
              </Label>
              <Select
                name="fonction"
                value={formData.fonction}
                onValueChange={(value) => {
                  handleInputChange('fonction', value);
                  const error = validateField('fonction', value);
                  setErrors((prev) => ({ ...prev, fonction: error }));
                }}
                disabled={isSubmitting}
              >
                <SelectTrigger className={errors.fonction ? 'border-red-500' : 'border-[1px]'}>
                  <SelectValue placeholder="Sélectionnez votre fonction" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="infirmier">Infirmier(ère)</SelectItem>
                  <SelectItem value="aide-soignant">Aide-soignant(e)</SelectItem>
                  <SelectItem value="medecin">Médecin</SelectItem>
                  <SelectItem value="cadre-sante">Cadre de santé</SelectItem>
                  <SelectItem value="technicien">Technicien(ne)</SelectItem>
                  <SelectItem value="administratif">Personnel administratif</SelectItem>
                  <SelectItem value="autre">Autre</SelectItem>
                </SelectContent>
              </Select>
              {errors.fonction && <p className="text-xs text-red-500">{errors.fonction}</p>}
            </div>
          )}

          {/* Meeting Type */}
          <div className="space-y-3">
            <Label className="text-xs uppercase tracking-wide text-muted-foreground">Type de rendez-vous</Label>
            <RadioGroup
              name="meetingType"
              value={formData.meetingType}
              onValueChange={(value: 'visio' | 'presentiel') =>
                handleInputChange('meetingType', value)
              }
              disabled={isSubmitting}
              className="grid grid-cols-1 md:grid-cols-2 gap-3"
            >
              <div className="flex items-center space-x-2 border-[1px] border-border p-3 cursor-pointer">
                <RadioGroupItem value="visio" id="visio" />
                <Label htmlFor="visio" className="text-xs cursor-pointer flex-1">
                  Visioconférence
                </Label>
              </div>
              <div className="flex items-center space-x-2 border-[1px] border-border p-3 cursor-pointer">
                <RadioGroupItem value="presentiel" id="presentiel" />
                <Label htmlFor="presentiel" className="text-xs cursor-pointer flex-1">
                  {presentielText}
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-xs uppercase tracking-wide text-muted-foreground">
              Message (optionnel)
            </Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Précisez vos questions ou votre situation..."
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
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
                Envoi en cours...
              </>
            ) : (
              boutonTexte
            )}
          </Button>

      {/* Privacy Notice */}
      <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
        Vos données sont sécurisées et ne seront jamais partagées. En soumettant ce formulaire, vous
        acceptez d'être recontacté par Argam Conseils.
      </p>
    </form>
  );
}
