(function () {
  // comparador lápis → pixel
  var cmp = document.getElementById('cmp');
  cmp.querySelector('input').addEventListener('input', function (e) {
    cmp.style.setProperty('--pos', e.target.value + '%');
  });

  // ampliar páginas do caderno (Esc fecha nativamente)
  var lb = document.getElementById('lb');
  var lbImg = lb.querySelector('img');
  var lbCap = document.getElementById('lb-cap');
  document.querySelectorAll('.strip button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt;
      lbCap.textContent = btn.parentNode.querySelector('figcaption').textContent;
      lb.showModal();
    });
  });
  lb.addEventListener('click', function () { lb.close(); });
})();
