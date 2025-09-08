import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactIconProps {
  icon: LucideIcon;
  title: string;
  value: string;
  animationType: "bounce" | "float" | "pulse";
  className?: string;
}

const ContactIcon = ({ 
  icon: Icon, 
  title, 
  value, 
  animationType,
  className 
}: ContactIconProps) => {
  const animationClass = `contact-icon-${animationType}`;
  
  return (
    <div className={cn(
      "contact-icon stagger-item animate-fade-in-up group cursor-pointer",
      animationClass,
      className
    )}>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon 
            size={32} 
            className="text-primary group-hover:text-primary-glow transition-colors duration-300" 
          />
        </div>
        <div className="space-y-2">
          <h3 className="font-heading font-semibold text-lg text-foreground">
            {title}
          </h3>
          <p className="text-muted-foreground font-body text-sm leading-relaxed">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactIcon;