import { View, StyleSheet, useWindowDimensions } from 'react-native'
import { YStack } from 'tamagui'

type ProgressBarProps = {
  currentStep: number
  totalSteps: number
}

export default function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const { width } = useWindowDimensions()
  const progress = (currentStep / totalSteps) * 100
  const barWidth = width - 32 // Account for padding

  return (
    <View style={styles.progressContainer}>
      <View 
        style={[
          styles.progressBar, 
          { 
            width: `${progress}%`,
            maxWidth: barWidth,
          }
        ]} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  progressContainer: {
    height: 6,
    backgroundColor: '#E0E0E0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#2196F3',
    borderRadius: 3,
  },
})
