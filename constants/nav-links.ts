import { NavLink } from "@/types/interfaces";
import * as LucideIcons from "lucide-react";

export const navLinks: NavLink[] = [
  { title: "About", href: "#about", icon: LucideIcons.User },
  { title: "Skills", href: "#skills", icon: LucideIcons.Wrench },
  { title: "Projects", href: "#projects", icon: LucideIcons.Code },
  { title: "Contact", href: "#contact", icon: LucideIcons.Mail },
];
