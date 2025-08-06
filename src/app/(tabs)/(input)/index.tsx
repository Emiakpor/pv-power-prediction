import SolarInputForm from "@/components/SolarInputForm"
import { defaultStyles } from "@/styles"
import { Text, View } from "react-native"

const InputScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <SolarInputForm/>
        </View>
    )
}

export default InputScreen