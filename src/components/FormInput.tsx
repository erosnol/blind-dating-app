import { Input, Label, YStack } from 'tamagui'

type FormInputProps = {
  label: string
  value: string
  onChangeText: (text: string) => void
  placeholder?: string
  keyboardType?: 'default' | 'number-pad' | 'numeric'
}

export default function FormInput({
  label,
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default'
}: FormInputProps) {
  return (
    <YStack mb="$4">
      <Label htmlFor={label} mb="$2">
        {label}
      </Label>
      <Input
        id={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        borderWidth={1}
        borderColor="$gray8"
        size="$4"
      />
    </YStack>
  )
}
