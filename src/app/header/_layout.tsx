import { StackScreenWithSearchBar } from "@/constants/_layout"
import { colors } from "@/constants/tokens"
import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const HeaderLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen             
                    name="index" />
            </Stack>
        </View>
    )
}

export default HeaderLayout