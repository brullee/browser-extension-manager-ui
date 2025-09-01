const handleFilter = document.querySelectorAll(".filter__btn");
const container = document.getElementById("extensions-list");
const template = document.getElementById("extension-template");

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((extension) => {
      const extensionElement = template.content.cloneNode(true);
      const removeElement = extensionElement.querySelector(
        ".extensions__extension"
      );

      extensionElement.querySelector(".extension__logo").src = extension.logo;
      extensionElement.querySelector(".extension__name").textContent =
        extension.name;
      extensionElement.querySelector(".extension__desc").textContent =
        extension.description;
      if (extension.isActive) {
        extensionElement
          .querySelector(".extension__switch")
          .classList.add("toggle--on");
        extensionElement
          .querySelector(".extension__switch")
          .setAttribute("aria-checked", "true");
        extensionElement
          .querySelector(".extension__switch")
          .setAttribute("aria-label", "Disable Extension");
      } else {
        extensionElement
          .querySelector(".extension__switch")
          .setAttribute("aria-checked", "false");
        extensionElement
          .querySelector(".extension__switch")
          .setAttribute("aria-label", "Enable Extension");
      }

      extensionElement
        .querySelector(".extension__switch")
        .addEventListener("click", (event) => {
          const button = event.currentTarget;
          const isOn = button.classList.toggle("toggle--on");

          button.setAttribute("aria-checked", String(isOn));
          button.setAttribute(
            "aria-label",
            isOn ? "Disable Extension" : "Enable Extension"
          );
        });
      removeElement
        .querySelector(".extension__remove-btn")
        .addEventListener("click", () => {
          removeElement.remove();
        });

      container.appendChild(extensionElement);
    });
  });

handleFilter.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    handleFilter.forEach((b) => b.classList.remove("btn--selected"));
    filterButton.classList.toggle("btn--selected");

    if (filterButton.classList.contains("filter__all")) {
      filterExtensions("all");
    } else if (filterButton.classList.contains("filter__active")) {
      filterExtensions("active");
    } else if (filterButton.classList.contains("filter__inactive")) {
      filterExtensions("inactive");
    }
  });
});

function filterExtensions(filterType) {
  const allExtensions = document.querySelectorAll(".extensions__extension");

  allExtensions.forEach((extensionElement) => {
    const toggleButton = extensionElement.querySelector(".extension__switch");

    if (filterType === "all") {
      extensionElement.classList.remove("hide--extension");
    } else if (filterType === "active") {
      toggleButton.classList.contains("toggle--on")
        ? extensionElement.classList.remove("hide--extension")
        : extensionElement.classList.add("hide--extension");
    } else if (filterType === "inactive") {
      !toggleButton.classList.contains("toggle--on")
        ? extensionElement.classList.remove("hide--extension")
        : extensionElement.classList.add("hide--extension");
    }
  });
}

function toggleTheme() {
  const lightTheme = document.getElementById("light-theme");
  const themeBtn = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const logoIconTheme = document.getElementById("logo-icon");
  const logoTextTheme = document.getElementById("logo-text");

  if (lightTheme.disabled === false) {
    lightTheme.disabled = true;
    themeBtn.setAttribute("aria-label", "Switch to light theme");
    themeIcon.src = "assets/images/icon-sun.svg";
    logoIconTheme.setAttribute("fill", "hsl(3, 71%, 56%)");
    logoTextTheme.setAttribute("fill", "hsl(200, 60%, 99%)");
  } else {
    lightTheme.disabled = false;
    themeBtn.setAttribute("aria-label", "Switch to dark theme");
    themeIcon.src = "assets/images/icon-moon.svg";
    logoIconTheme.setAttribute("fill", "hsl(3, 77%, 44%)");
    logoTextTheme.setAttribute("fill", "hsl(227, 75%, 14%)");
  }
}
