console.groupCollapsed("Reference: ");
console.log("img-10 ->", "https://wallhaven.cc/w/nmzox8");
console.log("img-11 ->", "https://wallhaven.cc/w/43yq6y");
console.log("img-12 ->", "https://wallhaven.cc/w/3kdvg6");
console.log("img-13 ->", "https://wallhaven.cc/w/p8d67m");
console.log("img-14 ->", "https://wallhaven.cc/w/nzw76y");
console.log("img-15 ->", "https://wallhaven.cc/w/73ewlo");
console.log("img-16 ->", "https://wallhaven.cc/w/4dm8oo");
console.log("img-17 ->", "https://wallhaven.cc/w/0pvog3");
console.log("img-18 ->", "https://wallhaven.cc/w/nrq25j");
console.log("img-19 ->", "https://wallhaven.cc/w/3k713v");
console.groupEnd();

const d = document;

let inicial = 90;

d.addEventListener("click", (e) => {
  if (e.target.matches(".grid")) {
    e.target.style.transform = `scale(.8) rotate(${inicial}deg)`;
    let imagenes = e.target.querySelectorAll("img");
    imagenes.forEach((el) => {
      el.style.setProperty("--g", `-${inicial}deg`);
    });
    inicial += 45;
  }
});
