import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const ToggleApp = () => {

    const [toggle, setToggle] = useState(true)


    return (
        <View>
            <Text>Status : {toggle ? 'On' : 'Off'}</Text>

            <Button onPress={() => setToggle(!toggle)} title='Change Toggle' />
        </View>
    )
}

export default ToggleApp

const styles = StyleSheet.create({})