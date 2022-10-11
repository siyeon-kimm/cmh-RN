import React from 'react';
import {View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmEmailScreen from '../screens/ConfirmEmailScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import HomeScreen from '../screens/HomeScreen';
import CameraScreen from '../screens/CameraScreen';
import InfoScreen from '../screens/InfoScreen';
import ApplicationScreen from '../screens/ApplicationScreen';
import PayScreen from '../screens/PayScreen';
import CheckScreen from '../screens/CheckScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
                <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
                <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
                <Stack.Screen name="NewPassword" component={NewPasswordScreen} />

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Camera" component={CameraScreen} />
                <Stack.Screen name="Info" component={InfoScreen} />
                <Stack.Screen name="Application" component={ApplicationScreen} />
                <Stack.Screen name="Pay" component={PayScreen} />
                <Stack.Screen name="Check" component={CheckScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation;