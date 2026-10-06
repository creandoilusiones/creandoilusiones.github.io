// Datos de contacto de Maria — cámbialos aquí y se actualizan en toda la web.
const SITE = {
  whatsapp: "34614116121", // solo números, con 34 delante
  instagram: "creandoilusiones.regalos",
  email: "", // vacío = se ocultan los enlaces de correo
  zona: "Recogida o entrega en mano · Envío gratis desde 80 €",
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

  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const track = slider.querySelector(".slides");
    const slides = track.children;
    const dots = slider.querySelector(".dots");
    const prev = slider.querySelector(".prev");
    const next = slider.querySelector(".next");
    const go = (i) => track.scrollTo({ left: i * track.clientWidth });
    const current = () => Math.round(track.scrollLeft / track.clientWidth);
    Array.from(slides).forEach((_, i) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("aria-label", "Foto " + (i + 1));
      dot.addEventListener("click", () => go(i));
      dots.appendChild(dot);
    });
    const update = () => {
      const i = current();
      Array.from(dots.children).forEach((d, j) => d.setAttribute("aria-current", String(i === j)));
      prev.hidden = i === 0;
      next.hidden = i === slides.length - 1;
    };
    prev.addEventListener("click", () => go(current() - 1));
    next.addEventListener("click", () => go(current() + 1));
    track.addEventListener("scroll", update, { passive: true });
    update();
  });
})();
