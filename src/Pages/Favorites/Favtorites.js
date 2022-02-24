import React from 'react';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import JobCard from '../../components/JobCard';
import {useDispatch} from 'react-redux';
import styles from './Favorites.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Favorites = ({navigation}) => {
  const job = useSelector(state => state.favouriteJob);

  function goDetails(id) {
    navigation.navigate('DetailPage', {id});
  }

  const dispatch = useDispatch();

  const removeFavourite = item => {
    dispatch({type: 'REMOVE_FAVOURITE', payload: {job: item}});
  };

  const clearAll = () => {
    dispatch({type: 'CLEAR_ALL'});
  };

  const favouriteFooter = () => {
    return (
      <TouchableOpacity onPress={() => clearAll()}>
        <View style={styles.footer_style}>
          <Icon name="archive-off-outline" size={30} color="white" />
          <Text style={styles.text}>Clear All</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderFavourites = ({item}) => {
    return (
      <View style={styles.card_style}>
        <JobCard
          job={item}
          onPress={() => goDetails(item.id)}
          name="archive-off-outline"
          label="REMOVE FAVOURITE"
          iconPress={() => removeFavourite(item)}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={job}
        renderItem={renderFavourites}
        ListFooterComponent={favouriteFooter}
      />
    </View>
  );
};

export default Favorites;
