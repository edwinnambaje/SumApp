import React,{useState} from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert } from 'react-native';

export default function App() {
  const [num,setNum]=useState("");
  const [nums,setNums]=useState("");
  const [sum,setSum]=useState(num+nums);
  function addTogether() {
    const newTotal = num + nums;
    setSum(newTotal);
    Alert.alert('Alert', 'Sum is : ' + newTotal);
}
  return (
   
    <View style={styles.container}>
      <Text style={styles.header}>Sum App</Text>
      <TextInput
      style={styles.text}
      onChangeText={v => {
        setNum(Number.parseInt(v));}}
      value={num}
      placeholder="Enter the first Number"
      keyboardType="numeric"/>
      <TextInput
      style={styles.text}
      onChangeText={v => {
        setNums(Number.parseInt(v));}}
      value={nums}
      placeholder="Enter the Second Number"
      keyboardType="numeric"/>
      <TouchableOpacity
        onPress={addTogether}
        style={styles.button}
        title="Tulos">
        <Text>Sum</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button:{
    color:"white",
    backgroundColor:"blue",
    fontSize:30,
    padding:10,
    margin:10
  },
  header:{
    fontSize:20
  }
});
