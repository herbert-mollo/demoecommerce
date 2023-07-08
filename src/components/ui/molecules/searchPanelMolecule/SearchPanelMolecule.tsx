import React, { FC }from 'react';
import './searchPanelMolecule.css';
import { imgLogo } from '../../../../utils/data/images';
import { Button, Select, Input } from 'semantic-ui-react'

interface SearchPanelMoleculeProps {
}

const options = [
  { key: '.com', text: '.com', value: '.com' },
  { key: '.net', text: '.net', value: '.net' },
  { key: '.org', text: '.org', value: '.org' },
]

const SearchPanelMolecule: FC<SearchPanelMoleculeProps> = () => {
  return (
    <div className='search-panel-molecule'>
      <img src={imgLogo.url} alt='img not founded' height='100%'/>
      <Input size='mini' type='text' placeholder='Search...' action>
        <input />
        <Select compact options={options} defaultValue='articles' />
        <Button type='submit'>Search</Button>
      </Input>
    </div>
  );
};

export default SearchPanelMolecule;
