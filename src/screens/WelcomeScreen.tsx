import { YStack, Text, Button } from 'tamagui'
import { useState } from 'react'
import Modal from '../components/Modal'
import TermsScreen from './TermsScreen'

type WelcomeScreenProps = {
  navigation: any
}

export default function WelcomeScreen({ navigation }: WelcomeScreenProps) {
  const [showTerms, setShowTerms] = useState(false)

  const handleTermsAccepted = () => {
    setShowTerms(false)
    navigation.navigate('BackgroundCheck')
  }

  return (
    <YStack f={1} backgroundColor="$background" padding="$4">
      <YStack f={1} ai="center" jc="center">
        <Text fontSize="$6" fontWeight="bold" mb="$4">
          Blind Dating App
        </Text>
      </YStack>
      
      <Button 
        size="$4" 
        theme="active" 
        onPress={() => setShowTerms(true)} 
        mb="$8" 
        width="100%"
      >
        Get Started
      </Button>

      <Modal visible={showTerms} onClose={() => setShowTerms(false)}>
        <TermsScreen onClose={handleTermsAccepted} />
      </Modal>
    </YStack>
  )
}
