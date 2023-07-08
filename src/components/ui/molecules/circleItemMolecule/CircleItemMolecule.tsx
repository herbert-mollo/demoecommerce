import React, { FC }from 'react';

import CircleButton from '../../atoms/circleButton/CircleButton';

import './circleItemMolecule.css';

interface CircleItemMoleculeProps {
  src: string;
  label: string;
}

const CircleItemMolecule: FC<CircleItemMoleculeProps> = ({src, label}) => {
  return (
    <div className='circle-item-molecule'>
      <CircleButton src={src} />
      <label>{label}</label>
    </div>
  );
};

export default CircleItemMolecule;
