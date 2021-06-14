import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';

const ItemList = ({item}) => {
  const dispatch = useDispatch ();
  return (
    <View style={styles.item}>
      <Text>{item.text}</Text>

      <TouchableOpacity title="Edit" color="grey" style={styles.edit}>
        <Text>{'Edit'}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        title="Delete"
        color="red"
        style={styles.delete}
        onPress={() =>
          dispatch ({
            type: 'DELETE_ITEM',
            payload: {id: item.id, text: item.text},
          })}
      >
        <Text>{'Delete'}</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create ({
  item: {
    flexDirection: 'row',
    flex: 1,
    borderWidth: 1,
    borderColor: 'grey',
    marginBottom: 15,
    padding: 5,
    margin: 5,
    alignItems: 'center',
  },
  delete: {
    width: 70,
    backgroundColor: 'red',
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 1,
  },
  edit: {
    width: 70,
    backgroundColor: 'grey',
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 20,
  },
});

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

export default connect (mapStateToProps) (ItemList);
