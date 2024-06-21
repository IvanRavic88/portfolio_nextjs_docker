import { Icon } from "@iconify/react";
import { SideNavItem } from "./types";

export const SIDE_NAV_ITEMS: SideNavItem[] = [
  {
    title: "Home",
    path: "/",
    icon: <Icon icon="lucide:home" width="24" height="24" />,
  },

  {
    title: "Projects",
    path: "/projects",
    icon: <Icon icon="lucide:folder" width="24" height="24" />,
    submenu: true,
    subMenuItems: [
      {
        title: "All",
        path: "/projects",
      },
      {
        title: "gaginislatkisi.com",
        path: "/projects/gaginislatkisi",
      },
      {
        title: "ivanravic.com",
        path: "/projects/ivanravic",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
    icon: <Icon icon="lucide:info-circle" width="24" height="24" />,
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <Icon icon="lucide:mail" width="24" height="24" />,
  },
  {
    title: "AWS Associate Certificate",
    path: "/AWS Certified Developer - Associate certificate.pdf",
    icon: <Icon icon="logos:aws" width="24" height="24" />,
    new_window: true,
  },
  {
    title: "Resume",
    path: "/Ivan_Ravić_Resume_21_5_2024.pdf",
    icon: <Icon icon="lucide:file-text" width="24" height="24" />,
    new_window: true,
  },
];
