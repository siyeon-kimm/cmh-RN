import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native';
import Logo from '../../../assets/images/project_logo.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'; 
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onSignInPressed = () => {
        navigation.navigate('Home');
    };

    const onForgotPasswordPressed = () => {
        navigation.navigate("ForgotPassword");
    };

    const onSignUpPress = () => {
        navigation.navigate('SignUp');
    };

    return (
        <ScrollView>
        <View style={styles.root}>
            <Image 
                source={Logo} 
                style={[styles.logo, {height: height * 0.3}]} 
                resizeMode="contain" 
            />

            <CustomInput 
                placeholder="이메일 입력" 
                value={email} 
                setValue={setEmail}
            />
            <CustomInput 
                placeholder="비밀번호 입력" 
                value={password} 
                setValue={setPassword}
                secureTextEntry={true}
            />

            <CustomButton text="로그인" onPress={onSignInPressed} />

            <CustomButton 
                text="회원가입" 
                onPress={onSignUpPress}
                type="SECONDARY" 
            />

            <CustomButton 
                text="비밀번호 찾기" 
                onPress={onForgotPasswordPressed}
                type="TERTIARY" 
            />

            <SocialSignInButtons />

        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
});
export default SignInScreen;