document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".md-header__inner");
  if (header) {
    const btn = document.createElement("button");
    btn.title = "Imprimer en PDF";
    btn.style.marginLeft = "auto";
    btn.style.background = "none";
    btn.style.border = "none";
    btn.style.cursor = "pointer";
    btn.style.display = "flex";
    btn.style.alignItems = "center";
    btn.onclick = () => window.print();

    // Use your custom SVG icon, smaller and white
    btn.innerHTML = `<img src="/assets/pdf-file-2-svgrepo-com.svg" alt="PDF" style="height:1.5rem; width:auto; display:inline-block; vertical-align:middle; filter: brightness(0) invert(1);">`;

    header.appendChild(btn);
  }
});