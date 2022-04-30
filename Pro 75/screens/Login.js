import React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, ImageBackground } from "react-native";

export default class LoginScreen extends React.Component
{
    render()
        {
            return(
                <View>
                    <Text>Login Screen</Text>
                </View>
            )
        }
    
}

<KeyboardAvoidingView behavior="padding"style={styles.container}>
    <ImageBackground source={bgImage}style={styles.bgImage}>
        <View style={styles.upperContainer}>
            <Image source={appIcon}style={styles.appIcon}/>
            <Image source={appName}style={styles.appName}/>
        </View>
        <View style={styles.lowerContainer}>
            <TextInput
            style={styles.textinput}
            onChangeText={text=>this.setState({email:text})}
            placeholder={"Enter Email"}
            placeholderTextColor={"blue"}
            autoFocus
            />
            <TextInput 
            style={[styles.textinput,{marginTop:20}]}
            onChangeText={text=>this.setState({password:text})}
            placeholder={"Enter Password"}
            placeholderTextColor={"red"}
            secureTextEntry
            />
            <TouchableOpacity
            style={[styles.button,{marginTop:20}]}
            onPress={()=>this.handleLogin(email,password)}
            >
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </ImageBackground>
</KeyboardAvoidingView>

const styles=StyleSheet.create({
    loginBox:
    {
        width:300,
        height:40,
        borderWidth: 1.5,
        margin:10,
        paddingLeft: 10
    }
    container:{
        flex:1,
        backgroundColor:"green"
    },
    bgImage:{
        flex:1,
        resizeMode:"cover",
        justifyContent:"center"
    },
    upperContainer:{
        flex:0.5,
        justifyContent:"center",
        alignContent:"center",
    LowerContainer:{
        flex:0.5,
        justifyContent:"center",
        alignContent:"center",
    }
})
