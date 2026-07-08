// Lightbox for the Sussex history site.
// Any <img> inside a <figure class="fig"> opens full-size in a modal on click.
// Caption text is taken from the figure's <figcaption>. Close on click / Esc.
(function () {
  function init() {
    var figs = document.querySelectorAll('figure.fig img');
    if (!figs.length) return;

    var overlay = document.createElement('div');
    overlay.className = 'lb-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<button class="lb-close" aria-label="Close image">&times;</button>' +
      '<img alt="">' +
      '<div class="lb-cap"></div>';
    document.body.appendChild(overlay);

    var lbImg = overlay.querySelector('img');
    var lbCap = overlay.querySelector('.lb-cap');
    var lbClose = overlay.querySelector('.lb-close');
    var lastTrigger = null;

    function open(src, alt, caption, trigger) {
      lastTrigger = trigger || null;
      lbImg.src = src;
      lbImg.alt = alt || '';
      lbCap.innerHTML = caption || '';
      lbCap.style.display = caption ? '' : 'none';
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      lbClose.focus();
    }
    function close() {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      // release the (possibly large) image after the fade
      setTimeout(function () { if (!overlay.classList.contains('open')) lbImg.src = ''; }, 250);
      if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
    }

    Array.prototype.forEach.call(figs, function (img) {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-label', 'View larger image' + (img.alt ? ': ' + img.alt : ''));
      function trigger() {
        var fig = img.closest('figure');
        var cap = fig ? fig.querySelector('figcaption') : null;
        // prefer a full-resolution source if one is given via data-full
        open(img.getAttribute('data-full') || img.currentSrc || img.src, img.alt, cap ? cap.innerHTML : '', img);
      }
      img.addEventListener('click', trigger);
      img.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trigger(); }
      });
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay || e.target === lbImg || e.target === lbClose) close();
    });
    document.addEventListener('keydown', function (e) {
      if (!overlay.classList.contains('open')) return;
      if (e.key === 'Escape') { close(); return; }
      // simple focus trap: only the close button is focusable inside the modal
      if (e.key === 'Tab') { e.preventDefault(); lbClose.focus(); }
    });
  }
  if (document.readyState !== 'loading') init();
  else document.addEventListener('DOMContentLoaded', init);
})();
