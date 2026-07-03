import { Stack } from "expo-router";


export default function RootLayout() {

  return (<Stack screenOptions={{ 
    headerShown: true,
    headerShadowVisible:false,
    headerBlurEffect:"none" }} />)

}
