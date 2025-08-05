import { defaultStyles } from "@/styles"
import { Stack } from "expo-router"
import { View } from "react-native"

const InputScreenLayout = () => {
    return (
        <View style={defaultStyles.container}>
            <Stack>
                <Stack.Screen name="index" options={{
                    headerTitle: "PV Input"
                }}/>
            </Stack>
        </View>
    )
}

export default InputScreenLayout