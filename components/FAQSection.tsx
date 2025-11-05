'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

export function FAQSection() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Pourquoi ma prime de vie chère n'est-elle pas prise en compte à la retraite ?",
      answer:
        "Votre pension de retraite est calculée uniquement sur votre traitement indiciaire de base. La prime de vie chère de 53%, bien qu'elle représente une part importante de votre rémunération (jusqu'à 1 600€/mois), n'entre pas dans ce calcul. C'est pourquoi nous vous recommandons de constituer une épargne retraite complémentaire via un PER pour compenser cette perte.",
    },
    {
      question: "Qu'est-ce qu'un Plan Épargne Retraite (PER) ?",
      answer:
        "Le PER est un produit d'épargne à long terme qui vous permet de vous constituer un complément de revenu pour la retraite tout en bénéficiant d'avantages fiscaux. Vos versements sont déductibles de votre revenu imposable, ce qui réduit immédiatement vos impôts.",
    },
    {
      question: "Pourquoi choisir Argam Conseils ?",
      answer:
        "Nous sommes spécialisés dans l'accompagnement des fonctionnaires hospitaliers de La Réunion. Partenaire officiel du COGOHR, nous proposons une étude gratuite, 0% de frais d'entrée pour les adhérents, et un suivi personnalisé par des experts qui connaissent votre statut et vos enjeux.",
    },
    {
      question: "Combien dois-je épargner par mois ?",
      answer:
        "Le montant dépend de votre situation personnelle : écart entre votre salaire actuel et votre future pension, nombre d'années avant la retraite, capacité d'épargne. C'est précisément ce que nous déterminons lors de l'étude gratuite, avec une simulation personnalisée basée sur vos chiffres réels.",
    },
    {
      question: "L'offre COGOHR est-elle vraiment gratuite ?",
      answer:
        "Oui, l'étude patrimoniale est 100% gratuite et sans engagement. Les membres COGOHR bénéficient en plus de 0% de frais d'entrée sur leur PER (jusqu'à 3% offerts), ce qui représente une économie significative sur le long terme.",
    },
  ];

  return (
    <>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-[1px] border-border px-6 bg-card"
          >
            <AccordionTrigger className="hover:no-underline py-5">
              <span className="text-sm font-medium text-foreground text-left">
                {faq.question}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-5">
              <p className="text-xs text-muted-foreground leading-relaxed">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <div className="mt-10 text-center">
        <p className="text-xs text-muted-foreground mb-4">
          Une autre question ? Nous sommes là pour vous aider
        </p>
        <Button
          onClick={handleContactClick}
          variant="outline"
          className="text-xs uppercase tracking-wide"
        >
          Contactez-nous
        </Button>
      </div>
    </>
  );
}
