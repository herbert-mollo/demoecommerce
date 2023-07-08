import React, { FC }from 'react';

import { Image } from 'semantic-ui-react'


interface CircleButtonProps {
  src: string;
}

const CircleButton: FC<CircleButtonProps> = ({src}) => {
  return (
    <Image src={src} alt='img not found' circular height='80px' width='80px' />
  );
};

export default CircleButton;
