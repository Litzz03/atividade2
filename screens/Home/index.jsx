import { Button, Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import { Entrada } from '../../components/Entrada'
import { useState } from 'react'
 

export function Home(){
    
    const [peso, setPeso] = useState('')
    const [altura, setAltura] = useState('')
    const [imc, setImc] = useState('')

    function calcularIMC(){
        const valor =(peso/(altura*altura))

        if (valor < 18.5) {
            setImc('Abaixo do peso');
          } else if (valor < 24.9) {
            setImc('Peso normal');
          } else if (valor <= 25 || valor < 29.9) {
            setImc('Sobrepeso');
          } else if (valor >=30 || valor < 34.9){
            setImc('Obesidade grau 1');
          }else if (valor >=35 || valor < 39.9){
            setImc('Obesidade grau 2');
          }else if ( valor < 40){
            setImc('Obesidade grau 3');
          }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculadora de IMC</Text>
            <Text style={styles.subtitulo}>Descubra qual seu indíce de Massa Corporal</Text>
        
            <View style={styles.entradas}>   
                <Entrada titulo='Peso (Kg)' salvarValor={setPeso} valor={peso}/>
                <Entrada titulo='Altura (m)' salvarValor={setAltura} valor={altura}/>
            </View> 
    
            <TouchableOpacity 
                style={styles.buton}
                onPress={calcularIMC}>
                
                <Text style={styles.textButon}>CALCULAR</Text>
            </TouchableOpacity>

            <View style={styles.telaResultado}>
                <Text style={styles.resultadoTitulo}>Seu Indice de Massa Corporal é</Text>
                <Text style={styles.textoResultado}>{imc}</Text>
            </View>
        </View>
    )
}