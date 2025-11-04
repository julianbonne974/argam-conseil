import { toast } from "sonner";
import { CheckCircle, AlertCircle, Loader } from "lucide-react";
import { createElement } from "react";

export function useFormToast() {
  const showSuccess = (message?: string) => {
    toast.success("Message envoyé !", {
      description: message || "Nous vous recontacterons sous 48h. Vérifiez vos emails.",
      icon: createElement(CheckCircle, { className: "h-5 w-5 text-green-600" }),
      duration: 5000,
    });
  };

  const showError = () => {
    toast.error("Erreur d'envoi", {
      description: "Une erreur est survenue. Contactez-nous au 05 33 89 14 00",
      icon: createElement(AlertCircle, { className: "h-5 w-5 text-red-600" }),
      duration: 8000,
    });
  };

  const showInfo = () => {
    return toast.info("Envoi en cours...", {
      description: "Veuillez patienter quelques instants",
      icon: createElement(Loader, { className: "h-5 w-5 text-primary animate-spin" }),
      duration: Infinity,
    });
  };

  const dismiss = (toastId: string | number) => {
    toast.dismiss(toastId);
  };

  return { showSuccess, showError, showInfo, dismiss };
}
