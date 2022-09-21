import "./index.css";
import ContenedorLista from "./components/contenedorLista/contenedorLista";
import React, { Fragment, useState } from "react";

function App() {
  const [lista, setLista] = useState([]);

  const agregarTarea = () => {
    const tarea = document.getElementById("tarea");
    const prioridad = document.getElementById("prioridad");
    const id = Date.now();
    if (tarea.value !== "" && prioridad.value !== "DEFAULT")
      setLista([...lista, [tarea.value, prioridad.value, id]]);
    return (tarea.value = "");
  };

  const eliminarTarea = (id) => {
    setLista(lista.filter((value) => value[2] !== id));
  };

  const editarTarea = (id) => {
    const tarea = document.getElementById("tarea");
    const prioridad = document.getElementById("prioridad");

    const edit = lista.filter((value) => value[2] === id);
    //const editCategory = edit[0]

    const editTareas = edit[0];

    tarea.value = editTareas[0];
    prioridad.text = editTareas[1];
    prioridad.value = editTareas[1];

    eliminarTarea(editTareas[2]);
    console.log(lista);
  };

  const eliminarTodo = (e) => {
    setLista([]);
    console.log(lista);
  };

  return (
    <Fragment>
      <ContenedorLista
        lista={lista}
        agregar={agregarTarea}
        eliminar={eliminarTarea}
        editar={editarTarea}
        eliminarTodo={eliminarTodo}
      />
    </Fragment>
  );
}

export default App;
