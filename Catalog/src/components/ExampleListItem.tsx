import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { ExampleItem } from "../models/Example";

export const ExampleListItem = ({
  example,
  onPress,
}: {
  example: ExampleItem;
  onPress?: () => void;
}) => (
  <View style={{ paddingBottom: 10 }}>
    <TouchableHighlight
      onPress={onPress}
      underlayColor={"#bababa"}
      style={styles.item}
    >
      <View>
        <Text style={styles.title}>{example.title}</Text>
        <Text>{example.description}</Text>
      </View>
    </TouchableHighlight>
  </View>
);

const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    paddingBottom: 2.55,
  },
  item: {
    padding: 20,
    margin: 10,
    marginVertical: 0,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#e3e3e3",
    backgroundColor: "#ebebeb",
  },
});
