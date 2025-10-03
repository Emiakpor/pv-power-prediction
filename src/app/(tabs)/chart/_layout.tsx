import { StackScreenWithSearchBar } from "@/constants/_layout"
import { colors } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const ChartScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen 
                   name="index" 
                   options={{
                   ...StackScreenWithSearchBar,
                    headerTitle: "",
                }}/>
            </Stack>
        </View>
    )
}

export default ChartScreenLayout