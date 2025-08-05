import { Tabs } from "expo-router"

const TabsNavigation = () => {
    return (
        <Tabs>
            <Tabs.Screen name="home" options={{headerShown: false }}/>
            <Tabs.Screen name="about" options={{headerShown: false }}/>
            <Tabs.Screen name="(input)" options={{headerShown: false }}/>
        </Tabs>
    )
}

export default TabsNavigation