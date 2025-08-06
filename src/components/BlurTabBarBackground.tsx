import { BlurView } from "expo-blur"
import { StyleSheet } from "react-native"

export const BlurTabBarBackground = () =>{
    return (
        <BlurView 
            tint="systemChromeMaterial"
            intensity={100}
            style={StyleSheet.absoluteFill}
        />
    )
}