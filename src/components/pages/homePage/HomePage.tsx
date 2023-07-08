import React, { FC }from 'react';

import LandingTemplate from '../../templates/landingTemplate/LandingTemplate';
import { imgBanners } from '../../../utils/data/images';
import { circleItems } from '../../../utils/data/circleItems';


const links = [
  {
    name: 'link1',
    url: '',
  },
  {
    name: 'link2',
    url: '',
  }
];

const HomePage: FC = () => {
  return (
    <div className='home-page'>
      <LandingTemplate linkItems={links} imgBanners={imgBanners} circleItems={circleItems}/>
    </div>
  );
};

export default HomePage;
