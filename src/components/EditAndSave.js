import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';
import {useDispatch} from 'react-redux';

const EditAndSave = props => {
  return (
    <TouchableOpacity
      style={styles.edit}
      title={props.title}
      color={props.color}
      onPress={props.onPress}
    >
      <Text>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
  edit: {
    width: 70,
    backgroundColor: 'grey',
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    marginStart: 190,
  },
});

export default EditAndSave;
