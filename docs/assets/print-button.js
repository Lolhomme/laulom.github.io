document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".md-header__inner");
  if (header) {
    const btn = document.createElement("button");
    btn.title = "Imprimer en PDF";
    btn.className = "md-header__button";
    btn.style.marginLeft = "auto";
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.onclick = () => window.print();

    btn.innerHTML = `<img src="/assets/pdf-file-2-svgrepo-com.svg" alt="PDF" class="md-icon" style="width: 1.2rem; height: 1.2rem; display: inline-block; vertical-align: middle; filter: brightness(0) invert(1);">`;

    header.appendChild(btn);
  }
});