import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'; 
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');

    const navigation = useNavigation();

    const onRegisterPressed = () => {
        navigation.navigate('ConfirmEmail');
    };
    
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onTermsOfUsePressed = () => {
        console.warn('onTermsOfUsePressed');
    };

    const onPrivacyPressed = () => {
        console.warn('onPrivacyPressed');
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>계정 생성</Text>
          
            <CustomInput 
                placeholder="아이디를 입력해주세요" 
                value={username} 
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="이메일을 입력해주세요" 
                value={email} 
                setValue={setEmail} 
            />
            <CustomInput 
                placeholder="비밀번호를 입력해주세요" 
                value={password} 
                setValue={setPassword}
                secureTextEntry
            />
            <CustomInput 
                placeholder="비밀번호를 한번 더 입력해주세요" 
                value={passwordRepeat} 
                setValue={setPasswordRepeat}
                secureTextEntry
            />

            <CustomButton text="가입하기" onPress={onRegisterPressed} />

            <CustomButton 
                text="계정이 이미 있으신가요?" 
                onPress={onSignInPress}
                type="TERTIARY"
            />

            <SocialSignInButtons />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
    },
    text: {
        color:'gray',
        marginVertical: 10,
    },
});

export default SignUpScreen;