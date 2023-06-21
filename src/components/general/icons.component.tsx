import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

type Props = {
  iconType: IconType;
  iconName: IconName;
  size: number;
  color: string;
};

export enum IconName {
  USER = 'user',
  LOCK = 'lock',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
  CHEVRON_DOWN = 'chevron_down',
  CHEVRON_UP = 'chevron_up',
  ARROW_RIGHT = 'arrowright',
  ARROW_LEFT = 'arrowleft',
  BOOKMARK = 'bookmark',
  CALENDAR = 'calendar',
  BUILDING = 'building',
  MENU = 'menu',
  CLOSE = 'close',
  USERS = 'users',
  PLANE = 'plane',
  CLOCK = 'clock',
  HOME = 'home',
  EYE = 'eye',
  EYE_OFF = 'eye-off',
}

export enum IconType {
  ANT_DESIGN = 'ant_design',
  FEATHER = 'feather',
  FONT_AWESOME = 'font_awesome',
}

const Icon: React.FC<Props> = ({
  iconType,
  iconName,
  size = 25,
  color = 'black',
}) => {
  return (
    <>
      {iconType === IconType.ANT_DESIGN ? (
        <AntDesign name={iconName} size={size} color={color} />
      ) : iconType === IconType.FEATHER ? (
        <Feather name={iconName} size={size} color={color} />
      ) : (
        <FontAwesome name={iconName} size={size} color={color} />
      )}
    </>
  );
};

export default Icon;
