import React from 'react';

// Dibawah ini adalah contoh penggunaan useState yang salah

const ErrorExample = () => {
  let title = 'random title';

  const handleClick = () => {
    title = 'hello there';
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
