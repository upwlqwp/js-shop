// import { router } from "../main";

import { getLogo } from "./logo";
import { getNavigation } from "./navigation";
import { getCartBtn } from "./cartBtn";

export function getHeader() {
  const header = document.createElement("header");
  header.classList.add("header");

  const container = document.createElement("div");
  container.classList.add("container", "header__container");

  const logo = getLogo();
  const cartBtn = getCartBtn();

  const nav = document.createElement("nav");
  nav.classList.add("header__navigation");

  const links = {
    'home': getNavigation("/main", "Main"),
    'catalog': getNavigation("/catalog", "Catalog"),
    'cart': cartBtn,
  }

  // make logo inner link

  for (const activeLink in links) {
    nav.append(links[activeLink]);
  }

  const setActiveLink = function (link = "") {
    for (const activeLink in links) {
      links[activeLink].classList.remove("active");
    }

    if (link !== "") {
      links[link].classList.add("active");
    }
  };

  container.append(logo, nav, cartBtn);
  header.append(container);

  return {
    header,
    setActiveLink,
  };
}
