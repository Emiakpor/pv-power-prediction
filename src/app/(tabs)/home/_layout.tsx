import { StackScreenWithSearchBar } from "@/constants/_layout"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const HomeScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen 
                   name="index" options={{
                   ...StackScreenWithSearchBar,
                    headerTitle: "Home"
                }}/>
            </Stack>
        </View>
    )
}

export default HomeScreenLayout