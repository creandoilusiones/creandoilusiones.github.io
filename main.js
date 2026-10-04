// Datos de contacto de Maria — cámbialos aquí y se actualizan en toda la web.
const SITE = {
  whatsapp: "34614116121", // solo números, con 34 delante
  instagram: "creandoilusiones.regalos",
  email: "", // vacío = se ocultan los enlaces de correo
  zona: "Recogida disponible · consulta por WhatsApp",
};

(function () {
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  }

  const waText = encodeURIComponent("¡Hola Maria! Tengo una idea para un regalo personalizado:");
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    a.href = "https://wa.me/" + SITE.whatsapp + "?text=" + waText;
    a.target = "_blank";
    a.rel = "noopener";
    if (a.hasAttribute("data-fill")) a.textContent = "+" + SITE.whatsapp.replace(/^(\d{2})(\d{3})(\d{3})(\d{3})$/, "$1 $2 $3 $4");
  });
  document.querySelectorAll("[data-instagram]").forEach((a) => {
    a.href = "https://instagram.com/" + SITE.instagram;
    a.target = "_blank";
    a.rel = "noopener";
    if (a.hasAttribute("data-fill")) a.textContent = "@" + SITE.instagram;
  });
  document.querySelectorAll("[data-email]").forEach((a) => {
    if (!SITE.email) {
      (a.closest(".contact-card") || a).remove();
      return;
    }
    a.href = "mailto:" + SITE.email;
    if (a.hasAttribute("data-fill")) a.textContent = SITE.email;
  });
  document.querySelectorAll("[data-zona]").forEach((el) => (el.textContent = SITE.zona));
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
