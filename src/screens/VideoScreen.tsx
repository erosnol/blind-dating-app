import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { YStack, Text, Button, Theme } from 'tamagui'
import { View } from 'react-native'
import { Camera } from 'expo-camera'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import ProgressBar from '../components/ProgressBar'

type RootStackParamList = {
  Welcome: undefined;
  BackgroundCheck: undefined;
  Questionnaire: undefined;
  Profile: undefined;
  Video: undefined;
}

type VideoScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Video'>
}

export default function VideoScreen({ navigation }: VideoScreenProps) {
  const [hasPermission, setHasPermission] = React.useState<boolean | null>(null)
  const cameraRef = React.useRef<Camera | null>(null)

  React.useEffect(() => {
    async function getPermission() {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    }
    getPermission()
  }, [])

  if (hasPermission === null) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Requesting permission...</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>No access to camera</Text>
      </View>
    )
  }

  return (
    <Theme name="light">
      <SafeAreaView style={{ flex: 1 }}>
        <YStack f={1} padding="$4" space="$4">
          <ProgressBar currentStep={4} totalSteps={4} />
          
          <Text fontSize="$6" fontWeight="bold" textAlign="center">
            Video
          </Text>

          <View style={{ flex: 1, borderRadius: 20, overflow: 'hidden' }}>
            <Camera
              ref={cameraRef}
              style={{ flex: 1 }}
              type="front"
            />
          </View>

          <Button
            size="$4"
            theme="active"
            onPress={() => navigation.navigate('Welcome')}
          >
            <Text>Submit</Text>
          </Button>
        </YStack>
      </SafeAreaView>
    </Theme>
  )
}
