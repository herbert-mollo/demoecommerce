import React, { FC } from 'react';
import './headerOrganism.css';
import NavBarMolecule from '../../molecules/navBarMolecule/NavBarMolecule';
import SearchPanelMolecule from '../../molecules/searchPanelMolecule/SearchPanelMolecule';

interface HeaderOrganismProps {
  linkItems: Array<{
    name: any;
  }>
}

const HeaderOrganism: FC<HeaderOrganismProps> = ({linkItems}) => {
  return (
    <div className='header-organism'>
      <div className='ho-p1'><NavBarMolecule linkItems={linkItems}/></div>
      <div className='ho-p2'><SearchPanelMolecule /></div>
      <div className='ho-p3'><NavBarMolecule linkItems={linkItems}/></div>
    </div>
  )
};

export default HeaderOrganism;
