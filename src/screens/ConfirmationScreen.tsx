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

type ConfirmationScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Confirmation'>
}

export default function ConfirmationScreen({ navigation }: ConfirmationScreenProps) {
  return (
    <Theme name="light">
      <SafeAreaView style={{ flex: 1 }}>
        <YStack f={1} padding="$4" space="$4">
          <ProgressBar currentStep={5} totalSteps={5} />
          
          <XStack justifyContent="space-between" alignItems="center">
            <Button
              size="$3"
              theme="alt2"
              onPress={() => navigation.goBack()}
            >
              <Text>Back</Text>
            </Button>
            <Text fontSize="$6" fontWeight="bold">Confirmation</Text>
            <View style={{ width: 70 }} /> {/* Spacer for alignment */}
          </XStack>

          <YStack space="$4" flex={1} justifyContent="center" alignItems="center">
            <Text fontSize="$8" textAlign="center">
              🎉
            </Text>
            
            <Text fontSize="$6" fontWeight="bold" textAlign="center">
              Profile Under Review
            </Text>

            <YStack space="$4" paddingHorizontal="$4">
              <Text fontSize="$4" textAlign="center" color="$gray10">
                Thank you for completing your profile! Our team will review your information within 24-48 hours.
              </Text>

              <Text fontSize="$4" textAlign="center" color="$gray10">
                We'll notify you once your profile is approved and you can start connecting with others.
              </Text>
            </YStack>

            <YStack space="$2" marginTop="$6" width="100%" paddingHorizontal="$4">
              <Text fontSize="$4" fontWeight="bold" textAlign="center">
                What happens next?
              </Text>
              <Text fontSize="$4" color="$gray10">• Profile review by our team</Text>
              <Text fontSize="$4" color="$gray10">• Background check verification</Text>
              <Text fontSize="$4" color="$gray10">• Profile activation</Text>
              <Text fontSize="$4" color="$gray10">• Start connecting!</Text>
            </YStack>
          </YStack>

          <Button
            size="$4"
            theme="active"
            onPress={() => navigation.navigate('Welcome')}
          >
            <Text>Return to Home</Text>
          </Button>
        </YStack>
      </SafeAreaView>
    </Theme>
  )
}
