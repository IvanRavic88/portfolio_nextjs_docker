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

export type ProjectsPageData = {
  id: number;
  title: string;
  services: string;
  year: number;
  location: string;
  descriptionTitle: string;
  projectDescription: string;
  imageSrcLight: string;
  imageSrcDark: string;
  githubLink: string;
  liveWebsite: string;
  mobileImages: { src: string; alt: string }[];
  nextProject: { name: string; href: string };
}[];
