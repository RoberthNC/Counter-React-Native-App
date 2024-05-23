import {StyleSheet, View} from 'react-native';

export const FlexDirection = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FAFAFA',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  box: {
    height: 100,
    width: 100,
  },
  box1: {
    backgroundColor: '#5856d6',
  },
  box2: {
    backgroundColor: '#4240a2',
  },
  box3: {
    backgroundColor: '#2e2d71',
  },
});
