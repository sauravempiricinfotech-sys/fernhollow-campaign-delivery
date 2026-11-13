document.addEventListener('DOMContentLoaded', function () {
  var e = document.getElementById('eta');
  if (e) { e.textContent = document.documentElement.getAttribute('data-eta'); }
});
