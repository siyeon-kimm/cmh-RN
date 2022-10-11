import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'; 
import { useNavigation } from '@react-navigation/native';

const ConfirmEmailScreen = () => {
    const [code, setCode] = useState('');
    
    const navigation = useNavigation();

    const onConfirmPressed = () => {
        navigation.navigate('SignIn');
    };
    
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    const onResendPress = () => {
        console.warn('onResendPress');
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>이메일 인증</Text>
          
            <CustomInput 
                placeholder="인증코드를 입력해주세요" 
                value={code} 
                setValue={setCode} 
            />
            

            <CustomButton text="인증하기" onPress={onConfirmPressed} />

            <CustomButton 
                text="다시 전송하기" 
                onPress={onResendPress}
                type="SECONDARY" 
            />

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

export default ConfirmEmailScreen;