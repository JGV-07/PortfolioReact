import React from 'react';

const DarkMode = ({ isDarkMode, onClick }) => {
  return (
    <div>
      {isDarkMode ? (
        <img onClick={onClick} className='sun' src="/sun.png" alt="" />
      ) : (
        <img onClick={onClick} className='moon' src="/moon.png" alt="" />
      )}
    </div>
  )
}

export default DarkMode
