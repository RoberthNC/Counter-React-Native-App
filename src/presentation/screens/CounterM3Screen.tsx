import {useState} from 'react';
import {Text, View} from 'react-native';
import {FAB} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import {globalStyles} from '../theme/global.styles';

export const CounterM3Screen = () => {
  const [count, setCount] = useState<number>(10);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{count}</Text>
      <FAB
        // label="+1"
        icon="add"
        onPress={() => {
          setCount(count + 1);
        }}
        style={globalStyles.fab}
      />
    </View>
  );
};
