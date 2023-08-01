import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Modal,Dimensions, Button,ActivityIndicator } from 'react-native';

export default function App() {
  const [modal,setModal] = useState(true)
  const { width, height } = Dimensions.get('window');
  return (
    <View style={styles.container}>
      <Text>Hello Deepanshu Gupta</Text>
      <StatusBar backgroundColor='red' barStyle='light-content' hidden={true}/>
      <Button onPress={()=>{setModal(true)}} title='OpenModal'/>
      <ActivityIndicator/>
      <ActivityIndicator size='large'/>
      <ActivityIndicator size='large' color='red'/>
      <ActivityIndicator size='large' color='red' animating={false}/>
      <Modal visible={modal} onRequestClose={()=>{setModal(false)}} animationType='slide'>
        <View  style={[styles.modalstyle,{width:width,height:height}]}> 
      <Text style={styles.modalText}>
      Hello brother
      </Text>
      <Button onPress={()=>{setModal(false)}} title='CloseModal'/>
        </View>
      </Modal>
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
  modalstyle: {
    flex:1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText:{
    color:'white',
  }
});
