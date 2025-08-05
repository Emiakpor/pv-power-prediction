import { StackScreenWithSearchBar } from "@/constants/_layout"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const AboutScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen 
                    name="index" options={{
                    ...StackScreenWithSearchBar,
                    headerTitle: "About"
                }}/>
            </Stack>
        </View>
    )
}

export default AboutScreenLayout