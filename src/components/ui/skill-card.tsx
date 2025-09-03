import { useState } from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  level: number;
  className?: string;
  style?: React.CSSProperties;
}

export const SkillCard = ({ title, description, icon, level, className, style }: SkillCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "glass-card p-6 hover-lift cursor-pointer group",
        "transition-all duration-300",
        isHovered && "glow-primary",
        className
      )}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-4 mb-3">
        {icon}
        <div>
          <h3 className="font-semibold text-lg text-foreground">{title}</h3>
        </div>
      </div>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};