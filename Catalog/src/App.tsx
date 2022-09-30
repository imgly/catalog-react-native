import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Image,
  SectionList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { RecoilRoot, useRecoilValue } from "recoil";
import RecoilNexus from "recoil-nexus";
import { ExampleListItem } from "./components/ExampleListItem";
import {
  examplesPESDK,
  examplesVESDK,
  PESDKModalExample,
  VESDKModalExample,
} from "./data/Examples";
import { ExampleItem } from "./models/Example";
import { Product } from "./models/Product";
import { interactionState } from "./state/interactionState";

const Stack = createNativeStackNavigator();

function HomeScreen() {
  const [selectedProduct, setSelectedProduct] = useState(Product.PESDK);
  const [activeExamples, setActiveExamples] = useState(examplesPESDK);
  const [PESDKModalVisible, setPESDKModalVisible] = useState(false);
  const [VESDKModalVisible, setVESDKModalVisible] = useState(false);
  const interactionEnabled = useRecoilValue(interactionState);

  const renderItem = ({ item }: { item: ExampleItem }) => (
    <ExampleListItem
      example={item}
      onPress={() => {
        if (item.component != null) {
          if (item.product == Product.PESDK) {
            setPESDKModalVisible(true);
          } else {
            setVESDKModalVisible(true);
          }
        } else {
          item.example?.();
        }
      }}
    />
  );

  const sectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => <Text style={styles.header}>{title}</Text>;

  const SelectionImage = ({ product }: { product: Product }) => {
    const pesdkImage = require("../assets/pesdk.png");
    const vesdkImage = require("../assets/vesdk.png");
    const pesdkSelectedImage = require("../assets/pesdk_active.png");
    const vesdkSelectedImage = require("../assets/vesdk_active.png");

    const isPESDK = product == Product.PESDK;
    const isSelected = selectedProduct == product;
    const image = isPESDK ? pesdkImage : vesdkImage;
    const selectedImage = isPESDK ? pesdkSelectedImage : vesdkSelectedImage;

    return (
      <TouchableHighlight
        underlayColor={"#FFFFFF"}
        onPress={() => {
          if (selectedProduct != product) {
            const newProduct =
              selectedProduct == Product.PESDK ? Product.VESDK : Product.PESDK;
            const newExamples =
              newProduct == Product.PESDK ? examplesPESDK : examplesVESDK;
            setSelectedProduct(newProduct);
            return setActiveExamples(newExamples);
          }
        }}
      >
        <Image
          style={styles.image}
          source={isSelected ? selectedImage : image}
        />
      </TouchableHighlight>
    );
  };

  return (
    <View
      style={styles.container}
      pointerEvents={interactionEnabled ? "auto" : "none"}
    >
      <PESDKModalExample
        visible={PESDKModalVisible}
        onFinish={() => {
          setPESDKModalVisible(false);
        }}
      ></PESDKModalExample>
      <VESDKModalExample
        visible={VESDKModalVisible}
        onFinish={() => {
          setVESDKModalVisible(false);
        }}
      ></VESDKModalExample>
      <View style={styles.selection}>
        <SelectionImage product={Product.PESDK} />
        <SelectionImage product={Product.VESDK} />
      </View>
      <SectionList
        style={{ marginTop: 10 }}
        sections={activeExamples}
        renderItem={renderItem}
        renderSectionHeader={sectionHeader}
      />
    </View>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator>
          <Stack.Screen name="IMG.LY for React Native" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 35,
    width: 114,
    marginRight: 10,
    borderRadius: 20,
  },
  selection: {
    alignContent: "center",
    justifyContent: "center",
    paddingTop: 10,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingLeft: 15,
    fontSize: 25,
    fontWeight: "bold",
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
});
