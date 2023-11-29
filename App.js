import { useState } from "react"
import { View , Text , Button , TextInput,  StyleSheet, FlatList, Modal} from "react-native"
import uuid from 'react-native-uuid'

const App = () =>{

  const [newTitleProduct, setNewTitleProduct] = useState("")
  const [newPriceProduct, setNewPriceProduct] = useState("")
  const [products, setProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const[productSelected, setProductSelected] = useState({})

  const handlerAddProduct = () => {
    const newProduct = {
      id:uuid.v4(),
      title:newTitleProduct,
      price:newPriceProduct
    }
    setProducts(current => [...current,newProduct])
    setNewTitleProduct("")
    setNewPriceProduct("")
    console.log(products)
  }

  const handlerModal = (item) => {
    setProductSelected(item)
    setModalVisible(true)
  }

  const handlerDeleteProduct = () => {
    setProducts(current => current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)
  }

  return  <View style={styles.container}>
            <View style={styles.InpContainer}>
              <TextInput
              style={styles.Input}
              placeholder="Productos"
              value={newTitleProduct}
              onChangeText={(t)=> setNewTitleProduct(t)}
              />
              <TextInput
              style={styles.Input}
              placeholder="Precio"
              value={newPriceProduct}
              onChangeText={(t)=> setNewPriceProduct(t)}
              />
              <Button title="Add" onPress={handlerAddProduct}/>
            </View>

            <View style={styles.ListContainer}>
              <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({item})=> <View style={styles.CartItem}>
                                          <Text style={styles.CardTitle}>{item.title}</Text>
                                          <Text>{item.price}</Text>
                                          <Button title="Del" onPress={()=> handlerModal(item)}/>
                                      </View>}
              />
            </View>
            <Modal
              visible={modalVisible}
            >
              <View style={styles.modalContainer}>
                  <View style={styles.modalContent}>
                    <Text style={styles.modalText}>¿Está seguro que quiere borrar?</Text>
                    <Text style={styles.modalText}>{productSelected.title}</Text>
                    <Button title="Borrar" onPress={handlerDeleteProduct}/>
                    <Button title="Cerrar" onPress={()=> setModalVisible(false)}/>
                  </View>
              </View>
            </Modal>
          </View>
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#ddd",
    marginTop: 50,
    flex:1,
    justifyContent:"start",
    alignItems:"center"
  },
  InpContainer:{
    flexDirection:"row",
    alignItems:"center",
    alignSelf:"stretch",
    justifyContent:"space-around",
  },
  Input:{
    width:150,
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
  },
  modalContainer:{
    flex:1,
    paddingTop:"25%",
  },
  modalContent:{
    width:"75%",
    borderWidth:2,
    borderRadius:10,
    padding:10,
    gap:10,
    alignSelf:"center",
    alignItems:"center",
  },
  modalText:{
    fontWeight:"bold",
  }
})

export default App