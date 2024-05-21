import {useState} from 'react';
import {Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {PrimaryButton} from '../components';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [count, setCount] = useState<number>(10);

  const increaseBy = (value: number) => {
    setCount(count + value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{count}</Text>
      {/* <PrimaryButton
        label="Increment"
        onLongPress={() => setCount(0)}
        onPress={() => increaseBy(1)}
      /> */}
      <Button
        onLongPress={() => setCount(0)}
        onPress={() => increaseBy(1)}
        mode="contained">
        Increment
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'black',
    fontSize: 80,
    fontWeight: '300',
  },
});
