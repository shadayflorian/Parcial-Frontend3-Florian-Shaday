//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario


function Card({ name, music }) {
    return (
      <div className="card">
        <h2>Hola {name}!</h2>
        <p>Sabemos que tu Música favorita es: {music}</p>
        <p>¡Que gran gusto musical!</p>
      </div>
    );
  }
  
  export default Card;