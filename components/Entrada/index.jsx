import { Text, TextInput, View } from "react-native";
import styles from "./styles";

export function Entrada(props){

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{props.titulo}</Text>
            <TextInput style={styles.input}
                    onChangeText={props.salvarValor}
                    value={props.valor}
                    placeholder= "" 
                    keyboardType= "numeric"
                />
        </View>
    )
}