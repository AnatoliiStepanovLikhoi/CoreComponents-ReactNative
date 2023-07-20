import {
  ScrollView,
  View,
  Text,
  Image,
  ImageBackground,
  Button,
} from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60 }}>
      <ScrollView>
        {/* <ImageBackground source={logoImg} style={{ flex: 1 }}>
        <Text>
          <Text style={{ color: "white" }}>Hello </Text>
          World
        </Text>
      </ImageBackground> */}

        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Button
          title="Press"
          onPress={() => console.log("Button pressed")}
          color="midnightblue"
        />
        <Text>
          Mollit aliqua id id anim adipisicing anim mollit enim adipisicing eu
          et et. Ex non fugiat nostrud nisi est excepteur sunt commodo sint.
          Duis pariatur ut aliquip quis magna sunt do ut. Mollit aliqua id id
          anim adipisicing anim mollit enim adipisicing eu et et. Ex non fugiat
          nostrud nisi est excepteur sunt commodo sint. Duis pariatur ut aliquip
          quis magna sunt do ut.
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />

        {/* <Image
        source={{ uri: "https://picsum.photos/300" }}
        style={{ width: 300, height: 300 }}
      />
      <Text>
        <Text style={{ color: "white" }}>Hello </Text>
        World
      </Text> */}
      </ScrollView>
    </View>
  );
}
