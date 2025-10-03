import { defaultStyles } from "@/styles/"
import React from "react";
import {
  View,
} from "react-native";
import HomeView from "@/components/Home/HomeView"

const HomeScreen = () => {
    return (
        <View style={defaultStyles.container}>
            <HomeView/>
        </View>
    )
}

export default HomeScreen