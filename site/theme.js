const themeButton = document.querySelector('.theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');

function applyTheme(dark) {
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  themeButton.setAttribute('aria-pressed', String(dark));
  themeColor.content = dark ? '#050818' : '#f2f7fc';
}

let savedTheme;
try {
  savedTheme = localStorage.getItem('theme');
} catch {
  // O botão continua funcionando quando o navegador bloqueia o armazenamento.
}
applyTheme(savedTheme === 'dark');
themeButton.hidden = false;

themeButton.addEventListener('click', () => {
  const dark = document.documentElement.dataset.theme !== 'dark';
  applyTheme(dark);
  try {
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  } catch {
    // A escolha vale para esta página mesmo sem poder ser salva.
  }
});
