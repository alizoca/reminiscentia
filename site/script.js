const scenes = Array.from(document.querySelectorAll(".scene"));
const controls = document.querySelector(".gallery-controls");
const count = controls.querySelector(".gallery-count");
let current = 0;

function showScene(index) {
  scenes[current].hidden = true;
  current = (index + scenes.length) % scenes.length;
  const scene = scenes[current];
  scene.hidden = false;
  count.textContent = `${current + 1} / ${scenes.length} · ${scene.querySelector("h3").textContent}`;
}

scenes.forEach((scene) => { scene.hidden = true; });
showScene(0);
controls.hidden = false;
controls.querySelector(".gallery-prev").addEventListener("click", () => showScene(current - 1));
controls.querySelector(".gallery-next").addEventListener("click", () => showScene(current + 1));

const compare = document.querySelector(".compare");
const range = compare.querySelector("input");
function updateComparison() {
  compare.style.setProperty("--pos", `${range.value}%`);
}
range.addEventListener("input", updateComparison);
updateComparison();

const dialog = document.querySelector("#lb");
const preview = dialog.querySelector("img");
const caption = dialog.querySelector("#lb-cap");

document.querySelectorAll(".strip button").forEach((button) => {
  const image = button.querySelector("img");
  button.addEventListener("click", () => {
    preview.src = image.currentSrc || image.src;
    preview.alt = image.alt;
    caption.textContent = button.nextElementSibling.textContent;
    dialog.showModal();
  });
});
