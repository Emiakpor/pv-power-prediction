import { defaultStyles } from "@/styles"
import { Text, View } from "react-native"

import AnalyticView from "@/components/Analytics/AnalyticView";

const AnalyticScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <AnalyticView/>
        </View>
    )
}

export default AnalyticScreen;