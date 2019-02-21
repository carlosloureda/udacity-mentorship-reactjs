import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { add } from "@aceitunra/common";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>2+3 = {add(2, 3)}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
