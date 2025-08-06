import { colors, fontSize } from "@/constants/tokens"
import { BlurView } from "expo-blur"
import { Tabs } from "expo-router"
import { StyleSheet } from "react-native"
import {FontAwesome, MaterialCommunityIcons, Ionicons} from "@expo/vector-icons"
import { BlurTabBarBackground } from "@/components/BlurTabBarBackground"

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
                paddingTop: 0,
            },
            animation: "shift",
            //tabBarBackground: BlurTabBarBackground,
            // tabBarPosition: "right",
            // tabBarVariant: "material",
            // tabBarBackground: () => <BlurView intensity={25}
            // style={{
            //     ...StyleSheet.absoluteFillObject,
            //     overflow: "hidden",
            //     borderTopLeftRadius: 20,
            //     borderTopRightRadius: 20,
            // }}/>
        }}>
            <Tabs.Screen name="home" options={{
                title: "Home",
                tabBarIcon: ({color, size}) => <FontAwesome name="home" size={size} color={color}/>
            }}/>
            <Tabs.Screen name="about" options={{
                title: "About",
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="ballot-outline" size={size} color={color}/>
            }}/>
            <Tabs.Screen name="(input)"options={{
                title: "Input",
                // tabBarIcon: ({color}) => <Ionicons name="card-outline" size={20} color={color}/>
                tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="file-edit-outline" size={size} color={color}/>
                
            }}/>
            <Tabs.Screen name="predict"options={{
                href: null
            }}/>
        </Tabs>
    )
}

export default TabsNavigation