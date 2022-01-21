import React from 'react';
import {View, Image,Text, StyleSheet, Pressable,Button,SafeAreaView,TouchableWithoutFeedback} from 'react-native';
import * as util from '../../store/utils';
import FastImage from 'react-native-fast-image';
import Swiper from "react-native-swiper";
const DetailScreen = ({ route, navigation }) => {
  const { item } = route.params;

  console.log('item in details screen', item)
    return (
    <SafeAreaView style={styles.container}>
      
          <View
            style={{
              // backgroundColor: 'rgba(2,93,147,0.9)',
              backgroundColor: 'rgba(255,255,255,1)',
              height: util.WP(13.2),
              justifyContent: 'center',
              alignItems: 'flex-start',
              position: 'absolute',
              top: 50,
              zIndex: 2,
              width: '100%',
            }}>
            <Text style={styles.HeaderText}>Details</Text>
            <TouchableWithoutFeedback
              onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../assets/arrow-left.png')}
                style={styles.backArrow}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={{
                    flex: 1,
                    justifyContent:'center',
                    alignItems:'center',}}
          >
            <Text style={{fontSize:20,marginTop:util.WP(6)}}>{item.mission_name}</Text>
          </View>

          <View style={{ flex: 3}}>
            <Image 
              resizeMode="cover" 
              style={[{width: '100%',
                      height: undefined,
                      aspectRatio: 1.03
                    }]} 
              source={{uri: item.links.flickr_images[0]}}
             />
            </View>
          <View style={{ flex: 2,padding:15,marginTop:util.WP(10) }}>
            <Text style={{fontSize:util.WP(4)}}>Rocket Name | {item.rocket.rocket_name}</Text>
            <Text style={{fontSize:util.WP(4),marginTop:util.WP(5)}}>Article | <Text style={{color:'blue'}}>{item.links.article_link}</Text></Text>
          </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  TopHeader: {
    textAlign: 'center',
    // backgroundColor: 'rgba(2,93,147,0.9)',
    backgroundColor: 'rgba(255,255,255,1)',
    height: util.WP(13.2),
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 2,
    width: '100%',
  },
  title: {
    fontSize: 32,
  },
  buttonStyle: {
    height: 54,
    width: '80%',
    marginTop: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2EE59D',
    shadowRadius: 5,
    shadowOpacity: 0.7,
    shadowColor: 'rgba(46, 229, 157, 0.5)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  buttonTextStyle: {
    color: '#fdfdfd',
    fontWeight: '700',
  },

  backArrow: {
    width: util.WP(8),
    resizeMode: 'contain',
    marginBottom: util.WP(5),
    marginLeft: 10,
  },
  HeaderText: {
    color: '#fff',
    fontSize: util.WP(5.1),
  },
});

export default DetailScreen;