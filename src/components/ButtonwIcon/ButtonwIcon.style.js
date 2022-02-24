import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EF5350',
    padding: 10,
    minWidth: Dimensions.get('window').width * 0.4,
    borderRadius: 5,
  },
  label: {
    fontSize: 18,
    marginLeft: 10,
    color: 'white',
  },
});
