import React, { FC } from 'react';

import CircleItemMolecule from '../../molecules/circleItemMolecule/CircleItemMolecule';

import './circleButtonGroupOrganism.css';

interface CircleButtonGroupOrganismProps {
  circleItems: Array<{
    label: string;
    src: string;
  }>;
}

const CircleButtonGroupOrganism: FC<CircleButtonGroupOrganismProps> = ({circleItems}) => {
  return (
    <div className='circle-item-group-organism'>
      {circleItems.map(({ src, label }) => (
        <CircleItemMolecule key={label} src={src} label={label} />
      ))}
    </div>
  );
};

export default CircleButtonGroupOrganism;
