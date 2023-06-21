import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './customDropdownInput.styles';
import {View} from 'react-native';

type Props = {
  data: any;
  setSelectedItem: any;
  placeholder: string;
};

const DropDown: React.FC<Props> = ({data, setSelectedItem, placeholder}) => {
  return (
    <View style={styles.mainContainer}>
      <SelectDropdown
        data={data}
        onSelect={item => {
          setSelectedItem(item);
        }}
        defaultButtonText={placeholder}
        buttonTextAfterSelection={item => {
          return item;
        }}
        rowTextForSelection={item => {
          return item;
        }}
        buttonStyle={styles.dropdown1BtnStyle}
        buttonTextStyle={styles.dropdown1BtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return (
            <FontAwesome
              name={isOpened ? 'chevron-up' : 'chevron-down'}
              color={'#444'}
              size={18}
            />
          );
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdown1DropdownStyle}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
      />
    </View>
  );
};

export default DropDown;
