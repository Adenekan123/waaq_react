import { INavigation } from "@/types";
export const navigations:INavigation[] = [
  { title: "home", url: "/" },
  { title: "about us", url: "/about-us" },
  {
    title: "shop",
    url: "/shop",
    list: [
      { title: "kits", url: "/shop?f=kits" },
      { title: "courses", url: "/shop?f=courses" },
      { title: "accessories", url: "/shop?f=accessories" },
    ],
  },
  {
    title: "solutions",
    url: "#",
    list: [
      { title: "schools", url: "/solutions/schools" },
      { title: "partners", url: "/solutions/partner" },
      { title: "labs", url: "/solutions/lab" },
      { title: "robotics classroom bundle", url: "/product/65cf15b418be96a9d70022d0" },
    ],
  },
];
