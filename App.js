import { useState } from "react"
import { View ,StyleSheet} from "react-native"
import uuid from 'react-native-uuid'
import ModalDelete from "./src/Components/ModalDelete"
import AddProduct from "./src/Components/AddProduct"
import ListProduct from "./src/Components/ListProduct"

const App = () =>{

  const [newTitleProduct, setNewTitleProduct] = useState("")
  const [newPriceProduct, setNewPriceProduct] = useState("")
  const [products, setProducts] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [productSelected, setProductSelected] = useState({})

  const handlerAddProduct = () => {
    console.log("Item Added")
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
    console.warn("Item Deleted")
    setProducts(current => current.filter(product => product.id !== productSelected.id))
    setModalVisible(false)
  }

  return <View style={styles.container}>
            <AddProduct
                valueTitle = {newTitleProduct}
                valuePrice = {newPriceProduct}
                onChangeTitle = {setNewTitleProduct}
                onChangePrice = {setNewPriceProduct}
                AddProduct = {handlerAddProduct}
            />
            <ListProduct
              products = {products}
              onModal = {handlerModal}
            />
            <ModalDelete
                product = {productSelected}
                visible = {modalVisible}
                onModal = {handlerModal}
                onDelete = {handlerDeleteProduct}
            />
          </View>
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#cee",
    marginTop: 50,
    flex:1,
    justifyContent:"start",
    alignItems:"center"
  },
  image:{
    resizeMode:"cover",
    justifyContent:"center"
  }
})

export default App