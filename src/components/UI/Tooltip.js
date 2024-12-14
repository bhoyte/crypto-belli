import React from 'react';
import styles from '../../styles/UI.module.css';

const Tooltip = ({ content, position }) => {
  return (
    <div 
      className={styles.tooltip}
      style={{
        left: position?.x,
        top: position?.y
      }}
    >
      {content}
    </div>
  );
};

export default Tooltip;
