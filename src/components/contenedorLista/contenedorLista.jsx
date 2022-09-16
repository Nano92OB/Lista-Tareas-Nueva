import Title from "./titles/title";
import SubTitle from "./titles/subTitle";
import AlertMessage from "./alertMessage";
import Option from "./option";
import OptionDisabled from "./optionDisabled";

const ContenedorLista = ({ lista, agregar, eliminar, editar, eliminarTodo }) => {
  return (
    <main>
      <Title text="Lista de Tareas!" />

      <form action="">
        <input
          id="tarea"
          placeholder="Escriba una tarea"
          name="tarea"
          type="text"
        />

        <select name="prioridad" id="prioridad" defaultValue={"DEFAULT"}>
          <OptionDisabled textOption={"Prioridades"} />
          <Option valueOption={"prioridad-baja"} textOption={"Baja"} />
          <Option valueOption={"prioridad-media"} textOption={"Media"} />
          <Option valueOption={"prioridad-alta"} textOption={"Alta"} />
        </select>
        <button
          id="agregar"
          onClick={(e) => {
            e.preventDefault();
            agregar();
          }}
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

        {lista.map((item, key) => {
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
         Eliminar Todo </button>
        )}
    </main>
  );
};

export default ContenedorLista;
