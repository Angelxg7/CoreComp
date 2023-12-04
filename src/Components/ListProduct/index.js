import { View, FlatList, StyleSheet} from "react-native"
import CardProduct from "./CardProduct"

const ListProduct = ({products,onModal}) => {
    return <View style={styles.ListContainer}>
                <FlatList
                    data={products}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <CardProduct item={item} onModal={onModal}/>}
                />
          </View>
}

const styles = StyleSheet.create({
    ListContainer:{
        width:"100%",
      }
})

export default ListProduct