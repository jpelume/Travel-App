import {View, Text, FlatList, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import styles from './navOptions.styles';
import {navOptions} from '../../utils/dummy';
import {
  FlightReservationModal,
  TransportReservationModal,
} from './reservationModal.component';

type Props = any;
const NavOptions: React.FC<Props> = () => {
  const [transport, setTransport] = useState() as any;
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <FlatList
        data={navOptions}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.touchableOpacity}
            onPress={() => {
              setTransport(item);
              setShowModal(true);
            }}>
            <View style={styles.navContainer}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode={'contain'}
              />
              <View>
                <Text style={styles.text}>{`Book a ${item.type}`}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      {transport?.type !== 'flight' && (
        <TransportReservationModal
          showModal={showModal}
          setShowModal={setShowModal}
          unitPrice={400}
          type={transport?.type}
        />
      )}
      {transport?.type === 'flight' && (
        <FlightReservationModal
          showModal={showModal}
          setShowModal={setShowModal}
          unitPrice={60000}
        />
      )}
    </>
  );
};

export default NavOptions;
