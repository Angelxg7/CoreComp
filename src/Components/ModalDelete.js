import {Modal,View,Text,Button,StyleSheet} from "react-native"

const ModalDelete = ({product, onModal, visible, onDelete}) =>{
    return  <Modal
                visible={visible}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText}>¿Está seguro que quiere borrar?</Text>
                        <Text style={styles.modalText}>{product.title}</Text>
                        <Button title="Borrar" onPress={onDelete}/>
                        <Button title="Cerrar" onPress={()=> onModal(false)}/>
                    </View>
                </View>
            </Modal>
}

const styles = StyleSheet.create({
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
      },
})

export default ModalDelete