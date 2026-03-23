// import TodoScreen from "@/screens/Todoscreen";
// import { View } from "react-native";

// export default function HomeScreen() {
//   return (
//     /*<View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <CounterButton title="Sign in " step={1} initialValue={0}/>
//       <ProfileCard name="Albinaaa" role="studentka " course="4"></ProfileCard>
//     </View>
//   );
// }*/
//     <View style={{ flex: 1, backgroundColor: "#fff" }}>
//       <TodoScreen></TodoScreen>
//       {/* <ProfileCard name="asd" course="DEV" role="Student" btnName="Press me" btnStep={1056} */}

//       {/* <CounterButton title="Click Me1" step={1} initialValue={0} />
//       <CounterButton title="Click Me2" step={2} initialValue={0} />
//       <CounterButton title="Click Me3" step={3} initialValue={0} />
//       <CounterButton title="Click Me4" step={4} initialValue={0} /> */}

//       {/* <Greeting name="asd" role="teacher"/> */}
//     </View>
//   );
// }
import TodoScreen from "@/screens/TodoScreen";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <TodoScreen/>
    </View>
  );
}