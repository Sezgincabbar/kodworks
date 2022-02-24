import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './ButtonwIcon.style';
const ButtonwIcon = ({name, label, iconPress}) => {
  return (
    <TouchableOpacity onPress={iconPress}>
      <View style={styles.container}>
        <Icon name={name} color="white" size={30} />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ButtonwIcon;
