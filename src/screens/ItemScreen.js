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
import {connect, useDispatch} from 'react-redux';

import {addItem} from '../actions/updateTodos';
import ItemList from '../components/ItemList';

const ItemScreen = props => {
  const [text, setText] = useState ('');
  const dispatch = useDispatch ();

  return (
    <View>
      <Text style={styles.label}>Add Item</Text>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={statement => setText (statement)}
      />
      {/* <Button title="Save" onPress={() => {addItem({ id: text+new Date().getTime(), text })}}/> */}
      <TouchableOpacity style={styles.save}>
        <Button
          title="Save"
          onPress={() =>
            dispatch ({
              type: 'ADD_ITEM',
              payload: {id: text + new Date ().getTime (), text},
            })}
        />
      </TouchableOpacity>

      <FlatList
        data={props.todos}
        keyExtractor={item => item.id}
        renderItem={({item}) => {
          return <ItemList item={item} id={item.id} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create ({
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 15,
    padding: 5,
    margin: 5,
  },
  label: {
    fontSize: 50,
    alignSelf: 'center',
  },
  save: {
    width: 100,
    alignSelf: 'center',
  },
});

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

export default connect (mapStateToProps) (ItemScreen);
