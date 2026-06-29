import React from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

type ScreenWrapperProps = {
    children: React.ReactNode
}

export function ScreenWrapper({ children }: ScreenWrapperProps) {
    return (
        <SafeAreaView style={styles.conatainer}>
            {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    conatainer: {
        backgroundColor: "#fff",
        flex:1,
        height:100
    }
})