// import { router } from "../main";
import { getNavigation } from "./navigation";

export function getHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("container", "header__container");

  const nav = document.createElement("nav");
  nav.classList.add("header__navigation");

  let link1 = getNavigation("/main", "Main");

  let link2 = getNavigation("/cart", "Cart");

  let link3 = getNavigation("/catalog", "Catalog");

  nav.append(link1, link2, link3);
  container.append(nav);
  header.append(container);
  return header;
}
