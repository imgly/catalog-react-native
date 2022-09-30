import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';

export const ExampleListItem = ({
  title,
  description,
  onPress,
}: {
  title: string;
  description: string;
  onPress?: () => void;
}) => (
  <View style={{paddingBottom: 10}}>
    <TouchableHighlight
      onPress={onPress}
      underlayColor={'#bababa'}
      style={styles.item}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    paddingBottom: 2.55,
    color: '#000000',
  },
  description: {
    color: '#000000',
  },
  item: {
    padding: 20,
    margin: 10,
    marginVertical: 0,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: '#e3e3e3',
    backgroundColor: '#ebebeb',
  },
});
