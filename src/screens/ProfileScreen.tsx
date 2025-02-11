import React, { useState } from 'react'
import { ScrollView, Linking, View, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { YStack, Text, Button, Input, Theme, XStack } from 'tamagui'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProgressBar from '../components/ProgressBar'
import AvatarSelect from '../components/AvatarSelect'

export default function ProfileScreen({ navigation }) {
  const [formData, setFormData] = useState({
    avatar: 'wolf',
    nickname: '',
    birthMonth: '',
    birthDay: '',
    age: '',
    occupation: '',
    bio: '',
    location: '',
    interests: '',
    languages: '',
    personalityType: '',
    loveLanguage: '',
    joke: ''
  })

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleAvatarSelect = (avatar: { id: string }) => {
    handleChange('avatar', avatar.id)
  }

  const handleNext = () => {
    console.log('Form data:', formData)
    navigation.navigate('Video')
  }

  const openPersonalityTest = () => {
    Linking.openURL('https://www.16personalities.com/free-personality-test')
  }

  const openLoveLanguageTest = () => {
    Linking.openURL('https://5lovelanguages.com/quizzes/love-language')
  }

  return (
    <Theme name="light">
      <SafeAreaView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ScrollView keyboardShouldPersistTaps="handled">
            <YStack f={1} padding="$4" space="$4">
              <ProgressBar currentStep={3} totalSteps={4} />

              <XStack justifyContent="space-between" alignItems="center">
                <Button
                  size="$3"
                  theme="alt2"
                  onPress={() => navigation.goBack()}
                >
                  <Text>Back</Text>
                </Button>
                <Text fontSize="$6" fontWeight="bold">Profile</Text>
                <View style={{ width: 70 }} /> {/* Spacer for alignment */}
              </XStack>

              <YStack alignItems="center">
                <AvatarSelect 
                  selectedAvatar={formData.avatar}
                  onSelect={handleAvatarSelect}
                />
                <Text color="$gray10">Tap to choose your spirit animal</Text>
              </YStack>

              <YStack space="$4">
                <Text fontSize="$5" fontWeight="bold">Nickname</Text>
                <Input
                  value={formData.nickname}
                  onChangeText={(text) => handleChange('nickname', text)}
                  placeholder="What should we call you?"
                />

                <Text fontSize="$5" fontWeight="bold">Birthday (Month/Day)</Text>
                <XStack space="$2">
                  <Input
                    flex={1}
                    value={formData.birthMonth}
                    onChangeText={(text) => handleChange('birthMonth', text)}
                    placeholder="MM"
                    maxLength={2}
                    keyboardType="numeric"
                  />
                  <Text fontSize="$6" alignSelf="center">/</Text>
                  <Input
                    flex={1}
                    value={formData.birthDay}
                    onChangeText={(text) => handleChange('birthDay', text)}
                    placeholder="DD"
                    maxLength={2}
                    keyboardType="numeric"
                  />
                </XStack>

                <Text fontSize="$5" fontWeight="bold">Age</Text>
                <Input
                  value={formData.age}
                  onChangeText={(text) => handleChange('age', text)}
                  placeholder="Your age"
                  keyboardType="numeric"
                />

                <Text fontSize="$5" fontWeight="bold">Occupation</Text>
                <Input
                  value={formData.occupation}
                  onChangeText={(text) => handleChange('occupation', text)}
                  placeholder="What do you do?"
                />

                <Text fontSize="$5" fontWeight="bold">Bio</Text>
                <Input
                  multiline
                  numberOfLines={4}
                  value={formData.bio}
                  onChangeText={(text) => handleChange('bio', text)}
                  placeholder="Tell us about yourself..."
                />

                <Text fontSize="$5" fontWeight="bold">Location</Text>
                <Input
                  value={formData.location}
                  onChangeText={(text) => handleChange('location', text)}
                  placeholder="Where are you based?"
                />

                <Text fontSize="$5" fontWeight="bold">Interests</Text>
                <Input
                  multiline
                  numberOfLines={4}
                  value={formData.interests}
                  onChangeText={(text) => handleChange('interests', text)}
                  placeholder="What are your hobbies and interests?"
                />

                <Text fontSize="$5" fontWeight="bold">Languages</Text>
                <Input
                  value={formData.languages}
                  onChangeText={(text) => handleChange('languages', text)}
                  placeholder="What languages do you speak?"
                />

                <YStack space="$2">
                  <Text fontSize="$5" fontWeight="bold">Personality Type (Optional)</Text>
                  <Input
                    value={formData.personalityType}
                    onChangeText={(text) => handleChange('personalityType', text)}
                    placeholder="Your MBTI type (e.g., INFJ)"
                  />
                  <Button
                    size="$3"
                    theme="alt2"
                    onPress={openPersonalityTest}
                  >
                    <Text>Take personality test</Text>
                  </Button>
                </YStack>

                <YStack space="$2">
                  <Text fontSize="$5" fontWeight="bold">Love Language (Optional)</Text>
                  <Input
                    value={formData.loveLanguage}
                    onChangeText={(text) => handleChange('loveLanguage', text)}
                    placeholder="Your love language"
                  />
                  <Button
                    size="$3"
                    theme="alt2"
                    onPress={openLoveLanguageTest}
                  >
                    <Text>Discover your love language</Text>
                  </Button>
                </YStack>

                <Text fontSize="$5" fontWeight="bold">Tell us a joke!</Text>
                <Input
                  multiline
                  numberOfLines={3}
                  value={formData.joke}
                  onChangeText={(text) => handleChange('joke', text)}
                  placeholder="Share your best joke..."
                />
              </YStack>

              <Button
                size="$4"
                theme="active"
                onPress={handleNext}
                marginTop="$4"
              >
                <Text>Next</Text>
              </Button>
            </YStack>
          </ScrollView>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </Theme>
  )
}
