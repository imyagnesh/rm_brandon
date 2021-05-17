import React, {useEffect, useState, useCallback} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import Image from 'react-native-fast-image';
import {useTheme} from '@react-navigation/native';
import CText from '../../components/CText';

import axios from 'axios';

const HomeScreen = ({navigation}) => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const {colors} = useTheme();

  // CDM
  useEffect(() => {
    const loadData = async pageInfo => {
      try {
        console.log(page);
        setLoading(true);
        // throw new Error(new Error('Test Error'));
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/photos?_page=${page}`,
        );
        console.log([...photos, ...res.data].length);
        setPhotos([...photos, ...res.data]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadData();
    // CWUM
    return () => {
      setPhotos([]);
    };
  }, [page]);

  if (error) {
    return <CText>{error.message}</CText>;
  }

  return (
    <View style={{flex: 1, backgroundColor: colors.background}}>
      <FlatList
        data={photos}
        renderItem={({item, index}) => {
          return (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                marginHorizontal: 8,
              }}>
              <Image
                source={{
                  uri: item.thumbnailUrl,
                  priority:
                    index < item.length / 2
                      ? Image.priority.high
                      : Image.priority.low,
                }}
                style={{
                  height: 100,
                  width: 100,
                }}
                resizeMode="contain"
              />
              <CText style={{flex: 1, paddingLeft: 8}}>{item.title}</CText>
            </View>
          );
        }}
        ItemSeparatorComponent={() => (
          <View
            style={{
              paddingVertical: 8,
            }}
          />
        )}
        keyExtractor={item => `${item.id}`}
        onEndReached={({distanceFromEnd}) => {
          console.log(distanceFromEnd);
          setPage(page + 1);
        }}
        ListFooterComponent={() => {
          if (loading) {
            return <ActivityIndicator size="large" color="red" animating />;
          }
          return null;
        }}
      />
    </View>
  );
};

export default HomeScreen;
