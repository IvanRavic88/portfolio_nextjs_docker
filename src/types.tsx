import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type SideNavItem = {
  title: string;
  path: string;
  icon?: JSX.Element;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
  new_window?: boolean;
};

export type MenuItemWithSubMenuProps = {
  item: SideNavItem;
  toggleOpen: () => void;
};

export type ActiveMenuProps = {
  setActiveMenu: (menuIndex: number | null) => void;
};

export type Project = {
  index: number;
  title: string;
  src: string;
  href: string;
  description: string;
  color: string;
};

export type Contactinfo = {
  id: number;
  href?: string;
  icon?: JSX.Element;
  description: string;
  text: string;
};
