import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const weatherData = {
    Delhi: "20C:Cloudy",
    Gurgaon: "32C:Warm",
    Hydrabd: "25C: Sunny"
}
const WeatherApp = () => {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")


    const getResult = () => {

        setWeather(weatherData[city] || "No Data Availble For This City!")
    }

    return (
        <View>
            <Text>Weather App { }</Text>
            <TextInput placeholder='Enter Your City Here' onChangeText={text => setCity(text)} />
            <Button title='Get Weather' onPress={getResult} />


            {weather ? <Text>{weather}</Text> : null}

        </View>
    )
}

export default WeatherApp

const styles = StyleSheet.create({})