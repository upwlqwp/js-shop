import Navigo from "navigo";

import { getHeader } from "./components/header.js";
import { getPageContainer } from "./components/pageContainer.js";
// import { getMainTitle } from './components/mainTitle.js';
// import { getDescription } from './components/desc.js';
// import { getProductPage } from './pages/productPage.js';

const app = document.getElementById("app");

const header = getHeader();
const pageContainer = getPageContainer();



export const router = new Navigo("/");

router.on("/main", async () => {
  pageContainer.innerHTML = "";
  const { getMainPage } = await import("./pages/mainPage.js");
  const mainPage = getMainPage();
  pageContainer.append(mainPage);
  header.setActiveLink("home");
});

router.on("/catalog", async () => {
  pageContainer.innerHTML = "";
  const { getCatalogPage } = await import("./pages/catalogPage.js");
  const catalogPage = getCatalogPage();
  pageContainer.append(catalogPage);
  header.setActiveLink("catalog");
});

router.on("/cart", async () => {
  pageContainer.innerHTML = "";
  const { getCartPage } = await import("./pages/cartPage.js");
  const cartPage = getCartPage();
  pageContainer.append(cartPage);
  header.setActiveLink("cart");

});

router.on("/order", async () => {
  if (true) {
    router.navigate("/");
    return;
  }

  pageContainer.innerHTML = "";
  const { getOrderPage } = await import("./pages/orderPage.js");
  const orderPage = getOrderPage();
  pageContainer.append(orderPage);

});

router.on("/product/:title", async ({ data }) => {
  pageContainer.innerHTML = "";
  const { getProductPage } = await import("./pages/productPage.js");
  const productPage = getProductPage(data.title);
  pageContainer.append(productPage);
});

router.notFound(async () => {
  pageContainer.innerHTML = "";
  const { getNotFoundPage } = await import("./pages/notFound.js");
  const notFound = getNotFoundPage();
  pageContainer.append(notFound);
});

router.resolve();

app.append(header.header, pageContainer);
