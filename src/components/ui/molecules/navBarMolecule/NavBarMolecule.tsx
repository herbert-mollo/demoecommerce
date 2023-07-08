import React, { FC }from 'react';

import { Dropdown, Menu } from 'semantic-ui-react';
import './navBarMolecule.css';

interface NavBarMoleculeProps {
  linkItems: Array<{
    name: any;
  }>
}

const NavBarMolecule: FC<NavBarMoleculeProps> = ({linkItems}) => {
  return (
    <div className='nav-bar-molecule'>
      <Menu size='mini'>
        <Menu.Item>Home</Menu.Item>
        <Dropdown text='Shopping' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Header>Categories</Dropdown.Header>
            <Dropdown.Item>
              <Dropdown text='Clothing'>
                <Dropdown.Menu>
                  <Dropdown.Header>Mens</Dropdown.Header>
                  <Dropdown.Item>Shirts</Dropdown.Item>
                  <Dropdown.Item>Pants</Dropdown.Item>
                  <Dropdown.Item>Jeans</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Header>Womens</Dropdown.Header>
                  <Dropdown.Item>Dresses</Dropdown.Item>
                  <Dropdown.Item>Shoes</Dropdown.Item>
                  <Dropdown.Item>Bags</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Item>
            <Dropdown.Item>Home Goods</Dropdown.Item>
            <Dropdown.Item>Bedroom</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Order</Dropdown.Header>
            <Dropdown.Item>Status</Dropdown.Item>
            <Dropdown.Item>Cancellations</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        {linkItems.map(({ name }) => (
        <Menu.Item key={name} as='a' href='https://bo.ebay.com/'>
          {name}
        </Menu.Item>
      ))}
      </Menu>
    </div>
  );
};

export default NavBarMolecule;
