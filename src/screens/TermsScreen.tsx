import { useState } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import { YStack, Text, Button, Checkbox, XStack } from 'tamagui'

export default function TermsScreen({ onClose }: { onClose: () => void }) {
  const [agreed, setAgreed] = useState(false)

  const termsText = `Terms and Conditions

1. Acceptance of Terms
By accessing and using this application, you agree to be bound by these Terms and Conditions.

2. Privacy Policy
We respect your privacy and protect your personal information. Please review our Privacy Policy for details.

3. User Conduct
Users must:
- Be at least 18 years old
- Provide accurate information
- Respect other users
- Not engage in harmful behavior

4. Account Security
You are responsible for maintaining the confidentiality of your account credentials.

5. Content Guidelines
Users must not post:
- Inappropriate content
- Misleading information
- Copyrighted material without permission

6. Termination
We reserve the right to terminate accounts that violate these terms.

7. Changes to Terms
We may update these terms at any time. Continued use constitutes acceptance of changes.

8. Liability
We are not liable for any damages arising from use of this application.

9. Governing Law
These terms are governed by applicable local laws.

10. Contact
For questions about these terms, please contact support.`

  return (
    <View style={styles.container}>
      <YStack padding="$4" flex={1}>
        <Text fontSize="$6" fontWeight="bold" mb="$4">Terms & Conditions</Text>
        
        <ScrollView style={styles.scrollView}>
          <Text whiteSpace="pre-line">
            {termsText}
          </Text>
        </ScrollView>

        <YStack mt="$4">
          <XStack alignItems="center" mb="$4">
            <Checkbox 
              checked={agreed} 
              onCheckedChange={(checked) => setAgreed(checked)}
              mr="$2"
            >
              <Checkbox.Indicator>
                <Text>✓</Text>
              </Checkbox.Indicator>
            </Checkbox>
            <Text>I agree to the Terms & Conditions</Text>
          </XStack>

          <Button 
            theme="active" 
            disabled={!agreed}
            onPress={() => {
              if (agreed) {
                onClose()
                // Add navigation to next screen here
                console.log('Navigate to next screen')
              }
            }}
          >
            Next
          </Button>
        </YStack>
      </YStack>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
  },
})
