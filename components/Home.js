import React, {useEffect, useState} from "react";
import {View, Text, StyleSheet}from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Signout } from "./Signout";

export function Home( props ) {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            HeaderRight: (props) => <Signout {...props} />
        })
    })
    return(
        <View>
            <Text>Home</Text>
        </View>
    )
}