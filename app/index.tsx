import { StyleSheet, Text, View } from "react-native";
import ToggleApp from "./components/1.ToggleApp/ToggleApp";
import WeatherApp from "./components/2.WeatherApp/WeatherApp";
import ColorPicker from "./components/3.ColorPicker/ColorPicker";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* <Text style={styles.title}>Hello World</Text> */}
        {/* <Text style={styles.subtitle}>This is the first page of your app.</Text> */}

        {/* <ToggleApp /> */}

        {/* <WeatherApp/> */}

        <ColorPicker />


      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
