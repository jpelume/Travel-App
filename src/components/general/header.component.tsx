import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './header.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {icons} from '../../utils';

type Props = {
  title: string;
  leftOnPress?: any;
  right?: any;
  containerStyle?: any;
};
const Header: React.FC<Props> = ({
  title = 'Header Title',
  leftOnPress,
  right,
  containerStyle,
}) => {
  return (
    <View style={[styles.headerContainer, containerStyle]}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity style={styles.backButton} onPress={leftOnPress}>
          <Image
            source={icons.left_arrow}
            resizeMode="contain"
            style={styles.backArrow}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>{title}</Text>
      </View>

      <TouchableOpacity
        style={[styles.rightContainer, right && styles.backgroundColor]}>
        {right && (
          <Image
            source={icons.settings}
            resizeMode="contain"
            style={styles.rightButton}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Header;
