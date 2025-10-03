import SolarInputForm from "@/components/SolarInput/SolarInputForm"
import { defaultStyles } from "@/styles"
import { Text, View } from "react-native"
import PanelParametersForm from "@/components/SolarInput/PanelParameterForm"


const InputScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <PanelParametersForm/>
        </View>
    )
}

export default InputScreen