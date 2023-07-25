import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  Button,
  Pressable,
  Modal,
  StatusBar,
} from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusbarHidden, setIsStatusbarHidden] = useState(false);

  const modalVisibleHandler = (value) => {
    return setIsModalVisible(value);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <StatusBar
        backgroundColor="lightgreen"
        barStyle="dark-content"
        hidden={isStatusbarHidden}
      />
      <Button
        title="Hide Status Bar"
        onPress={() => setIsStatusbarHidden((prevState) => !prevState)}
        color="midnightblue"
      />
      <ScrollView>
        {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>
          <Text style={{ color: "white" }}>Hello </Text>
          World
        </Text>
      </ImageBackground> */}

        <Pressable onPress={() => console.log("Image pressed")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => console.log("text pressed")}>
          <Text>
            Mollit aliqua id id anim adipisicing anim mollit enim adipisicing eu
            et et. Ex non fugiat nostrud nisi est excepteur sunt commodo sint.
            Duis pariatur ut aliquip quis magna sunt do ut. Mollit aliqua id id
            anim adipisicing anim mollit enim adipisicing eu et et. Ex non
            fugiat nostrud nisi est excepteur sunt commodo sint. Duis pariatur
            ut aliquip quis magna sunt do ut.
          </Text>
        </Pressable>
        <Button
          title="Press modal"
          onPress={() => modalVisibleHandler(true)}
          color="midnightblue"
        />

        {/* <Image source={logoImg} style={{ width: 300, height: 300 }} /> */}
        {/* <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      />
      <Text>
        <Text style={{ color: "white" }}>Hello </Text>
        World
      </Text> */}
      </ScrollView>
      <Modal
        visible={isModalVisible}
        onRequestClose={() => modalVisibleHandler(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "lightblue", padding: 60 }}>
          <Text>Modal content</Text>
          <Button
            title="Close"
            color="midnightblue"
            onPress={() => modalVisibleHandler(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
