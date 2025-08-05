import { defaultStyles } from "@/styles"
import { Text, View } from "react-native"

const AboutScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <Text style={defaultStyles.text}>About</Text>
        </View>
    )
}

export default AboutScreen;