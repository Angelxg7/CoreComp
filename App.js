import { View , Text , Button , TextInput,  StyleSheet} from "react-native"

const App = () =>{

  return  <View style={styles.container}>
            <View style={styles.InpContainer}>
              <TextInput
              style={styles.Input}
              placeholder="Productos"/>
              <Button title="Add"/>
            </View>
            <View style={styles.ListContainer}>
              <View style={styles.CartItem}>
                <Text style={styles.CardTitle}>Cocucha</Text>
                <Text>1200$</Text>
                <Button title="Del"/>
              </View>
              <View style={styles.CartItem}>
                <Text style={styles.CardTitle}>Fernet</Text>
                <Text>5000$</Text>
                <Button title="Del"/>
              </View>
              <View style={styles.CartItem}>
                <Text style={styles.CardTitle}>Sanguchitos</Text>
                <Text>4500$</Text>
                <Button title="Del"/>
              </View>
            </View>
          </View>
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ccc",
    marginTop: 50,
    flex:1,
    justifyContent:"start",
    alignItems:"center"
  },
  InpContainer:{
    flexDirection:"row",
    alignSelf:"stretch",
    justifyContent:"space-around",
  },
  Input:{
    width:200,
    borderWidth:4,
    paddingHorizontal:10,
    paddingVertical:5,
    borderRadius: 15,
  },
  ListContainer:{
    width:"100%",
  },
  CartItem:{
    flexDirection:"row",
    padding:10,
    margin:20,
    justifyContent:"space-around",
    alignItems:"center",
    borderWidth:4,
    borderRadius:15,
  },
  CardTitle:{
    fontWeight:"bold",
  }
})

export default App