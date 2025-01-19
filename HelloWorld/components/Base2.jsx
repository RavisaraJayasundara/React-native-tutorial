import { View,Alert,Button } from "react-native";

export default function Base2(){
    return(
     <View style={{flex:1,backgroundColor:"plum" , padding:100}}>
        <Button title="Alert" onPress={()=>console.log("Invalied")}/>
        <Button title="Alert 2" onPress={()=>Alert.alert("Invalied","DOB incorrect")}/>
        <Button title="Alert 3" onPress={()=>Alert.alert("Invalied","DOB incorrect",[
            {
                text:'Cancel',
                onPress:()=>console.log("cancel pressed")
            },
            {
                text:'Ok',
                onPress:()=>console.log("OK pressed")
            }
        ])}/>

     </View>
    );
}