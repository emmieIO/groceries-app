import { ScreenWrapper } from "@/components/screen-wrapper";
import Icon from "@expo/vector-icons/FontAwesome5";
import { useEffect, useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';


export default function Index() {
  const [value, setValue] = useState('');
  const translateY = useSharedValue(0);

  useEffect(() => {
    translateY.value = withRepeat(
      withSequence(
        withTiming(-20, { duration: 700, easing: Easing.out(Easing.quad) }),
        withTiming(0, { duration: 700, easing: Easing.in(Easing.quad) })
      ),
      -1, // repeat indefinitely
      false
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));
  return (
    <ScreenWrapper>
      <View style={{
        padding: 10,
        position: "relative",
        height: 300,
        backgroundColor: "#00fa001a",
        overflow: "hidden"
      }}>
        <Text style={{
          textAlign: "center",
          fontSize: 20,
          fontWeight: 100
        }}>The helpful neighbor delivering farm-to-table freshness directly to your door step</Text>

        <View style={styles.container}>
          <Animated.Image
            source={{ uri: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
            style={[styles.image, animatedStyle]}
          />
        </View>

      </View>
      <View>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={{
          fontWeight: 200,
          fontSize: 20,
          textAlign: 'center',
          paddingHorizontal: 20
        }}>Choose your preferred login method to continue shopping </Text>
      </View>
      <View style={styles.socialContainer}>
        <Pressable style={styles.socialBtn} onPress={() => Alert.alert('Pressed!')}>
          <Icon name='google' size={26} />
          <Text style={{ fontSize: 18, textAlign: "center" }}>Continue With Google</Text>
        </Pressable>

        <Pressable style={[styles.socialBtn, { backgroundColor: 'black' }]} onPress={() => Alert.alert('Pressed!')}>
          <Icon name='apple' style={{ color: "white" }} size={26} />
          <Text style={{ fontSize: 18, color: 'white' }}>Continue With Apple</Text>
        </Pressable>
        <Pressable style={[styles.socialBtn, { backgroundColor: "rgb(26, 26, 28)" }]} onPress={() => Alert.alert('Pressed!')}>
          <Icon name='github' style={{ color: "white" }} size={26} />
          <Text style={{ fontSize: 18, color: 'white' }}>Continue With Github</Text>
        </Pressable>
      </View>
      {/* Divider section*/}
      <View style={{
        flexDirection: 'row',
        alignItems: "center",
        marginVertical: 40,
        paddingHorizontal: 15,
        gap: 10
      }}>
        <Text style={styles.line}></Text>
        <Text >Or</Text>
        <Text style={styles.line}></Text>
      </View>
      <View>
        <TextInput
          style={styles.textInput}
          value={value}
          onChangeText={setValue}
          placeholder="Type here" />
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    height: 250,
    width: 250,
    marginTop: 80
  },
  welcomeText: {
    fontSize: 28,
    fontWeight: 700,
    padding: 10,
    textAlign: "center"
  },
  socialContainer: {
    marginTop: 25,
    alignItems: 'center',
    gap: 23
  },
  socialBtn: {
    padding: 8,
    width: 400,
    borderRadius: 20,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0'
  },
  textInput:{
    borderWidth: 1,
    marginHorizontal:20,
    padding:20,
    borderRadius:10,
    fontSize:18
  }


});
