import ParallaxScrollView from "@/components/parallax-scroll-view";
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
}
