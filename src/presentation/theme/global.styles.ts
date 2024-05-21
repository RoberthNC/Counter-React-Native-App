import {StyleSheet, Platform} from 'react-native';

export const globalStyles = StyleSheet.create({
  centerContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
  },
  fab: {
    bottom: Platform.OS === 'android' ? 15 : 0,
    margin: 16,
    position: 'absolute',
    right: 20,
  },
  title: {
    color: 'black',
    fontSize: 80,
    fontWeight: '300',
  },
});
