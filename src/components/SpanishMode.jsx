import React from 'react';

const SpanishMode = ({ isSpanishMode, onClick }) => {
  return (
    <div className='toggle_lenguage'>
      {isSpanishMode ? (
        <img onClick={onClick} className='es' src="/src/assets/EN.png" alt="" />
      ) : (
        <img onClick={onClick} className='en' src="/src/assets/ES.png" alt="" />
      )}
    </div>
  )
}

export default SpanishMode