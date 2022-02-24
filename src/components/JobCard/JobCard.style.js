import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    margin: 5,
    borderWidth: 1,
    borderColor: '#C3C3C3',
  },
  header_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  location_container: {
    backgroundColor: '#EF5B48',
    borderRadius: 50,
    alignSelf: 'flex-start',
    paddingHorizontal: 5,
  },
  company: {
    color: 'black',
    fontSize: 16,
  },
  location: {
    color: 'white',
    fontSize: 16,
    padding: 5,
  },
  level: {
    color: 'red',
    alignSelf: 'flex-end',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
