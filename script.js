(() => {
  const root = document.documentElement;
  const btn = document.querySelector(".theme-toggle");
  const year = document.querySelector("#year");

  if (year) year.textContent = new Date().getFullYear();

  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    root.dataset.theme = saved;
  } else {
    root.dataset.theme = "light";
  }

  if (!btn) return;

  btn.addEventListener("click", () => {
    const cur = root.dataset.theme === "dark" ? "dark" : "light";
    const next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    localStorage.setItem("theme", next);
  });
})();
