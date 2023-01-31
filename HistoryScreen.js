import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function HistoryScreen({ route }) {

    const { table } = route.params;
    console.log(table)

    return (
      <View style={styles.container}>
        <View style={styles.headerBox}>
          <Text style={styles.header}>History</Text>
          <View style={styles.results}>
            <FlatList
              data={table}
              renderItem={({item}) => <Text>{item.key} {item.button} {item.num} = {item.ans}</Text>}
              keyExtractor={(item, index) => index.toString()}
          />
          </View>
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBox: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  header: {
    fontSize: 25
  },
  results: {
    margin: 20,

  },

});