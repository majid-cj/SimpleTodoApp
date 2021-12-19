import React, {FC} from 'react';
import SVG, {Path} from 'react-native-svg';
import {IconsProps} from './types';

export const ArrowRight: FC<IconsProps> = ({color = '#000', size = 24}) => {
  return (
    <SVG x="0px" y="0px" viewBox="0 0 512 512" width={size} height={size}>
      <Path
        d="M382.678 226.804L163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
        fill={color}
      />
    </SVG>
  );
};
