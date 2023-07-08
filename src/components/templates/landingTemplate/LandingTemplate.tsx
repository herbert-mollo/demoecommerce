import React, { FC }from 'react';
import HeaderOrganism from '../../ui/organisms/headerOrganism/HeaderOrganism';
import CarouselOrganism from '../../ui/organisms/carouselOrganism/CarouselOrganism';
import CircleButtonGroupOrganism from '../../ui/organisms/circleButtonGroupOrganism/CircleButtonGroupOrganism';

interface LandingTemplateProps {
  linkItems: any[];
  imgBanners: any[];
  circleItems: any[];
}

const LandingTemplate: FC<LandingTemplateProps> = ({ linkItems, imgBanners, circleItems }) => {
  return (
    <>
      <HeaderOrganism linkItems={linkItems}/>
      <CarouselOrganism images={imgBanners}/>
      <CircleButtonGroupOrganism circleItems={circleItems}/>
    </>
  );
};

export default LandingTemplate;
