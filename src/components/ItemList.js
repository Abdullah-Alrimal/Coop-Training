import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView
} from 'react-native';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';

import {todos} from '../reducers/todos';
import EditAndSave from './EditAndSave';

const ItemList = ({item}) => {
  const dispatch = useDispatch ();

  console.log(item);
  const [text, setText] = useState (item.text);
  const [editEnabeled, setEditEnabeled] = useState (null);

  return (
    <View style={styles.item}>
      <TouchableOpacity
        onPress={() => {
          dispatch ({
            type: 'COMPLETED_ITEM',
            payload: {
              id: item.id,
              completed: !item.completed,
            },
          });
        }}
      >
    
      <TextInput
          style={{
            textDecorationLine: item.completed ? 'line-through' : 'none',
            fontSize: 24,
          }}
          editable={editEnabeled ? true : false}
          value={text}
          onChangeText={statment => setText (statment)}
        /> 
    
      </TouchableOpacity>

      {editEnabeled
        ? <EditAndSave
            title="Save"
            text="Save"
            color="blue"
            onPress={() => {
              dispatch ({
                type: 'UPDATE_ITEM',
                payload: {id: item.id, text: text, completed: item.completed},
              });
              setEditEnabeled (false);
            }}
          />
        : <EditAndSave
            title="Edit"
            text="Edit"
            color="grey"
            onPress={() => {
              setEditEnabeled (true);
            }}
          />}

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
    marginStart: 10,
  },
  edit: {
    width: 70,
    backgroundColor: 'grey',
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 190,
  },
});

const mapStateToProps = state => {
  return {
    todos: state.todos,
  };
};

export default connect (mapStateToProps) (ItemList);
