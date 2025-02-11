import { TamaguiProvider, Theme } from 'tamagui'
import config from './tamagui.config'
import WelcomeScreen from './src/screens/WelcomeScreen'
import BackgroundCheckScreen from './src/screens/BackgroundCheckScreen'
import QuestionnaireScreen from './src/screens/QuestionnaireScreen'
import ProfileScreen from './src/screens/ProfileScreen'
import VideoScreen from './src/screens/VideoScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

const Stack = createNativeStackNavigator()

function ThemedBackgroundCheckScreen({ navigation }) {
  return (
    <Theme name="light">
      <BackgroundCheckScreen 
        onNext={() => navigation.navigate('Questionnaire')} 
      />
    </Theme>
  )
}

function ThemedQuestionnaireScreen({ navigation }) {
  return (
    <Theme name="light">
      <QuestionnaireScreen 
        onNext={() => navigation.navigate('Profile')}
        navigation={navigation}
      />
    </Theme>
  )
}

function ThemedProfileScreen({ navigation }) {
  return (
    <Theme name="light">
      <ProfileScreen navigation={navigation} />
    </Theme>
  )
}

function ThemedVideoScreen({ navigation }) {
  return (
    <Theme name="light">
      <VideoScreen navigation={navigation} />
    </Theme>
  )
}

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="BackgroundCheck" component={ThemedBackgroundCheckScreen} />
            <Stack.Screen name="Questionnaire" component={ThemedQuestionnaireScreen} />
            <Stack.Screen name="Profile" component={ThemedProfileScreen} />
            <Stack.Screen name="Video" component={ThemedVideoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  )
}
