import {View, Text, StyleSheet} from 'react-native';

export const PositionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.greenBox} />
      <View style={styles.purpleBox} />
      <View style={styles.orangeBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    backgroundColor: '#28C4D9',
    flex: 1,
    // justifyContent: 'center',
  },
  greenBox: {
    backgroundColor: 'green',
    borderColor: 'white',
    borderWidth: 10,
    // height: 100,
    // width: 100,
    // position: 'absolute',
    // right: 0,
    // bottom: 0,
    ...StyleSheet.absoluteFillObject,
  },
  orangeBox: {
    backgroundColor: '#f0a23b',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    width: 100,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  purpleBox: {
    backgroundColor: '#5856d6',
    borderColor: 'white',
    borderWidth: 10,
    height: 100,
    width: 100,
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
});
