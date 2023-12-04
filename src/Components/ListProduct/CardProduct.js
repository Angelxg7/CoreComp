import {View, Text, Button, StyleSheet } from "react-native"


const CardProduct = ({item,onModal}) => {
    return <View style={styles.CardProduct}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text>{item.price} $</Text>
                <Button title="Del" onPress={() => onModal(item)}/>
            </View>
}

const styles = StyleSheet.create({
    CardProduct:{
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

export default CardProduct