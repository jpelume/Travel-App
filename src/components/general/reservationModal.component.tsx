import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './reservationModal.styles';
import Icon, {IconName, IconType} from './icons.component';
import {theme} from '../../utils';
import CheckBox from 'react-native-check-box';
import CustomDatePicker from './datePicker.component';
import NumericInput from 'react-native-numeric-input';
import formatAmount from '../../utils/formatAmount';
import CustomButton from './customButton.component';

type HotelProps = {
  hotel: {
    name: string;
    freeCancelation: boolean;
    price: number;
  };
  showModal: boolean;
  setShowModal: any;
  startDate: Date;
  setStartDate: any;
  setEndDate: any;
  endDate: Date;
};
const HotelReservationModal: React.FC<HotelProps> = ({
  showModal,
  setShowModal,
  startDate = new Date(),
  endDate = new Date(),
  setStartDate,
  setEndDate,
  hotel = {name: 'Hotel Name', freeCancelation: true, price: 60000},
}) => {
  const [numberOfUsers, setNumberOfUsers] = useState(1);
  const [totalPayable, setTotalPayable] = useState(
    hotel.price * numberOfUsers * 1,
  );

  useEffect(() => {
    const days = Math.ceil(
      ((endDate as any) - (startDate as any)) / (1000 * 60 * 60 * 24),
    );
    days > 0
      ? setTotalPayable(hotel.price * numberOfUsers * days)
      : setTotalPayable(hotel.price * numberOfUsers * 1);
  }, [numberOfUsers, startDate, endDate, hotel.price]);

  return (
    <Modal animationType={'slide'} visible={showModal} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowModal(false)}>
            <Icon
              iconName={IconName.CLOSE}
              iconType={IconType.ANT_DESIGN}
              size={24}
              color={theme.COLORS.black}
            />
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>{hotel.name}</Text>
            <View style={[styles.row, styles.justifyBetween]}>
              <Text> </Text>
              <View style={styles.row}>
                <Text style={styles.text}>Free cancelation</Text>
                <CheckBox
                  isChecked={hotel.freeCancelation}
                  onClick={() => {}}
                />
              </View>
            </View>
            <View style={[styles.row, styles.justifyBetween]}>
              <View style={styles.row}>
                <Text style={styles.text}>Check in</Text>
                <Text style={styles.text}>/</Text>
                <Text style={styles.text}>Check out</Text>
              </View>
              <Icon
                iconName={IconName.USER}
                iconType={IconType.FEATHER}
                color={theme.COLORS.PRIMARY_TEXT}
                size={24}
              />
            </View>
            <View style={[styles.row, styles.justifyBetween]}>
              <Text style={styles.text}>From</Text>
              <CustomDatePicker
                date={startDate}
                setDate={setStartDate}
                textStyle={styles.textStyle}
              />
              <Text style={styles.text}>to</Text>
              <CustomDatePicker
                date={endDate}
                setDate={setEndDate}
                textStyle={styles.textStyle}
                minDate={startDate}
              />
              <NumericInput
                type="up-down"
                value={numberOfUsers}
                onChange={value => {
                  setNumberOfUsers(value);
                }}
                totalHeight={50}
                totalWidth={60}
                containerStyle={{
                  borderRadius: theme.SIZES.radius,
                }}
              />
            </View>
            <View style={[styles.row, styles.justifyBetween]}>
              <Text style={styles.text}>
                Total Payable:{' '}
                <Text style={styles.bold}>
                  {formatAmount({amount: totalPayable})}
                </Text>
              </Text>
              <CustomButton
                btnText="Book"
                onPress={() => {
                  setShowModal(false);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

type FlightProps = {
  unitPrice: number;
  showModal: boolean;
  setShowModal: any;
};

const FlightReservationModal: React.FC<FlightProps> = ({
  showModal = true,
  setShowModal,
  unitPrice = 120000,
}) => {
  const [numberOfUsers, setNumberOfUsers] = useState(1);
  const [totalPayable, setTotalPayable] = useState(
    unitPrice * numberOfUsers * 1,
  );

  const [returning, setReturning] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  useEffect(() => {
    returning
      ? setTotalPayable(numberOfUsers * unitPrice * 2)
      : setTotalPayable(numberOfUsers * unitPrice);
  }, [numberOfUsers, unitPrice, returning]);
  return (
    <Modal animationType={'slide'} visible={showModal} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.mainContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setShowModal(false)}>
            <Icon
              iconName={IconName.CLOSE}
              iconType={IconType.ANT_DESIGN}
              size={24}
              color={theme.COLORS.black}
            />
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <Text style={styles.heading}>Book a flight</Text>
            <View style={[styles.row, styles.justifyBetween, styles.marginX]}>
              <TouchableOpacity
                style={[
                  styles.departingContainer,
                  returning && styles.activeOpacity,
                ]}
                onPress={() => setReturning(true)}>
                <Text>Return</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.departingContainer,
                  !returning && styles.activeOpacity,
                ]}
                onPress={() => setReturning(false)}>
                <Text>One way</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.row, styles.justifyBetween]}>
              <View style={styles.row}>
                <Text style={styles.text}>Departing</Text>
                <Text style={styles.text}>/</Text>
                <Text style={styles.text}>Returning</Text>
              </View>
              <Icon
                iconName={IconName.USER}
                iconType={IconType.FEATHER}
                color={theme.COLORS.PRIMARY_TEXT}
                size={24}
              />
            </View>
            <View style={[styles.row, styles.justifyBetween]}>
              <Text style={styles.text}>From</Text>
              <CustomDatePicker
                date={startDate}
                setDate={setStartDate}
                textStyle={styles.textStyle}
              />
              <Text style={styles.text}>to</Text>
              <CustomDatePicker
                date={endDate}
                setDate={setEndDate}
                textStyle={styles.textStyle}
                minDate={startDate}
              />
              <NumericInput
                type="up-down"
                value={numberOfUsers}
                onChange={value => {
                  setNumberOfUsers(value);
                }}
                totalHeight={50}
                totalWidth={60}
                containerStyle={{
                  borderRadius: theme.SIZES.radius,
                }}
              />
            </View>
            <View style={[styles.row, styles.justifyBetween]}>
              <Text style={styles.text}>
                Total Payable:{' '}
                <Text style={styles.bold}>
                  {formatAmount({amount: totalPayable})}
                </Text>
              </Text>
              <CustomButton
                btnText="Book"
                onPress={() => {
                  setShowModal(false);
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

type TransportProps = {
  type: TranportType;
  showModal: boolean;
  setShowModal: boolean;
};

export enum TranportType {
  BUS = 'bus',
  TRAIN = 'train',
  CAB = 'cab',
}

const TransportReservationModal: React.FC<TransportProps> = () => {
  return (
    <View>
      <Text>ReservationModal</Text>
    </View>
  );
};

export {
  HotelReservationModal,
  FlightReservationModal,
  TransportReservationModal,
};
