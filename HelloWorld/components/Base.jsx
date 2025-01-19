import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button
} from "react-native";
const flowerImg = require("../assets/image/flower.jpg");

export default function Base() {
  return (
 
      <View style={styles.container}>
        <Text style={{ color: "white" }}>
          <h1>Flowers</h1>
        </Text>
        <Image source={flowerImg} style={{ width: 350, height: 300 }} />

        <StatusBar style="auto" />
        {/*
      <ImageBackground source={flowerImg} style={{flex:1}}>
        <Text>Image Text</Text>
      </ImageBackground>
      */}
        <Text>
          Flowers are one of nature's most exquisite creations, symbolizing
          beauty, love, and life. They come in a dazzling array of colors,
          shapes, and sizes, each with its own unique charm and significance.
          Flowers play a vital role in ecosystems by aiding in pollination,
          attracting bees, butterflies, and other pollinators essential for the
          reproduction of plants. Beyond their ecological importance, flowers
          have deep cultural and emotional value, often used to convey feelings,
          celebrate milestones, or add a touch of elegance to any setting. From
          the delicate petals of a rose to the vibrant hues of a sunflower,
          flowers inspire joy and wonder, connecting us to the natural world.
        </Text>
        
        <Button title="Press" onPress={()=>console.log("Button pressed")}style={styles.button} color="midnightblue"/>

        <Text style={{ color: "white" }}>
          <h1>Dogs</h1>
        </Text>
        <Image
          source={{ uri: "https://picsum.photos/id/237/200/300" }}
          style={{ width: 350, height: 300 }}
        />
        <Text>
          Dogs are loyal and affectionate companions, often referred to as
          humanity's best friend. Known for their intelligence and unwavering
          devotion, dogs have been a part of human life for thousands of years,
          serving as protectors, helpers, and cherished members of families.
          They come in a wide variety of breeds, each with unique traits, sizes,
          and temperaments, catering to diverse needs and lifestyles. Dogs
          provide emotional support and companionship, and their playful, loving
          nature brings joy and comfort to countless homes. Whether they are
          guiding the visually impaired, assisting in search and rescue, or
          simply wagging their tails to greet us at the door, dogs hold a
          special place in our hearts and lives.
        </Text>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "center",
    backgroundColor: "plum",
  },
  button:{
    color:"white",
    padding:'60',
    
    
  }
});
