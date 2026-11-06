/* ============================================================
   MAQUIS CHIC RR — scripts (v2)
   - Menu mobile (burger)
   - Carrousel d'images (Précédent / Suivant + points)
   - Formulaire de réservation : envoie la demande sur WhatsApp
   - Badge "Ouvert / Fermé" calculé d'après les horaires Google
     (Mar–Dim 10h–22h, lundi fermé — confirmé sur la fiche Google)
   ============================================================ */

(function () {
  "use strict";

  var WHATSAPP_NUMBER = "22870751719";

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("mainNav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Apparition des sections au défilement ---------- */
  var revealItems = document.querySelectorAll(
    ".about-inner, .fresh .container, .menu .container, .kitchen-card, "
      + ".testimonials-head, .testimonials-grid, .booking-inner"
  );
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reducedMotion && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(function (item) {
      item.classList.add("reveal");
      revealObserver.observe(item);
    });
  }

  /* ---------- Carrousel ---------- */
  var track = document.getElementById("carouselTrack");
  var dotsWrap = document.getElementById("carouselDots");
  var prevBtn = document.getElementById("carouselPrev");
  var nextBtn = document.getElementById("carouselNext");
  if (track && dotsWrap) {
    var slides = track.children.length;
    var index = 0;
    var dots = [];
    for (var i = 0; i < slides; i++) {
      (function (n) {
        var dot = document.createElement("button");
        dot.setAttribute("aria-label", "Aller à l'image " + (n + 1));
        dot.addEventListener("click", function () { goTo(n); });
        dotsWrap.appendChild(dot);
        dots.push(dot);
      })(i);
    }
    function goTo(n) {
      index = (n + slides) % slides;
      track.style.transform = "translateX(-" + index * 100 + "%)";
      dots.forEach(function (d, k) { d.classList.toggle("active", k === index); });
    }
    if (prevBtn) prevBtn.addEventListener("click", function () { goTo(index - 1); });
    if (nextBtn) nextBtn.addEventListener("click", function () { goTo(index + 1); });
    goTo(0);
  }

  /* ---------- Formulaire de réservation -> WhatsApp ---------- */
  var form = document.getElementById("bookingForm");
  if (form) {
    // Date minimum : aujourd'hui
    var dateInput = document.getElementById("date");
    if (dateInput) {
      var today = new Date();
      var yyyy = today.getFullYear();
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var dd = String(today.getDate()).padStart(2, "0");
      dateInput.min = yyyy + "-" + mm + "-" + dd;
      dateInput.value = dateInput.min;
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var guests = document.getElementById("guests").value;
      var date = document.getElementById("date").value;
      var time = document.getElementById("time").value;
      var room = document.getElementById("room").value;
      var dateFr = date ? date.split("-").reverse().join("/") : "";
      var message = "Bonjour MAQUIS CHIC RR, je souhaite réserver une table : "
        + guests + ", le " + dateFr + " à " + time + " (" + room + ").";
      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(message);
      window.open(url, "_blank", "noopener");
    });
  }

  /* ---------- Ouvert / fermé maintenant ----------
     Horaires (fiche Google) : mardi–dimanche 10h–22h, lundi fermé.
     Heure locale du visiteur (le maquis est à Lomé, UTC+0). */
  var dot = document.getElementById("openDot");
  var statusEl = document.getElementById("openStatus");
  if (dot && statusEl) {
    var now = new Date();
    var day = now.getDay(); // 0 = dimanche, 1 = lundi
    var minutes = now.getHours() * 60 + now.getMinutes();
    var open = day !== 1 && minutes >= 10 * 60 && minutes < 22 * 60;
    if (open) {
      statusEl.textContent = "Ouvert actuellement · ferme à 22h00";
    } else {
      dot.classList.add("closed");
      statusEl.textContent = day === 1
        ? "Fermé aujourd'hui (lundi) · réouverture mardi à 10h00"
        : "Fermé pour le moment · ouvre à 10h00";
    }
  }
})();
