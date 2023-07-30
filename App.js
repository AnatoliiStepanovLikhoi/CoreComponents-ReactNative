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
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";
import { useState } from "react";
const logoImg = require("./assets/adaptive-icon.png");
import Greet from "./components/Greet";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isStatusbarHidden, setIsStatusbarHidden] = useState(false);

  const modalVisibleHandler = (value) => {
    return setIsModalVisible(value);
  };

  return (
    <View style={styles.container}>
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
      <ActivityIndicator size="large" color="magenta" animating={true} />
      <ScrollView>
        {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>
          <Text style={{ color: "white" }}>Hello </Text>
          World
        </Text>
      </ImageBackground> */}

        {/* <Button
          title="Alert"
          onPress={() => Alert.alert("Invalid data!", "DB connection")}
        /> */}

        <Greet name="Vova" />

        <Button
          title="Alert3"
          onPress={() =>
            Alert.alert("Invalid data!", "DB connection", [
              {
                text: "Cancel",
                onPress: () => console.log("Canceled pressed"),
              },
              {
                text: "Ok",
                onPress: () => console.log("Ok pressed"),
              },
            ])
          }
        />

        <Pressable onPress={() => console.log("Image pressed")}>
          <Image source={logoImg} style={{ width: 300, height: 300 }} />
        </Pressable>
        <Pressable onPress={() => console.log("text pressed")}>
          <Text style={styles.title}>
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

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  title: {
    fontSize: 16,
  },
});
