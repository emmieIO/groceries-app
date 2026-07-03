import { useAuth } from '@clerk/expo'
import { AuthView, UserButton } from '@clerk/expo/native'
import { useState } from 'react'
import { View, StyleSheet, ActivityIndicator, Button, Modal, Text } from 'react-native'
import "./global.css";

export default function MainScreen() {
  const { isSignedIn, isLoaded } = useAuth({ treatPendingAsSignedOut: false })
  const [isAuthOpen, setIsAuthOpen] = useState(false)

  if (!isLoaded) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
     <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewind!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})