import React from 'react';
import './Error.css';
import { useNavigate } from 'react-router-dom';


function Error() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <main className="error">
      <div className="error__info">
        <h1 className="error__info_number">404</h1>
        <p className="error__info_text">Страница не найдена</p>
      </div>
      <button className="error__info_link" onClick={goBack}>Назад</button>
    </main>
  );
}

export default Error;
