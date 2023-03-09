import React, { useState } from 'react';

function Form({ onSubmit }) {

  const [name, setName] = useState([]);
  const [music, setMusic] = useState([]);
  const [formError, setFormError] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    //console.log("La info se envio");

    if (name.length < 3 || name.trim === "") {
      setFormError('Por favor chequea que la información sea correcta');
      return;
    }

    if (music.length < 6) {
      setFormError('Por favor chequea que la información sea correcta');
      return;
    }

    setFormError([]);
    onSubmit({ name, music });
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMusicChange = (event) => {
    setMusic(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      
        <label htmlFor="name">Ingresa tu nombre:</label>
        <input type="text" id='name' value={name} onChange={handleNameChange} />

        <label htmlFor="music">Música favorita:</label>
        <input type="text"  value={music} onChange={handleMusicChange} />
      
      <button type="submit">Enviar</button>

      {formError && <p>{formError}</p>}
    </form>
  );
}

export default Form