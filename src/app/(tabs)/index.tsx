import CounterButton from "@/components/CounterButton";
import { View } from "react-native";

export default function HomeScreen() {
  return(
    <View style={{flex: 1, backgroundColor: "#fff" }}>
      <CounterButton title="Click Me1" step={1} initialValue={0}/>
      <CounterButton title="Click Me2" step={2} initialValue={0}/>
      <CounterButton title="Click Me3" step={3} initialValue={0}/>
      <CounterButton title="Click Me4" step={4} initialValue={0}/>
    </View>
  );
}



/*import ParallaxScrollView from "@/components/parallax-scroll-view";
import { ProfileCards } from "@/components/ProfileCards";
import { Image } from "expo-image";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("../../assets/images/lake.jpg")}
          style={{ width: "100%", height: "100%" }}
        />
      }
    >
      <ProfileCards />
    </ParallaxScrollView>
  );
}*/
