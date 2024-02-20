import { handleHomePage } from "./js/handlers.js";

export function route() {
  const pathname = window.location.pathname;

  if (pathname === "/index.html") {
    handleHomePage();
  }
}