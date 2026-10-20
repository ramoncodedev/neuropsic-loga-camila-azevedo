/* ==========================================================================
   Camila Azevedo — Neuropsicóloga
   Scripts do site. Dados de contato ficam em js/config.js
   ========================================================================== */
(function () {
  "use strict";

  const CFG = window.SITE || {};
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  /* ---------- 1. Links dinâmicos (vêm do config.js) ---------- */
  function setupLinks() {
    const waLink = (text) =>
      `https://wa.me/${CFG.whatsappNumero}?text=${encodeURIComponent(text || "")}`;
    $$("[data-whatsapp]").forEach((a) => {
      // data-msg permite uma mensagem específica (ex.: o serviço escolhido)
      a.href = waLink(a.dataset.msg || CFG.whatsappMensagem);
      a.target = "_blank";
      a.rel = "noopener";
    });

    $$("[data-instagram]").forEach((a) => {
      a.href = CFG.instagram;
      a.target = "_blank";
      a.rel = "noopener";
    });

    // Itens opcionais: só aparecem se houver valor no config
    const optional = {
      ebook: CFG.ebookUrl,
      artigos: CFG.artigosUrl,
      email: CFG.email ? `mailto:${CFG.email}` : "",
    };
    $$("[data-optional]").forEach((el) => {
      const url = optional[el.dataset.optional];
      if (!url) return el.remove();
      const link = el.matches("a") ? el : $("a", el);
      if (link) {
        link.href = url;
        if (!url.startsWith("mailto:")) {
          link.target = "_blank";
          link.rel = "noopener";
        }
      }
      const label = $("[data-email-label]", el);
      if (label && CFG.email) label.textContent = CFG.email;
    });
  }

  /* ---------- 2. Header: sombra ao rolar + menu mobile ---------- */
  function setupHeader() {
    const header = $(".header");
    const toggle = $(".header__toggle");
    const nav = $("#menu");

    const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const close = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.classList.remove("no-scroll");
    };

    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.classList.toggle("no-scroll", open);
    });

    $$("a", nav).forEach((a) => a.addEventListener("click", close));
    window.addEventListener("resize", () => window.innerWidth > 900 && close());
    document.addEventListener("keydown", (e) => e.key === "Escape" && close());
  }

  /* ---------- 3. Animação de entrada ao rolar ---------- */
  function setupReveal() {
    const items = $$("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
  }

  /* ---------- 3c. Fotos ausentes: mantém o espaço neutro ---------- */
  function setupMedia() {
    $$(".aud-card__media").forEach((box) => {
      const img = $("img", box);
      const check = () => box.classList.toggle("is-missing", !(img.complete && img.naturalWidth > 0));
      img.addEventListener("error", check);
      img.addEventListener("load", check);
      if (img.complete) check();
    });
  }

  /* ---------- 4. FAQ: abre um por vez ---------- */
  function setupFaq() {
    const items = $$(".faq__item");
    items.forEach((item) =>
      item.addEventListener("toggle", () => {
        if (!item.open) return;
        items.forEach((other) => other !== item && (other.open = false));
      })
    );
  }

  /* ---------- 5. Ano no rodapé ---------- */
  function setupYear() {
    const y = $("[data-year]");
    if (y) y.textContent = new Date().getFullYear();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupLinks();
    setupHeader();
    setupReveal();
    setupMedia();
    setupFaq();
    setupYear();
  });
})();
