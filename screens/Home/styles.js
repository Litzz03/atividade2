import { StyleSheet } from "react-native";


export default styles = StyleSheet.create({ 

    container:{
        backgroundColor: '#967ADC',
        flex: 1,
        paddin: 24,
        alignItems: "center"
    },
    titulo:{
        color: '#fff',
        fontSize: 24,
        textAlign:"center",
        marginTop: 60
    },
    subtitulo:{
        color: '#fff',
        fontSize: 16,
        textAlign:"center"
    },
    telaResultado: {
        height: 430,
        width: '100%',
        backgroundColor: '#fff',
        justifyContent:"center",
        alignItems:"center"
    },
    resultadoTitulo: {
        fontSize: 14,
        color: '#967ADC'   
    },
    entradas:{
        flexDirection: "row",
        padding: 15,
        marginTop: 30 
    },
    textoResultado:{
        color: '#967ADC',
        fontSize: 20,
        marginTop: 40,
        fontWeight: "bold"  
    },
    buton:{
        width: '85%',
        height:56,
        backgroundColor:'#fff',
        alignItems: 'center',
        justifyContent:'center',
        marginTop:60,
        marginBottom: 30,
        borderRadius: 5
    },
    textButon:{
        color: '#967ADC',
        fontSize: 20,
        fontWeight: "bold" 
    }
})