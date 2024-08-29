import { ReactNode } from "react";

export type NavItemType = {
  title: string;
  child?: Record<string, NavItemType>;
  component?: ReactNode;
};
