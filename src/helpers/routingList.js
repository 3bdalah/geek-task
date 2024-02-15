import {
  mdiBell,
  mdiSchool,
  mdiCogs,
  mdiFolderOpen,
  mdiStairsUp,
} from "@mdi/js";

export function routingList() {
  return [
    {
      navName: "Alerts",
      navLink: "/alerts/",
      icon: mdiBell,
      active: true,
    },
    {
      navName: "Training",
      navLink: "/training/",
      icon: mdiSchool,
      active: true,
    },
    {
      navName: "Automation",
      navLink: "/automation/",
      icon: mdiCogs,
      active: true,
    },
    {
      navName: "Portfolio",
      navLink: "/portfolio/",
      icon: mdiFolderOpen,
      active: true,
    },
    {
      navName: "Trading",
      navLink: "/trading/",
      icon: mdiStairsUp,
      active: true,
    },
  ];
}
