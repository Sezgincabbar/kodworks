import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ButtonwIcon from '../ButtonwIcon';
import styles from './JobCard.style';
const JobCard = ({job, onPress, name, iconPress, label}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.header_text}>{job.name}</Text>
        <Text style={styles.company}>{job.company.name}</Text>
        <View style={styles.location_container}>
          {job.locations[0] ? (
            <Text style={styles.location}>{job.locations[0].name}</Text>
          ) : null}
        </View>
        <Text style={styles.level}>
          {job.levels[0] ? job.levels[0].name : null}
        </Text>
        <View style={{alignItems: 'center', flex: 1}}>
          {name ? (
            <ButtonwIcon name={name} iconPress={iconPress} label={label} />
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;
