document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#navigation");
function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
}
menuButton.addEventListener("click", () => {
  const open = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("is-open", open);
});
navigation
  .querySelectorAll("a")
  .forEach((link) => link.addEventListener("click", closeMenu));
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu();
    menuButton.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeMenu();
});
const filters = document.querySelectorAll("[data-filter]");
const projects = document.querySelectorAll("[data-category]");
filters.forEach((button) =>
  button.addEventListener("click", () => {
    filters.forEach((filter) =>
      filter.setAttribute("aria-pressed", String(filter === button)),
    );
    let count = 0;
    projects.forEach((project) => {
      const visible =
        button.dataset.filter === "all" ||
        project.dataset.category.split(" ").includes(button.dataset.filter);
      project.hidden = !visible;
      if (visible) count++;
    });
    document.querySelector("#filter-status").textContent =
      `${count} projects shown.`;
  }),
);
const copyButton = document.querySelector(".copy-email");
copyButton.addEventListener("click", async () => {
  const status = document.querySelector("#copy-status");
  try {
    const email = document.querySelector(".email-link").getAttribute("href").replace(/^mailto:/, "");
    await navigator.clipboard.writeText(email);
    status.textContent = "Email copied!";
  } catch {
    status.textContent = "Use the email link above to open your mail app.";
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navigation.querySelectorAll("a").forEach((link) => {
          if (link.hash === `#${entry.target.id}`)
            link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      });
    },
    { rootMargin: "-15% 0px -60% 0px" },
  );
  document
    .querySelectorAll("main section[id]")
    .forEach((section) => observer.observe(section));
}
