import React, {useCallback} from 'react';
import {View, Text, Alert, Linking} from 'react-native';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch/useFetch';
import {WebView} from 'react-native-webview';
import {useDispatch} from 'react-redux';

import styles from './Detail.style';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import ButtonwIcon from '../../components/ButtonwIcon/ButtonwIcon';

const Detail = ({route}) => {
  const {id} = route.params;
  const url = `${Config.API_JOBS}/${id}`;
  const {data, loading, error} = useFetch(url);
  const web = data.contents;
  const {refs} = data;

  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(refs.landing_page);
    console.log(refs.landing_page);
    if (supported) {
      await Linking.openURL(refs.landing_page);
    } else {
      Alert.alert(`Don't know how to open this URL: ${refs.landing_page}`);
    }
  }, [refs]);

  const dispatch = useDispatch();
  const handleFavouriteJob = favouriteJob => {
    dispatch({type: 'ADD_FAVOURITE', payload: {favouriteJob}});
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <View style={styles.top_container}>
        <Text style={styles.header}>{data.name}</Text>
        <View style={styles.location_container}>
          <Text style={styles.header_label}>Locations: </Text>
          <Text style={styles.header_value}>
            {data.locations && data.locations.length > 0
              ? data.locations[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <View style={styles.location_container}>
          <Text style={styles.header_label}>Level: </Text>
          <Text style={styles.header_value}>
            {data.levels && data.levels.length > 0
              ? data.levels[0].name
              : 'Unkown level'}
          </Text>
        </View>
      </View>
      <Text style={{textAlign: 'center', fontSize: 24, fontWeight: 'bold'}}>
        Job Detail
      </Text>
      <WebView
        style={styles.webview}
        source={{html: web}}
        scalesPageToFit={false}
      />
      <View style={styles.bottom_container}>
        <ButtonwIcon
          name="open-in-new"
          label="Submit"
          iconPress={() => handlePress()}
        />
        <ButtonwIcon
          name="heart"
          label="Favorite Job"
          iconPress={() => {
            handleFavouriteJob(data);
          }}
        />
      </View>
    </View>
  );
};

export default Detail;
