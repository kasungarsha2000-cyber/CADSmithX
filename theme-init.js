/* Applies the saved Light/Dark choice before the page paints, so a dark
   reload never flashes white. A plain file rather than an inline script so
   the Content-Security-Policy can keep inline scripts blocked. */
(function () {
  var t = null;
  try {
    t = localStorage.getItem('cadsmitx-theme');
  } catch (e) {}
  if (t !== 'light' && t !== 'dark') {
    t = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  document.documentElement.setAttribute('data-theme', t);
})();
