import React from 'react'
import { View } from 'react-native'
import { Sheet, Button, XStack, Text, YStack, ScrollView } from 'tamagui'

const spiritAnimals = [
  // Mammals
  { id: 'wolf', name: 'Wolf', emoji: '🐺', description: 'Loyal and strong' },
  { id: 'lion', name: 'Lion', emoji: '🦁', description: 'Brave and confident' },
  { id: 'tiger', name: 'Tiger', emoji: '🐯', description: 'Powerful and passionate' },
  { id: 'deer', name: 'Deer', emoji: '🦌', description: 'Gentle and graceful' },
  { id: 'fox', name: 'Fox', emoji: '🦊', description: 'Clever and adaptable' },
  { id: 'bear', name: 'Bear', emoji: '🐻', description: 'Strong and protective' },
  { id: 'panda', name: 'Panda', emoji: '🐼', description: 'Peaceful and balanced' },
  { id: 'koala', name: 'Koala', emoji: '🐨', description: 'Calm and dreamy' },
  { id: 'monkey', name: 'Monkey', emoji: '🐒', description: 'Playful and curious' },
  
  // Birds
  { id: 'owl', name: 'Owl', emoji: '🦉', description: 'Wise and observant' },
  { id: 'eagle', name: 'Eagle', emoji: '🦅', description: 'Vision and freedom' },
  { id: 'dove', name: 'Dove', emoji: '🕊️', description: 'Peace and harmony' },
  { id: 'peacock', name: 'Peacock', emoji: '🦚', description: 'Beauty and confidence' },
  { id: 'flamingo', name: 'Flamingo', emoji: '🦩', description: 'Unique and balanced' },
  { id: 'swan', name: 'Swan', emoji: '🦢', description: 'Grace and elegance' },
  
  // Sea Creatures
  { id: 'dolphin', name: 'Dolphin', emoji: '🐬', description: 'Playful and intelligent' },
  { id: 'whale', name: 'Whale', emoji: '🐋', description: 'Wisdom and depth' },
  { id: 'octopus', name: 'Octopus', emoji: '🐙', description: 'Creative and adaptable' },
  { id: 'turtle', name: 'Turtle', emoji: '🐢', description: 'Patient and wise' },
  
  // Insects & Others
  { id: 'butterfly', name: 'Butterfly', emoji: '🦋', description: 'Free and transformative' },
  { id: 'dragon', name: 'Dragon', emoji: '🐲', description: 'Powerful and mystical' },
  { id: 'unicorn', name: 'Unicorn', emoji: '🦄', description: 'Magical and unique' },
  { id: 'bee', name: 'Bee', emoji: '🐝', description: 'Productive and community-minded' },
  { id: 'ladybug', name: 'Ladybug', emoji: '🐞', description: 'Lucky and joyful' }
]

type AvatarSelectProps = {
  selectedAvatar: string
  onSelect: (avatar: { id: string, name: string, emoji: string }) => void
}

export default function AvatarSelect({ selectedAvatar, onSelect }: AvatarSelectProps) {
  const [open, setOpen] = React.useState(false)
  const selectedAnimal = spiritAnimals.find(animal => animal.id === selectedAvatar) || spiritAnimals[0]

  return (
    <>
      <Button
        size="$6"
        circular
        onPress={() => setOpen(true)}
        marginVertical="$4"
      >
        <YStack>
          <Text fontSize={40}>{selectedAnimal.emoji}</Text>
        </YStack>
      </Button>

      <Sheet
        modal
        open={open}
        onOpenChange={setOpen}
        snapPoints={[80]}
        dismissOnSnapToBottom
      >
        <Sheet.Overlay />
        <Sheet.Frame padding="$4">
          <Sheet.Handle />
          <Text fontSize="$6" fontWeight="bold" marginBottom="$4">
            Choose Your Spirit Animal
          </Text>
          
          <ScrollView>
            <YStack space="$4">
              <Text fontSize="$4" color="$gray10">Mammals</Text>
              <XStack flexWrap="wrap" justifyContent="space-between">
                {spiritAnimals.slice(0, 9).map((animal) => (
                  <Button
                    key={animal.id}
                    size="$6"
                    circular
                    marginBottom="$2"
                    onPress={() => {
                      onSelect(animal)
                      setOpen(false)
                    }}
                    theme={selectedAvatar === animal.id ? 'active' : undefined}
                  >
                    <YStack>
                      <Text fontSize={30}>{animal.emoji}</Text>
                      <Text fontSize="$2">{animal.name}</Text>
                    </YStack>
                  </Button>
                ))}
              </XStack>

              <Text fontSize="$4" color="$gray10">Birds</Text>
              <XStack flexWrap="wrap" justifyContent="space-between">
                {spiritAnimals.slice(9, 15).map((animal) => (
                  <Button
                    key={animal.id}
                    size="$6"
                    circular
                    marginBottom="$2"
                    onPress={() => {
                      onSelect(animal)
                      setOpen(false)
                    }}
                    theme={selectedAvatar === animal.id ? 'active' : undefined}
                  >
                    <YStack>
                      <Text fontSize={30}>{animal.emoji}</Text>
                      <Text fontSize="$2">{animal.name}</Text>
                    </YStack>
                  </Button>
                ))}
              </XStack>

              <Text fontSize="$4" color="$gray10">Sea Creatures</Text>
              <XStack flexWrap="wrap" justifyContent="space-between">
                {spiritAnimals.slice(15, 19).map((animal) => (
                  <Button
                    key={animal.id}
                    size="$6"
                    circular
                    marginBottom="$2"
                    onPress={() => {
                      onSelect(animal)
                      setOpen(false)
                    }}
                    theme={selectedAvatar === animal.id ? 'active' : undefined}
                  >
                    <YStack>
                      <Text fontSize={30}>{animal.emoji}</Text>
                      <Text fontSize="$2">{animal.name}</Text>
                    </YStack>
                  </Button>
                ))}
              </XStack>

              <Text fontSize="$4" color="$gray10">Insects & Others</Text>
              <XStack flexWrap="wrap" justifyContent="space-between">
                {spiritAnimals.slice(19).map((animal) => (
                  <Button
                    key={animal.id}
                    size="$6"
                    circular
                    marginBottom="$2"
                    onPress={() => {
                      onSelect(animal)
                      setOpen(false)
                    }}
                    theme={selectedAvatar === animal.id ? 'active' : undefined}
                  >
                    <YStack>
                      <Text fontSize={30}>{animal.emoji}</Text>
                      <Text fontSize="$2">{animal.name}</Text>
                    </YStack>
                  </Button>
                ))}
              </XStack>
            </YStack>
          </ScrollView>
        </Sheet.Frame>
      </Sheet>
    </>
  )
}
