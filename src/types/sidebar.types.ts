// @/types/sidebar.types.ts
import { ReactNode } from "react";

export interface SidebarItem {
  title: string;
  url?: string;
  icon: ReactNode; // Lucide icon component
  items?: SidebarItem[]; // nested items → makes it a dropdown
  disabled?: boolean;
}

export interface SidebarSection {
  title: string;
  roles: string[];
  items: SidebarItem[];
}