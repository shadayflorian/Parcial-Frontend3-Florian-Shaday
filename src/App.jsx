import React, { useState } from 'react';
import Card from './Card';
import Form from './Form';

function App() {
  const [cardInfo, setCardInfo] = useState('');

  const handleFormSubmit = (formData) => {
    setCardInfo(formData);
  };

  return (
    <div>
      <h1>Musica Favorita</h1>
      <Form onSubmit={handleFormSubmit} />
      {cardInfo && <Card name={cardInfo.name} music={cardInfo.music} />}
    </div>
  );
}

export default App;
