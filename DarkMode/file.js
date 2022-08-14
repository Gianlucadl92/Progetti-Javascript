//seleziono nodi al dom
const title = document.getElementById("title");
const btn = document.getElementById("btn");

//setto il contatore a zero
let count = 0;

//funzione che accede alle proprietà di stile dei nodi presi dal DOM e le modifica
function changeMod() {
  if (count === 0) {
    document.body.style.backgroundColor = "#fcfaff";
    title.style.color = "#343a40ff";
    btn.style.backgroundColor = "#6200ee";
    count++;
  } else {
    document.body.style.backgroundColor = "#343a40ff";
    title.style.color = "#fcfaff";
    btn.style.backgroundColor = "#7026ba";
    btn.style.color = "#f3dffb";
    count--;
  }
}

//aggiungo evento al bottone
btn, addEventListener("click", changeMod);
