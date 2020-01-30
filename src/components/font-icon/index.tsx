import React from 'react';

interface IFontIconProps {
  iconName: string;
  className?: string;
  status?: string;
}
const FontIcon = (props: IFontIconProps) => (
  <i className={`ws-${props.iconName || ''} ${props.className || ''} ${props.status || ''}`} />
);

export default FontIcon;
