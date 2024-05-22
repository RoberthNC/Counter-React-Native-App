import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>BoxObjectScreen</Text> */}
      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Hola Mundo 1</Text>
      </View>
      <View style={styles.purpleBox}>
        <Text style={{color: 'white'}}>Hola Mundo 2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    flex: 1,
  },
  title: {
    borderWidth: 3,
    color: 'black',
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    // margin: 20,
    marginHorizontal: 30,
    marginVertical: 10,
  },
});
