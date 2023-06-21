import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './customInput.styles';
import Icon, {IconName, IconType} from './icons.component';
import theme from '../../utils/theme';

type Props = {
  inputType?: InputType;
  placeholder: string;
  leftAddOn?: string;
  rightAddOn?: string;
  leftIcon?: IconName;
  leftIconType?: IconType;
  rightIcon?: IconName;
  rightIconType?: IconType;
  onPress?: any;
  onChange: any;
  isValid?: boolean;
  error?: string;
};

export enum InputType {
  EMAIL = 'email',
  PASSWORD = 'password',
  TEXT = 'text',
  NUMERIC = 'numeric',
}

const Input: React.FC<Props> = ({
  inputType = InputType.TEXT,
  placeholder = '',
  leftAddOn,
  rightAddOn,
  leftIcon,
  rightIcon,
  leftIconType,
  rightIconType,
  onPress,
  onChange,
  isValid = true,
  error = '',
}) => {
  return (
    <>
      <View style={styles.mainContiainer}>
        {leftIcon && leftIconType && (
          <View
            style={[
              styles.iconContainer,
              styles.leftAddOn,
              !isValid && styles.errorInput,
            ]}>
            <Icon
              iconType={leftIconType}
              iconName={leftIcon}
              size={25}
              color={'black'}
            />
          </View>
        )}
        {leftAddOn && (
          <View
            style={[
              styles.addOnContainer,
              styles.leftAddOn,
              !isValid && styles.errorInput,
            ]}>
            <Text>{leftAddOn}</Text>
          </View>
        )}
        <TextInput
          style={[
            styles.inputContainer,
            (leftAddOn || leftIcon) && styles.inputLeftAddOn,
            (rightAddOn || rightIcon) && styles.inputRightAddOn,
            !isValid && styles.errorInput,
          ]}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={'gray'}
          inputMode={
            inputType === InputType.EMAIL
              ? 'email'
              : inputType === InputType.NUMERIC
              ? 'numeric'
              : 'text'
          }
          secureTextEntry={inputType === InputType.PASSWORD}
        />
        {rightAddOn && (
          <View
            style={[
              styles.addOnContainer,
              styles.rightAddOn,
              !isValid && styles.errorInput,
            ]}>
            <Text>{rightAddOn}</Text>
          </View>
        )}
        {rightIcon && rightIconType && (
          <TouchableOpacity
            style={[
              styles.iconContainer,
              styles.rightAddOn,
              !isValid && styles.errorInput,
            ]}
            onPress={onPress}>
            <Icon
              iconType={rightIconType}
              iconName={rightIcon}
              size={25}
              color={'black'}
            />
          </TouchableOpacity>
        )}
      </View>
      {!isValid && error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default Input;
