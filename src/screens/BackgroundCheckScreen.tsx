import { View, StyleSheet, SafeAreaView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { YStack, Text, Button } from 'tamagui'
import { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import FormInput from '../components/FormInput'

type BackgroundCheckScreenProps = {
  onNext: () => void
}

export default function BackgroundCheckScreen({ onNext }: BackgroundCheckScreenProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    licenseNumber: '',
    dateOfBirth: ''
  })

  const handleChange = (field: keyof typeof formData) => (value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return formData.fullName && formData.licenseNumber && formData.dateOfBirth
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <YStack f={1} padding="$4" space="$4">
          <ProgressBar currentStep={1} totalSteps={4} />
          <YStack mt="$2.5">
            <Text fontSize="$6" fontWeight="bold">Background Check</Text>
          </YStack>
          
          <YStack flex={1} mt="$6">
            <FormInput
              label="Full Name"
              value={formData.fullName}
              onChangeText={handleChange('fullName')}
              placeholder="Enter your full name"
            />

            <FormInput
              label="License Number"
              value={formData.licenseNumber}
              onChangeText={handleChange('licenseNumber')}
              placeholder="Enter your license number"
              keyboardType="default"
            />

            <FormInput
              label="Date of Birth"
              value={formData.dateOfBirth}
              onChangeText={handleChange('dateOfBirth')}
              placeholder="MM/DD/YYYY"
              keyboardType="numeric"
            />
          </YStack>

          <Button 
            theme="active" 
            onPress={onNext}
            marginTop="$4"
            opacity={isFormValid() ? 1 : 0.5}
            disabled={!isFormValid()}
          >
            Next
          </Button>
        </YStack>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
})
