import React from 'react';

const SectionSwitch = ({ section, onClick }) => {
  return (
    <div>
      <button onClick={() => onClick("Skills")}>Skills</button>
      <button onClick={() => onClick("Projects")}>Projects</button>
      <button onClick={() => onClick("Education")}>Education</button>
    </div>
  );
}

export default SectionSwitch;
