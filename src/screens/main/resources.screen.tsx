import {View, Text} from 'react-native';
import React from 'react';
import styles from './resources.style';
import {Map, NavOptions} from '../../components';

type Props = any;

const Resources: React.FC<Props> = () => {
  return (
    <View>
      <NavOptions />
      <Map />
      <Text>Resources</Text>
    </View>
  );
};

export default Resources;
