import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SafeAreaView, StyleSheet } from "react-native";
import TopRightMenuView from "@/components/Menu/TopRightMenuView";
import { styles } from "@/styles/home_view_style"

const App = () => {
	return (
		<SafeAreaProvider>
			<RootNavigation />
			<StatusBar style="auto"/>
		</SafeAreaProvider>
	)
}

const RootNavigation = () => {
	return (
	<SafeAreaView style={styles.container}>
      {/* Global Menu visible on all pages */}
      <TopRightMenuView />
	  <Stack>
	  	<Stack.Screen name='(tabs)' 
	  	options={{
	  		headerShown: false,
	  		contentStyle: { backgroundColor: "#4f6d7a" }
	  	 }}/>
	  </Stack>
	</SafeAreaView>)
	
}

export default App;
