import { defaultStyles } from "@/styles"
import { Text, View } from "react-native"

import ReportView from "@/components/Report/ReportView";

const AnalyticScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <ReportView/>
        </View>
    )
}

export default AnalyticScreen;