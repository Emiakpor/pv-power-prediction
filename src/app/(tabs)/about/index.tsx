import { defaultStyles } from "@/styles"
import { Text, View } from "react-native"

import AboutView from "@/components/About/AboutView"

const AboutScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <AboutView/>
        </View>
    )
}

export default AboutScreen;