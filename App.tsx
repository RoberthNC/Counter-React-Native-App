import {SafeAreaView, Text, View} from 'react-native';
import {
  BoxObjectModelScreen,
  CounterScreen,
  CounterM3Screen,
  DimensionsScreen,
  FlexDirection,
  FlexScreen,
  HelloWorldScreen,
  HomeWorkScreen,
  PositionScreen,
} from './src/presentation/screens';
import {PaperProvider} from 'react-native-paper';
import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        icon: props => <IonIcon {...props} />,
      }}>
      <SafeAreaView style={{flex: 1}}>
        {/* <HelloWorldScreen name="Roberto Núñez" /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionsScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirection /> */}
        <HomeWorkScreen />
      </SafeAreaView>
    </PaperProvider>
  );
};
