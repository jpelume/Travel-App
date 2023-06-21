import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import styles from './customButton.styles';
import Icon, {IconName, IconType} from './icons.component';
import theme from '../../utils/theme';

type Props = {
  btnText: string;
  btnType?: ButtonType;
  icon?: IconName;
  iconType?: IconType;
  disabled?: boolean;
  loading?: boolean;
  onPress: any;
};

export enum ButtonType {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  TEXT = 'text',
}

const CustomButton: React.FC<Props> = ({
  btnText = 'Button',
  btnType = ButtonType.PRIMARY,
  icon,
  iconType,
  disabled = false,
  loading = false,
  onPress = () => {},
}) => {
  const {width} = useWindowDimensions();

  console.log('device width: ', width);
  return (
    <TouchableOpacity
      style={[
        btnType === ButtonType.PRIMARY
          ? styles.btnWrapper
          : btnType === ButtonType.SECONDARY
          ? styles.secondaryWrapper
          : styles.textWrapper,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Text
        style={[
          btnType === ButtonType.PRIMARY
            ? styles.btnText
            : btnType === ButtonType.SECONDARY
            ? styles.secondaryText
            : styles.text,
          icon && iconType && styles.spaceRight,
        ]}>
        {btnText}
      </Text>
      {icon && iconType && (
        <>
          <Icon
            iconName={icon}
            iconType={iconType}
            size={25}
            color={
              btnType === ButtonType.PRIMARY
                ? 'white'
                : btnType === ButtonType.SECONDARY
                ? 'black'
                : theme.COLORS.PRIMARY
            }
          />
          <View style={styles.spaceRight} />
        </>
      )}
      {loading && (
        <ActivityIndicator
          color={
            btnType === ButtonType.PRIMARY
              ? 'white'
              : btnType === ButtonType.SECONDARY
              ? 'black'
              : theme.COLORS.PRIMARY
          }
        />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

/************************************SOCIAL BUTTON  ************************************/

export enum SocialButtonType {
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}

type SocialProps = {
  type: SocialButtonType;
  disabled?: boolean;
  loading?: boolean;
  onPress: any;
  btnText: string;
};

export const SocialButton: React.FC<SocialProps> = ({
  btnText,
  type,
  disabled = false,
  loading = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      style={[
        type === SocialButtonType.FACEBOOK
          ? styles.facebookWrapper
          : styles.googleWrapper,
        disabled && styles.disabled,
      ]}
      disabled={disabled}
      onPress={onPress}>
      <Icon
        iconName={
          type === SocialButtonType.FACEBOOK
            ? IconName.FACEBOOK
            : IconName.GOOGLE
        }
        iconType={IconType.FONT_AWESOME}
        color={
          type === SocialButtonType.FACEBOOK
            ? theme.COLORS.FACEBOOK
            : theme.COLORS.GOOGLE
        }
        size={24}
      />
      <Text
        style={
          type === SocialButtonType.FACEBOOK
            ? styles.facebookText
            : styles.googleText
        }>
        {btnText}
      </Text>
      {loading && (
        <ActivityIndicator
          color={
            type === SocialButtonType.FACEBOOK
              ? theme.COLORS.FACEBOOK
              : theme.COLORS.GOOGLE
          }
        />
      )}
    </TouchableOpacity>
  );
};
