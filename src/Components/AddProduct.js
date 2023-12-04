import { View, TextInput, Button, StyleSheet } from "react-native"

const AddProduct = ({valueTitle,valuePrice,onChangeTitle,onChangePrice,AddProduct}) => {
    return <View style={styles.InpContainer}>
                <TextInput
                style={styles.Input}
                placeholder="Productos"
                value={valueTitle}
                onChangeText={(t)=> onChangeTitle(t)}
                />
                <TextInput
                style={styles.Input}
                placeholder="Precio"
                value={valuePrice}
                onChangeText={(t)=> onChangePrice(t)}
                />
                <Button title="Add" onPress={AddProduct}/>
          </View>
}

const styles = StyleSheet.create({
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
})

export default AddProduct