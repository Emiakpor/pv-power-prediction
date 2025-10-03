import { StackScreenWithSearchBar } from "@/constants/_layout"
import { colors } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const PredictScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen 
                   name="index" 
                   options={{
                   ...StackScreenWithSearchBar,
                    headerTitle: "Prediction",
                }}/>
            </Stack>
        </View>
    )
}

export default PredictScreenLayout