import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {colors} from '../utils/colors'
import {fontSizes, spacing} from '../utils/sizes'

export const FocusHistory = (props) => {
  if (!props.history || !props.history.length) return <Text style={styles.title}>You haven't focused on anything yet.</Text>;

  const renderItem = ({item}) => <Text style={styles.item}>- {item}</Text>

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Things you've focused on: </Text>
    <FlatList
    data={props.history}
    renderItem={renderItem}
    >
    </FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight: 'bold',
  },
  item : {
    fontSize: fontSizes.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  container: {
    padding: spacing.md,
    flex: 1
  }
})