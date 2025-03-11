document.addEventListener("DOMContentLoaded", function () {
  const currentYear = new Date().getFullYear();
  const footer = document.createElement("div");
  footer.className = "footer";
  footer.innerHTML = `<p>&copy; ${currentYear} All rights reserved</p>`;

  document.body.appendChild(footer);
});
