import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {RoundedButton} from '../components/RoundedButton'
import {spacing} from '../utils/sizes'

import { colors } from '../utils/colors';

export const Focus = (props) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
          label="What would you like to focus on?"
          onChangeText={setSubject}
        />
        <View style={styles.button}>
        <RoundedButton title="+" size={50} onPress={() => props.addSubject(subject)}></RoundedButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  },
  inputContainer: {
    padding: spacing.lg,
    justifyContent: 'flex-start',
    flexDirection: "row",
  },
  button: {
    justifyContent: "center"
  },
  textInput: {
    marginRight: spacing.sm,
    flex: 1
  }
});
