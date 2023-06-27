import {View, Text, TouchableHighlight, Modal} from 'react-native';
import React, {useState} from 'react';
import styles from './datePicker.styles';
import {theme} from '../../utils';
import DatePicker from 'react-native-modern-datepicker';
import {getFormatedDate} from 'react-native-modern-datepicker';
type Props = {
  textStyle: any;
  date: Date;
  setDate: any;
  minDate?: Date;
};
const CustomDatePicker: React.FC<Props> = ({
  textStyle,
  date,
  setDate,
  minDate = new Date() as any,
}) => {
  const startDate = getFormatedDate(
    minDate.setDate(minDate.getDate()),
    'YYYY/MM/DD',
  );
  const [show, setShow] = useState(false);
  return (
    <TouchableHighlight
      activeOpacity={0}
      onPress={() => setShow(true)}
      style={styles.margin}>
      <View>
        <Text style={textStyle}>{new Date(date).toLocaleDateString()}</Text>

        <Modal
          transparent
          animationType={'slide'}
          visible={show}
          supportedOrientations={['portrait']}>
          <View style={styles.main}>
            <TouchableHighlight style={styles.firstContainer} activeOpacity={1}>
              <TouchableHighlight
                underlayColor={theme.COLORS.white}
                style={styles.secondContainer}
                onPress={() => {}}>
                <View style={styles.thirdContainer}>
                  <View style={styles.fourthContainer}>
                    <DatePicker
                      mode="calendar"
                      selected={new Date(date).toLocaleDateString()}
                      onDateChange={(selectedDate: any) => {
                        setDate(
                          new Date(
                            selectedDate.toString().split('/').join('-'),
                          ),
                        );
                        setShow(false);
                      }}
                      minimumDate={startDate}
                    />
                  </View>
                </View>
              </TouchableHighlight>
            </TouchableHighlight>
          </View>
        </Modal>
      </View>
    </TouchableHighlight>
  );
};

export default CustomDatePicker;
