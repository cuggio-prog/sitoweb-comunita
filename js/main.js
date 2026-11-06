/* =========================================================================
   Comunità L'Incontro — Interazioni (menu, intestazione, form)
   Nessuna dipendenza esterna.
   ========================================================================= */
(function () {
  "use strict";

  /* --- Menu mobile --- */
  var toggle = document.querySelector(".nav-toggle");
  var list = document.querySelector(".nav-list");

  if (toggle && list) {
    list.setAttribute("hidden", ""); // parte chiuso su mobile

    // Riapre automaticamente solo se la viewport è mobile
    var mq = window.matchMedia("(min-width: 860px)");
    var syncMenu = function () {
      if (mq.matches) {
        // Desktop: sempre visibile
        list.removeAttribute("hidden");
        toggle.setAttribute("aria-expanded", "false");
      }
    };
    mq.addEventListener ? mq.addEventListener("change", syncMenu) : mq.addListener(syncMenu);

    toggle.addEventListener("click", function () {
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      if (expanded) {
        list.setAttribute("hidden", "");
      } else {
        list.removeAttribute("hidden");
      }
    });

    // Chiudi il menu dopo aver scelto una voce (solo su mobile)
    list.addEventListener("click", function (e) {
      if (e.target.closest("a") && !mq.matches) {
        list.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Chiudi con Esc
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !list.hasAttribute("hidden")) {
        list.setAttribute("hidden", "");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });

    syncMenu();
  }

  /* --- Intestazione "attaccata" allo scroll --- */
  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) header.classList.add("is-stuck");
      else header.classList.remove("is-stuck");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* --- Form contatti: invio simulato (da collegare a un backend) --- */
  var form = document.querySelector("form[data-contact-form]");
  if (form) {
    var status = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      // TODO: sostituire con una vera invio (fetch verso un endpoint o servizio email).
      if (status) {
        status.textContent = "Grazie! Il tuo messaggio è stato inviato. Ti risponderemo al più presto.";
        status.classList.add("is-visible");
      }
      form.reset();
    });
  }

  /* --- Anno corrente nel footer --- */
  var year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();
