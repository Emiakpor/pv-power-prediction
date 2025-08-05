import { colors, fontSize } from "@/constants/tokens"
import { BlurView } from "expo-blur"
import { Tabs } from "expo-router"
import { StyleSheet } from "react-native"
import {FontAwesome, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons"

const TabsNavigation = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: colors.primary,
            tabBarLabelStyle:{
                fontSize: fontSize.xs,
                fontWeight: '500'
            },
            headerShown: false,
            tabBarStyle: {
                position: "absolute",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderTopWidth: 0,
                paddingTop: 8,
            },
            tabBarBackground: () => <BlurView intensity={75} 
            style={{
                ...StyleSheet.absoluteFillObject,
                overflow: "hidden",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }}/>
        }}>
            <Tabs.Screen name="home" options={{
                title: "Home",
                tabBarIcon: ({color}) => <FontAwesome name="home" size={20} color={color}/>
            }}/>
            <Tabs.Screen name="about" options={{
                title: "About",
                tabBarIcon: ({color}) => <MaterialCommunityIcons name="ballot-outline" size={20} color={color}/>
            }}/>
            <Tabs.Screen name="(input)"options={{
                title: "Input",
                // tabBarIcon: ({color}) => <Ionicons name="card-outline" size={20} color={color}/>
                tabBarIcon: ({color}) => <MaterialCommunityIcons name="file-edit-outline" size={20} color={color}/>
                
            }}/>
        </Tabs>
    )
}

export default TabsNavigation