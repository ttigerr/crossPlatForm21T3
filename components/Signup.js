import React from "react";
import {View, Text, StyleSheet, Button}from "react-native";
import { useNavigation } from "@react-navigation/core";

export function Signup( props ) {

    // Move to another screen by using "useNavigation"
    const navigation = useNavigation()
    return(
        <View>
            <Text>Sign up</Text>
            {/* Make an action to move to another screen */}
            <Button title="Click here to Sign in" onPress={() => navigation.navigate("Signin")}/>
        </View>
    )
}