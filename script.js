/* =========================================================
   SC34 — script.js
   Steuert NUR das Ein-/Ausklappen des mobilen Menüs
   (Hamburger-Icon). Sonst passiert auf dieser Seite nichts
   per JavaScript — bewusst minimal gehalten.
   ========================================================= */

// Warten, bis das komplette HTML-Dokument geladen ist,
// bevor wir nach Elementen suchen (sonst könnten sie noch
// nicht existieren).
document.addEventListener('DOMContentLoaded', function () {

  // Die zwei Elemente, die wir steuern müssen:
  // 1. Der Button mit den drei Linien (Hamburger-Icon)
  var toggleButton = document.querySelector('.nav-toggle');
  // 2. Das Navigationsmenü, das ein-/ausgeblendet wird
  var nav = document.querySelector('.main-nav');

  // Sicherheits-Check: falls eines der Elemente fehlt
  // (z.B. weil im HTML eine Klasse umbenannt wurde),
  // bricht das Skript hier sauber ab, statt einen Fehler
  // in der Konsole zu werfen.
  if (!toggleButton || !nav) return;

  // Klick auf den Hamburger-Button:
  toggleButton.addEventListener('click', function () {
    // .toggle() fügt die Klasse hinzu, wenn sie fehlt,
    // und entfernt sie, wenn sie schon da ist —
    // das ist der "Auf/Zu"-Mechanismus.
    nav.classList.toggle('is-open');
    toggleButton.classList.toggle('is-active');

    // Für Screenreader: sagt an, ob das Menü gerade
    // geöffnet oder geschlossen ist.
    var isOpen = nav.classList.contains('is-open');
    toggleButton.setAttribute('aria-expanded', isOpen);
  });

  // Komfort-Funktion: Wenn der Nutzer auf einen Link im
  // mobilen Menü klickt, soll sich das Menü automatisch
  // wieder schließen.
  var navLinks = nav.querySelectorAll('a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggleButton.classList.remove('is-active');
      toggleButton.setAttribute('aria-expanded', false);
    });
  });

});
