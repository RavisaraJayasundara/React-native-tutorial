import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View} from "react-native";
import Base from "./components/Base";
import Base2 from "./components/Base2";
import Greet from "./components/Greet";
import { ScrollView } from "react-native-web";

export default function App() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View>
       {/* <Base />
        <Base2 />
        <Greet/>
        */}
        <Greet name="Bruce Wayne"/>
        <Greet name="Clark Kent"/>
        
      </View>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "plum",
  },
});
