const input = document.getElementById("task");
const btn = document.getElementById("btn");
const lista = document.getElementById("lista");
const total = document.getElementById("total");
const realizadas = document.getElementById("realizadas");

const pintarLista = () => {
  lista.innerHTML = "";
  listaTareas.forEach((tarea) => {
    // Crear li
    const li = document.createElement("li");
    li.id = tarea.id;
    // Crear div
    const div = document.createElement("div");
    div.classList.add("tarea-div");
    // Crear p
    const p = document.createElement("p");
    p.innerHTML = tarea.nombre;
    // Crear checkbox input
    const div2 = document.createElement("div");
    div2.classList.add("tarea-div");
    const input2 = document.createElement("input");
    input2.setAttribute("type", "checkbox");
    // Crear button
    const button = document.createElement("button");
    button.innerHTML = "Eliminar";
    button.classList.add("btn");
    // Agregar a html
    div.appendChild(p);
    div.appendChild(div2);
    div2.appendChild(input2);
    div.appendChild(button);
    li.appendChild(div);
    lista.appendChild(li);

    // Checkbox
    input2.addEventListener("click", () => {
      tarea.realizado = !tarea.realizado;
      realizadas.innerHTML = listaTareas.filter((tareaFilter) => tareaFilter.realizado === true).length;
    });
    // Eliminar
    button.addEventListener("click", () => {
      total.innerHTML = listaTareas.length - 1;
      listaTareas = listaTareas.filter((tareaFilter) => tareaFilter.id !== tarea.id);
      pintarLista();
      realizadas.innerHTML = listaTareas.filter((tareaFilter) => tareaFilter.realizado === true).length;
    });
  });
};
// Array
let listaTareas = [
  {
    id: 1,
    nombre: "Estudiar Javascript",
    realizado: false,
  },
  {
    id: 2,
    nombre: "Jugar Valorant",
    realizado: false,
  },
  {
    id: 3,
    nombre: "Comer sano",
    realizado: false,
  },
];
pintarLista();

document.addEventListener("submit", (e) => {
  e.preventDefault();
  total.innerHTML = listaTareas.length + 1;
  const nombreTarea = input.value;
  listaTareas.push({
    id: Date.now(),
    nombre: nombreTarea,
    realizado: false,
  });

  input.value = "";

  pintarLista();
});
