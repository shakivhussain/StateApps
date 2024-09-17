import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F333FF"];

const ColorPicker = () => {

    const [selectedColor, setSelectedColor] = useState("fff")

    return (
        <View style={{ backgroundColor: selectedColor, padding: 10 }}>

            <Text style={styles.title}>Pick a Color</Text>

            <View style={styles.colorsContainer}>

                {colors.map(color => (
                    <TouchableOpacity
                        style={[styles.colorBox, { backgroundColor: color }]}
                        key={color} onPress={() => setSelectedColor(color)} />

                ))}

            </View>

        </View>
    )
}



const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    colorsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    colorBox: {
        width: 60,
        height: 60,
        margin: 5,
        borderRadius: 30,
    },
});

export default ColorPicker

