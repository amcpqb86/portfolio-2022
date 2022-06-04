console.log("test");

const container = document.getElementById("projects-container");
const prev_btn = document.getElementById("prev");
const next_btn = document.getElementById("next");

//Prev Button
prev_btn.addEventListener("click", (e) => {
  e.preventDefault();
  container.scrollLeft -= 300;
});

//Next Button
next_btn.addEventListener("click", (e) => {
  e.preventDefault();
  container.scrollLeft += 300;
});
