import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View,Platform, Keyboard } from 'react-native';
import Tasks from './components/Tasks';

export default function App() {
const [task ,setTask] = useState();


const [taskItems ,setTaskItems] = useState([]);

const handleAddTask = ()=> {
  Keyboard.dismiss();
setTaskItems([...taskItems, task]);
setTask(null);
}

const TaskCompleted =(index) => {
  let itemCopy = [...taskItems];
  itemCopy.splice(index,1);
  setTaskItems(itemCopy);
}
  return (
    <View style={styles.container}>

{/* Today Tasks */}

    <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Kerjaan Hari ini </Text>

      <View style={styles.items}>

      {
      taskItems.map((item, index)=> {
    return (
      <TouchableOpacity onPress={()=> TaskCompleted(index)} key={index}>
      <Tasks text={item}  />
             </TouchableOpacity>
             
    )
  
    
      })
      
      }

      {/* COde Dimana Nanti Nilai Inputnya keluar  Secara Statis*/}
      {/* <Tasks text={`Hello World`}/>
      <Tasks text={`Yes I Am `}/> */}

      </View>
   
    </View>

    {/* Write A task */}
   <KeyboardAvoidingView 
   
       behavior={Platform.OS === "android" ? "padding" : "height"} style={styles.writeTaskWrapper}>
     <TextInput style={styles.input} placeholder={`Menulis Tugas Harian Anda`} value={task} onChangeText={text => setTask(text)}/>

    <TouchableOpacity onPress={()=> handleAddTask()}>
      <View style={styles.addWrapper}>
        <Text style={styles.addText}>+</Text>
      </View>
    </TouchableOpacity>
   </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
  tasksWrapper: {

    paddingTop :80,
    paddingHorizontal:20,
  },
  sectionTitle: {
    fontSize:24,
    fontWeight:'bold'
  },
  items:{
    marginTop:30,
  },
  writeTaskWrapper: {
    position:'absolute',
    bottom:60,
    flexDirection:'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    paddingVertical:15,
    width:250,
    paddingHorizontal:15,
    backgroundColor: '#FFF',
    borderRadius:60,
    borderColor: '#C0C0C0',
    borderWidth:1,
  },
  addWrapper: {

    width:60,
    height:60,
    backgroundColor: '#FFF',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth:1,
  },
  addText: {},

});
