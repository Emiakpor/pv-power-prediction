import {NativeStackNavigationOptions} from "@react-navigation/native-stack"
import { colors } from "./tokens"

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
    headerLargeTitle: true,
    headerLargeStyle: {
        backgroundColor: colors.dark
    },
    headerLargeTitleStyle: {
        color: colors.dark
    },
    headerTintColor: colors.dark,
    headerTransparent: true,
    headerBlurEffect: "prominent",
    headerShadowVisible: false,
}