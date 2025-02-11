import { View, StyleSheet, SafeAreaView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { YStack, Text, Button, XStack, Theme } from 'tamagui'
import { useState } from 'react'
import ProgressBar from '../components/ProgressBar'
import FormSelect from '../components/FormSelect'

type QuestionnaireScreenProps = {
  onNext: () => void
  navigation: any
}

const PREFERENCES = {
  eyeColors: [
    { label: '👁️ Blue', value: 'blue' },
    { label: '👁️ Brown', value: 'brown' },
    { label: '👁️ Green', value: 'green' },
    { label: '👁️ Hazel', value: 'hazel' },
    { label: '🌈 No Preference', value: 'any' },
  ],
  hairColors: [
    { label: '💇‍♂️ Black', value: 'black' },
    { label: '💇‍♂️ Brown', value: 'brown' },
    { label: '💇‍♀️ Blonde', value: 'blonde' },
    { label: '💇‍♀️ Red', value: 'red' },
    { label: '🌈 No Preference', value: 'any' },
  ],
  physique: [
    { label: '🏃‍♂️ Athletic', value: 'athletic' },
    { label: '💫 Average', value: 'average' },
    { label: '✨ Slim', value: 'slim' },
    { label: '💪 Muscular', value: 'muscular' },
    { label: '🌈 No Preference', value: 'any' },
  ],
  height: [
    { label: '📏 5\'0" - 5\'4"', value: '5\'0"-5\'4"' },
    { label: '📏 5\'5" - 5\'8"', value: '5\'5"-5\'8"' },
    { label: '📏 5\'9" - 6\'0"', value: '5\'9"-6\'0"' },
    { label: '📏 6\'1" and above', value: '6\'1"+' },
    { label: '🌈 No Preference', value: 'any' },
  ],
  style: [
    { label: '👕 Casual', value: 'casual' },
    { label: '👔 Professional', value: 'professional' },
    { label: '🎭 Trendy', value: 'trendy' },
    { label: '🏃‍♂️ Athletic', value: 'athletic' },
    { label: '🌈 No Preference', value: 'any' },
  ]
}

export default function QuestionnaireScreen({ onNext, navigation }: QuestionnaireScreenProps) {
  const [preferences, setPreferences] = useState({
    eyeColor: '',
    hairColor: '',
    physique: '',
    height: '',
    style: ''
  })

  const handleChange = (field: keyof typeof preferences) => (value: string) => {
    setPreferences(prev => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return Object.values(preferences).every(value => value !== '')
  }

  return (
    <Theme name="light">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container}>
          <ScrollView keyboardShouldPersistTaps="handled" style={styles.scrollView}>
            <YStack f={1} padding="$4" space="$4">
              <ProgressBar currentStep={2} totalSteps={4} />
              
              <YStack mt="$2.5">
                <Text fontSize="$6" fontWeight="bold" textAlign="center">Questionnaire</Text>
                <Text fontSize="$3" color="$gray11" mt="$2">Tell us about your preferences</Text>
              </YStack>
              
              <YStack space="$4">
                <FormSelect
                  label="👁️ Preferred Eye Color"
                  value={preferences.eyeColor}
                  onValueChange={handleChange('eyeColor')}
                  options={PREFERENCES.eyeColors}
                  placeholder="Select eye color"
                />

                <FormSelect
                  label="💇‍♂️ Preferred Hair Color"
                  value={preferences.hairColor}
                  onValueChange={handleChange('hairColor')}
                  options={PREFERENCES.hairColors}
                  placeholder="Select hair color"
                />

                <FormSelect
                  label="💪 Preferred Physique"
                  value={preferences.physique}
                  onValueChange={handleChange('physique')}
                  options={PREFERENCES.physique}
                  placeholder="Select physique type"
                />

                <FormSelect
                  label="📏 Preferred Height"
                  value={preferences.height}
                  onValueChange={handleChange('height')}
                  options={PREFERENCES.height}
                  placeholder="Select height range"
                />

                <FormSelect
                  label="👔 Preferred Style"
                  value={preferences.style}
                  onValueChange={handleChange('style')}
                  options={PREFERENCES.style}
                  placeholder="Select style preference"
                />
              </YStack>

              <Button
                size="$4"
                theme="active"
                onPress={() => navigation.navigate('Profile')}
                disabled={!isFormValid()}
                opacity={isFormValid() ? 1 : 0.5}
                marginTop="$4"
              >
                <Text>Next</Text>
              </Button>
            </YStack>
          </ScrollView>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </Theme>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
})
