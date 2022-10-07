function changeTheme() {
  const el = document.documentElement;
  el.getAttribute("data-theme") == "light"
    ? el.setAttribute("data-theme", "dark")
    : el.setAttribute("data-theme", "light");
}
