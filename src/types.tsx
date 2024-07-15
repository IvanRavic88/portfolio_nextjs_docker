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
