import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'; 
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordScreen = () => {
    const [username, setUsername] = useState('');

    const navigation = useNavigation();

    const onSendPressed = () => {
        navigation.navigate('NewPassword')
    };
    
    const onSignInPress = () => {
        navigation.navigate('SignIn')
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>비밀번호 재설정</Text>
          
            <CustomInput 
                placeholder="이메일을 입력해주세요" 
                value={username} 
                setValue={setUsername} 
            />
            

            <CustomButton text="전송" onPress={onSendPressed} />

            <CustomButton 
                text="로그인 하기" 
                onPress={onSignInPress}
                type="TERTIARY" 
            />
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
    link: {
        color: '#FDB075'
    },
});

export default ForgotPasswordScreen;