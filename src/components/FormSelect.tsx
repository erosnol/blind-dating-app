import { Select, YStack, Label, Adapt, Sheet } from 'tamagui'
import { Platform } from 'react-native'

type Option = {
  label: string
  value: string
}

type FormSelectProps = {
  label: string
  value: string
  onValueChange: (value: string) => void
  options: Option[]
  placeholder?: string
}

export default function FormSelect({
  label,
  value,
  onValueChange,
  options,
  placeholder = 'Select an option'
}: FormSelectProps) {
  return (
    <YStack mb="$4">
      <Label htmlFor={label} mb="$2">
        {label}
      </Label>
      <Select
        id={label}
        value={value}
        onValueChange={onValueChange}
        native={Platform.OS === 'ios' || Platform.OS === 'android'}
      >
        <Select.Trigger
          width="100%"
          borderColor="$gray8"
          borderWidth={1}
          borderRadius="$2"
          p="$3"
        >
          <Select.Value placeholder={placeholder} />
        </Select.Trigger>

        <Adapt when="sm" platform="touch">
          <Sheet
            modal
            dismissOnSnapToBottom
            snapPoints={[55]}
            position={0}
            zIndex={200000}
          >
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay />
          </Sheet>
        </Adapt>

        <Select.Content zIndex={200000}>
          <Select.ScrollUpButton />
          <Select.Viewport minWidth={200}>
            <YStack gap="$2" p="$3">
              {options.map((option, i) => (
                <Select.Item
                  index={i}
                  key={option.value}
                  value={option.value}
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </YStack>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select>
    </YStack>
  )
}
