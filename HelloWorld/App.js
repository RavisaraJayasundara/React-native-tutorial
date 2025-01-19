import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, ImageBackground} from 'react-native';
const  flowerImg = require("./assets/image/flower.jpg");

export default function App() {
  return (
    <View style={styles.container}>
    {/* <Text style={{color:"white"}}>Hello Ravi</Text>
     <Image source={flowerImg} style={{width:350,height:300}}/>
     <Image source={{uri:"https://picsum.photos/id/237/200/300"}} style={{width:350,height:300}}/>
      */}<StatusBar style="auto" />
      <ImageBackground source={flowerImg} style={{flex:1}}>
        <Text>Image Text</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor:'plum'
  },
});
