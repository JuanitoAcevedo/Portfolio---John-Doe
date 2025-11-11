import React from 'react';

const SkillBar = ({ skill, level, color }) => {
  return (
    <div className="mb-3">
      <label>{skill}</label>
      <div className="progress">
        <div className="progress-bar" role="progressbar" style={{ width: `${level}%`,backgroundColor: color || '#0d6efd', }}>
          {level}%
        </div>
      </div>
    </div>
  );
};

export default SkillBar;