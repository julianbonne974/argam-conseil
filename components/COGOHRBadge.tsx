"use client";

import { Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface COGOHRBadgeProps {
  variant?: "standard" | "animated";
  className?: string;
}

export function COGOHRBadge({ variant = "standard", className }: COGOHRBadgeProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={cn("inline-flex", className)}>
            <Badge
              variant="outline"
              className={cn(
                "relative border-primary/50 bg-primary/10 text-primary hover:bg-primary/20 px-4 py-2 text-sm font-semibold",
                variant === "animated" && "animate-pulse"
              )}
            >
              <Shield className="mr-2 h-4 w-4" />
              Partenaire COGOHR
              {variant === "animated" && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              )}
            </Badge>
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-xs">
            Comité des Œuvres Sociales des Hôpitaux de La Réunion
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
