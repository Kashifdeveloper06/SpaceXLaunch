import React,{useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable,SafeAreaView,FlatList,TouchableOpacity,StatusBar} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import * as TASKS from '../../store/actions';
import FastImage from 'react-native-fast-image';
import { compareAsc, format } from 'date-fns';
import {useNavigation} from '@react-navigation/native';
import * as util from '../../store/utils';




// function goToDetails(props){
//   const navigation = useNavigation();
//   navigation.navigate('Details');
// }

const HomeScreen = (props:any) => {
  
  const dispatch = useDispatch();
  
  const [localFetchedLaunches, setLocalFetchedLaunches] = useState(launches);
  useEffect(() => {
    dispatch(TASKS.fetchLaunches())
    if (launches) {
      const myData = [].concat(launches)
      .sort((a, b) => a.launch_date_local > b.launch_date_local ? 1 : -1)
      setLocalFetchedLaunches(myData)
    }
      
  },[dispatch])

  let launches = useSelector((state:any) => state.home.fetchedLaunches);
  // useEffect(() => {
  //   if (!localFetchedLaunches) {
  //     setLocalFetchedLaunches(launches)
  //   }
  // })

  const goToDetails = (item:any) => {
    props.navigation.navigate('Details',{item:item})
  }
  const Item = ({ item }) => (
  <TouchableOpacity onPress={() => goToDetails(item)}>
  <View style={styles.item}>
    <View style={{width:'25%'}}>
      {item && item.links.flickr_images.length > 0 ? <FastImage
        style={{ flex: 1,aspectRatio: 1.15}}
        source={{
            uri: item.links.flickr_images[0],
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
    /> : null}
    </View>
    <View style={styles.smallDetails}>
      <Text style={styles.title}>{item.mission_name}</Text>
      <Text style={styles.title}>{format(new Date(item.launch_date_local), 'EEEE do LLLL yyyy ')}</Text>
    </View>
  </View>
  </TouchableOpacity>
);

  const renderItem = ( { item }) => {
    
    return(<Item item={item} />)
  }
  


  return (
    <SafeAreaView style={styles.container}>
      <View style={{padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,}}>
        <Text style={{fontSize:util.WP(3.5)}}>SpaceX Past Launches</Text>
      </View>
      <FlatList
        data={launches}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  
  item: {
    backgroundColor: '#AEAEAE',
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 8,
    flexDirection:'row',
    height:100
  },
  title: {
    fontSize: 15,
  },
  smallDetails:{
    width:'75%', 
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginLeft: util.WP(1.5)
  }
});
export default HomeScreen;