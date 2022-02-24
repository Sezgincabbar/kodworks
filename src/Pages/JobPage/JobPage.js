import React, {useEffect, useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './JobPage.style';
import Config from 'react-native-config';
import useFetch from '../../Hooks/useFetch/useFetch';

import Loading from '../../components/Loading';
import JobCard from '../../components/JobCard/JobCard';
import Error from '../../components/Error';
import PageButton from '../../components/PageButton/PageButton';

const JobPage = ({navigation}) => {
  const [page, setPage] = useState(88);
  const url = `${Config.API_JOBS}?page=${page}`;
  const {data, error, loading} = useFetch(url);
  useEffect(() => {
    page;
  }, []);
  const renderCard = ({item}) => {
    return <JobCard job={item} onPress={() => goDetails(item.id)} />;
  };
  function goDetails(id) {
    navigation.navigate('DetailPage', {id});
  }
  const Footer = () => {
    return (
      <View style={styles.footer_container}>
        <PageButton
          name="arrow-left-circle-outline"
          onPress={() => goPreviusPage()}
        />
        <PageButton name="heart-circle" onPress={() => goFavorites()} />
        <PageButton
          name="arrow-right-circle-outline"
          onPress={() => goNextPage()}
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
