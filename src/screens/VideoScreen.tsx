import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { YStack, Text, Button, Theme, XStack } from 'tamagui'
import { View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import ProgressBar from '../components/ProgressBar'

type RootStackParamList = {
  Welcome: undefined;
  BackgroundCheck: undefined;
  Questionnaire: undefined;
  Profile: undefined;
  Video: undefined;
  Confirmation: undefined;
}

type VideoScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Video'>
}

export default function VideoScreen({ navigation }: VideoScreenProps) {
  return (
    <Theme name="light">
      <SafeAreaView style={{ flex: 1 }}>
        <YStack f={1} padding="$4" space="$4">
          <ProgressBar currentStep={4} totalSteps={5} />
          
          <XStack justifyContent="space-between" alignItems="center">
            <Button
              size="$3"
              theme="alt2"
              onPress={() => navigation.goBack()}
            >
              <Text>Back</Text>
            </Button>
            <Text fontSize="$6" fontWeight="bold">Video Intro</Text>
            <View style={{ width: 70 }} /> {/* Spacer for alignment */}
          </XStack>

          <YStack space="$4" flex={1} justifyContent="center">
            <Text fontSize="$6" fontWeight="bold" textAlign="center">
              🎥 Video Introduction
            </Text>

            <Text fontSize="$4" textAlign="center" color="$gray10">
              For the best experience, please prepare:
            </Text>

            <YStack space="$2" paddingHorizontal="$4">
              <Text fontSize="$4" color="$gray10">
                • A well-lit, quiet environment
              </Text>
              <Text fontSize="$4" color="$gray10">
                • 30 seconds to introduce yourself
              </Text>
              <Text fontSize="$4" color="$gray10">
                • Your authentic smile 😊
              </Text>
              <Text fontSize="$4" color="$gray10">
                • A brief description of your interests
              </Text>
            </YStack>

            <Text fontSize="$4" textAlign="center" color="$gray10" marginTop="$4">
              In the next step, you'll be able to record your video introduction.
            </Text>
          </YStack>

          <Button
            size="$4"
            theme="active"
            onPress={() => navigation.navigate('Confirmation')}
          >
            <Text>Continue to Recording</Text>
          </Button>
        </YStack>
      </SafeAreaView>
    </Theme>
  )
}

