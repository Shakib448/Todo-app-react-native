/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    { id: 1, text: 'Milk' },
    { id: 2, text: 'Egg' },
    { id: 3, text: 'Bread' },
    { id: 4, text: 'Juice' },
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    setItems(prevItems => {
      return [{ id: Math.random().toFixed(2) * 100, text }, ...prevItems];
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
