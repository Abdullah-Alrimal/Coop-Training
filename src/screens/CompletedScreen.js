import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {connect, useDispatch} from 'react-redux';


import ItemList from '../components/ItemList';

const CompletedScreen = (props) =>{
    const navigation = useNavigation();
    

    return <View>
        {/* <ItemList item={}/> */}
        <FlatList
        data={props.todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
            if(item.completed)
          return <ItemList item={item} id={item.id} />
        }}
      />
    </View>
}

const mapStateToProps = state => {
    return {
      todos: state.todos,
    };
  };
export default connect(mapStateToProps)(CompletedScreen);