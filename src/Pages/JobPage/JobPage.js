import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './JobPage.style';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch/useFetch';

import Loading from '../../components/Loading';
import JobCard from '../../components/JobCard/JobCard';
import Error from '../../components/Error';
import ButtonwIcon from '../../components/ButtonwIcon';

const JobPage = ({navigation}) => {
  const [page, setPage] = useState(88);
  const url = `${Config.API_JOBS}?page=${page}`;
  const {data, error, loading} = useFetch(url);
  useEffect(() => {
    page;
  }, []);
  const renderCard = ({item}) => {
    return <JobCard job={item} onPress={() => goDetails(item.id, item.name)} />;
  };
  function goDetails(id, name) {
    navigation.navigate('DetailPage', {id, name});
  }
  const Footer = () => {
    return (
      <View style={styles.footer_container}>
        <ButtonwIcon
          name="arrow-left-bold-outline"
          iconPress={() => goPreviusPage()}
        />
        <ButtonwIcon name="heart-circle" iconPress={() => goFavorites()} />
        <ButtonwIcon
          name="arrow-right-bold-outline"
          iconPress={() => goNextPage()}
        />
      </View>
    );
  };
  function goPreviusPage() {
    if (page > 0) {
      setPage(page - 1);
    }
  }
  function goNextPage() {
    setPage(page + 1);
  }
  function goFavorites() {
    navigation.navigate('FavoritesPage');
  }
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        style={{flex: 1}}
        data={data.results}
        renderItem={renderCard}
        key={item => item.id}
        ListFooterComponent={Footer}
      />
    </View>
  );
};

export default JobPage;
