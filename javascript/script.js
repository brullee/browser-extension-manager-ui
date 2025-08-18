const handleFilter = document.querySelectorAll(".filter__btn");

handleFilter.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    handleFilter.forEach((b) => b.classList.remove("btn--selected"));
    filterButton.classList.toggle("btn--selected");
  });
});

fetch("../data.json")
  .then((response) => response.json())
  .then((data) => {
    // extensionsData = data;
    // renderExtensions("all");
    const container = document.getElementById("extensions-list");
    const template = document.getElementById("extension-template");

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
      }

      extensionElement
        .querySelector(".extension__switch")
        .addEventListener("click", (event) => {
          event.currentTarget.classList.toggle("toggle--on");
        });
      removeElement
        .querySelector(".extension__remove-btn")
        .addEventListener("click", () => {
          removeElement.remove();
        });

      container.appendChild(extensionElement);
    });
  });
