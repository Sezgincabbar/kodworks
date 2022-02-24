import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  webview: {},
  top_container: {},
  location_container: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  header: {
    fontSize: 24,
    color: '#37474F',
    fontWeight: 'bold',
  },
  header_label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
  },
  header_value: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  bottom_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
});
