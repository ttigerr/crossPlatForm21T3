import React from "react";
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import { AuthForm } from './AuthForm';
import { useNavigation } from '@react-navigation/native';
import { ThemeColours } from './ThemeColours';

export function Signin( props ) {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Sign in</Text>
            <AuthForm />
            <Button title="Click here to sign up" onPress={ () => navigation.navigate("Signup") }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: 20,
    },
    text: {
        textAlign: 'center',
    },
})