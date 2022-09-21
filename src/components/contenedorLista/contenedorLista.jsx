import Title from "./titles/title";
import SubTitle from "./titles/subTitle";
import AlertMessage from "./alertMessage";
import Option from "./option";
import OptionDisabled from "./optionDisabled";
import { useState } from "react";

const ContenedorLista = ({
  lista,
  agregar,
  eliminar,
  editar,
  eliminarTodo,
}) => {
  const [validInput, setValidInput] = useState(true);

  const validarInput = (e) => {
    const newValue = e.target.value;
    if (lista.filter((tarea) => tarea[0].toUpperCase === newValue.toUpperCase).length > 0) {
      setValidInput(false);
    }else {
      setValidInput(true)
    }
  };
  return (
    <main>
      <Title text="Lista de Tareas!" />

      <form action="">
        <input
          id="tarea"
          placeholder="Escriba una tarea"
          name="tarea"
          type="text"
          onInput={validarInput}
          className={validInput ? "" : "invalidInput"}
        />

        <select name="prioridad" id="prioridad" defaultValue={"DEFAULT"}>
          <OptionDisabled textOption={"Prioridades"} />
          <Option valueOption={"c-prioridad-baja"} textOption={"Baja"} />
          <Option valueOption={"b-prioridad-media"} textOption={"Media"} />
          <Option valueOption={"a-prioridad-alta"} textOption={"Alta"} />
        </select>
        <button
          id="agregar"
          onClick={(e) => {
            e.preventDefault();
            if(validInput){
            agregar();
          }}}
        >
          {" "}
          Agregar!{" "}
        </button>
      </form>

      <SubTitle text={"Tareas!"} />

      <ul id="lista-tareas">
        {lista.length === 0 && (
          <AlertMessage
            idMessage={"mensaje-lista-vacia"}
            alertText={"Parece que no hay nada por aqui!"}
          />
        )}

        {lista
          .sort((a, b) => {
            //a,b es un valor referencial y los compara
            const nameA = a[1].toUpperCase(); // touppercase hace que ignore si es mayuscula o minuscula
            const nameB = b[1].toUpperCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }

            // names must be equal
            return 0;
          })
          .map((item, key) => {
            return (
              <div className="flex-between" key={key}>
                <li className={item[1]}> {item[0]} </li>
                <div className="div-iconos">
                  <img
                    src="editar.png"
                    alt="icono editar"
                    onClick={(e) => {
                      e.preventDefault();
                      editar(item[2]);
                    }}
                  />
                  <img
                    src="eliminar.png"
                    alt="icono eliminar"
                    onClick={(e) => {
                      e.preventDefault();
                      eliminar(item[2]);
                    }}
                  />
                </div>
              </div>
            );
          })}
      </ul>
      {lista.length > 0 && (
        <button
          className="deleteAll"
          onClick={(e) => {
            e.preventDefault();
            eliminarTodo();
          }}
        >
          Eliminar Todo{" "}
        </button>
      )}
    </main>
  );
};

export default ContenedorLista;
