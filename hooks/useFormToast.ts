import { toast } from "sonner";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";
import { createElement } from "react";

export interface ToastMessages {
  success?: {
    titre?: string;
    description?: string;
  };
  error?: {
    titre?: string;
    description?: string;
  };
  inProgress?: {
    titre?: string;
    description?: string;
  };
}

export function useFormToast(messages?: ToastMessages) {
  const showSuccess = (customDescription?: string) => {
    toast.success(messages?.success?.titre || "Message envoyé !", {
      description:
        customDescription ||
        messages?.success?.description ||
        "Nous vous recontacterons sous 48h. Vérifiez vos emails.",
      icon: createElement(CheckCircle, { className: "h-5 w-5 text-green-600" }),
      duration: 5000,
    });
  };

  const showError = (customDescription?: string) => {
    toast.error(messages?.error?.titre || "Erreur d'envoi", {
      description:
        customDescription ||
        messages?.error?.description ||
        "Une erreur est survenue. Contactez-nous au 05 33 89 14 00",
      icon: createElement(AlertCircle, { className: "h-5 w-5 text-red-600" }),
      duration: 8000,
    });
  };

  const showInfo = () => {
    return toast.info(messages?.inProgress?.titre || "Envoi en cours...", {
      description:
        messages?.inProgress?.description ||
        "Veuillez patienter quelques instants",
      icon: createElement(Loader, {
        className: "h-5 w-5 text-primary animate-spin",
      }),
      duration: Infinity,
    });
  };

  const dismiss = (toastId: string | number) => {
    toast.dismiss(toastId);
  };

  return { showSuccess, showError, showInfo, dismiss };
}
