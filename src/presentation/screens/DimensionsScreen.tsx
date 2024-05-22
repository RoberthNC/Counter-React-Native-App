import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

const dimensions = Dimensions.get('window');

// const {height, width} = dimensions;

export const DimensionsScreen = () => {
  const {height, width} = useWindowDimensions();
  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            ...styles.purpleBox,
            width: width * 0.5,
          }}></View>
      </View>

      <Text style={styles.title}>
        W: {width}, H: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 300,
    width: '100%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  purpleBox: {
    backgroundColor: 'blue',
    height: '50%',
    width: '50%',
  },
});
