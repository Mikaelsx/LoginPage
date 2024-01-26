import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ScrollView, TextInput, Touchable, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (

    
    <View style={styles.container}>
      {/* Colocar scrow view  */}

      <StatusBar style="auto" />
    
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.masterdrilling.com/wp-content/uploads/bb-plugin/cache/Daniel_Danie_Pretorius2-1-circle.png',
        }}
      /> 

    
      <Text style={styles.h1}>Email</Text>
      <TextInput 
      style={styles.input}
      placeholder="  Digite seu email:"
      onClick={() => console.log('INPUT FUNCIONANDO!')}
      />

      <Text style={styles.h1}>Senha</Text>
      <TextInput 
      title="Digite a senha"
      style={styles.input}
      placeholder="  Digite sua senha:"
      onClick={() => console.log('INPUT FUNCIONANDO!')}
      />

      <TouchableOpacity 
      style={styles.btn}
      onPress={() => console.log('BOTÃO FUNCIONANDO!')}>
      <Text style={styles.textb}>LOGIN</Text>
      </TouchableOpacity>

      <view style={styles.new}>
      <Text style={styles.textc}>Venha conhecer nossas unidades</Text>

      {/* <ScrollView contentContainerStyle={{ padding: 20 }}> */}

      <Image
        style={styles.clinic}
        source={{
          uri: 'https://goclinica.com.br/wp-content/uploads/elementor/thumbs/1-min-pj5npv073irkwfplu4retw8gy8fy1ijztjv590h4me.jpg',
        }}
      /> 

      {/* </ScrollView> */}

      </view>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#22283E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
    marginTop: 50,
    color: 'white',
    fontSize: 14,
    marginBottom: 10,
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 50,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#00FFE0',
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#23D9C3',
    // margin: ' 0 auto',
    borderRadius: 18,
    opacity: 0.4,
    borderColor: '#00FFE0',
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#3E58B2',
    fontStyle: 'italic',
    fontWeight: '600',
    fontSize: 15,
  },

  btn: {
    marginTop: 80,
    width: '90%',
    height: 50,
    borderColor: 'white',
    borderWidth: 2,
    opacity: 0.8,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#181A56',
  },

  textb: {
    color: 'white',
  },

  textc: {
    marginTop: 8,
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  new: {
    backgroundColor: '#3E58B2',
    width: '100%',
    height: 300,
    opacity: 0.8,
    marginTop: 30,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  clinic: {
    width: 350,
    height: 200,
    marginTop: 10,
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 22,
  },

});
