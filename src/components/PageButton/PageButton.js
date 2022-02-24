import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const PageButton = ({name, onPress}) => {
  return <Icon name={name} size={50} style={styles.button} onPress={onPress} />;
};

const styles = StyleSheet.create({
  button: {
    color: 'black',
  },
});
export default PageButton;
