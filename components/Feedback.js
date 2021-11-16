import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'


export function Feedback (props) {
    return(
        <View>
            <Text>{props.message}</Text>
        </View>
    )
}