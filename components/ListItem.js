import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{props.item.text}</Text>
        <Icon name="remove" size={20} color="firebrick" />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  listItemText: {
    fontSize: 22,
    padding: 5,
    paddingLeft: 15,
  },
});

export default ListItem;
