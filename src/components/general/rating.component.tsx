/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';
import {icons} from '../../utils';

type Props = {
  rate: number;
  containerStyle?: any;
};
const Rating: React.FC<Props> = ({rate, containerStyle}) => {
  return (
    <View style={{flexDirection: 'row', ...containerStyle}}>
      {Array.from(Array(rate).keys()).map((_, i) => (
        <Image
          key={`full-${i}`}
          source={icons.star}
          resizeMode={'cover'}
          style={{marginLeft: i === 0 ? 0 : 5, width: 15, height: 15}}
        />
      ))}
    </View>
  );
};

export default Rating;
