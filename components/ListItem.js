/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  listItem: {},
});
