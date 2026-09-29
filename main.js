// Jerry Musa — portfolio
// Theme toggle, mobile nav, photo lightbox, contact form submit.

(function () {
  "use strict";

  var root = document.documentElement;
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // --- Theme toggle -------------------------------------------------------

  var themeBtn = document.querySelector(".theme-toggle");

  function setTheme(dark, persist) {
    if (dark) {
      root.setAttribute("data-theme", "dark");
    } else {
      root.removeAttribute("data-theme");
    }
    if (persist) {
      localStorage.setItem("theme", dark ? "dark" : "light");
    }
  }

  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      setTheme(!root.hasAttribute("data-theme"), true);
    });

    // Follow OS changes only while the visitor hasn't chosen a theme.
    var media = window.matchMedia("(prefers-color-scheme: dark)");
    var onChange = function (e) {
      if (!localStorage.getItem("theme")) setTheme(e.matches, false);
    };
    if (media.addEventListener) {
      media.addEventListener("change", onChange);
    } else if (media.addListener) {
      media.addListener(onChange);
    }
  }

  // --- Mobile navigation ---------------------------------------------------

  var navToggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (navToggle && nav) {
    navToggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.focus();
      }
    });
  }

  // --- Lightbox -------------------------------------------------------------

  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightbox-img");
  var lastTrigger = null;

  document.querySelectorAll("[data-lightbox]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!lightbox || !lightboxImg) return;
      lastTrigger = btn;
      var img = btn.querySelector("img");
      lightboxImg.src = btn.getAttribute("data-lightbox");
      lightboxImg.alt = img ? img.alt : "";
      if (typeof lightbox.showModal === "function") {
        lightbox.showModal();
      }
    });
  });

  if (lightbox) {
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) lightbox.close();
    });
    lightbox.addEventListener("close", function () {
      lightboxImg.src = "";
      if (lastTrigger) lastTrigger.focus();
    });
  }

  // --- Contact form (Netlify) -------------------------------------------------

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");

  if (form && status) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var data = new FormData(form);

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString()
      })
        .then(function () {
          status.textContent = "Thanks — your message has been sent. I'll reply by email.";
          status.className = "form-status is-success";
          form.reset();
        })
        .catch(function () {
          status.textContent = "Something went wrong. Email me directly at yo.jerrymusa2018@gmail.com.";
          status.className = "form-status is-error";
        });
    });
  }
})();
