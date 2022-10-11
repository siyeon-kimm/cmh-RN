import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton'; 
import { useNavigation } from '@react-navigation/native';

const NewPasswordScreen = () => {
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const navigation = useNavigation();

    const onSubmitPressed = () => {
        navigation.navigate('SignIn');
    };
    
    const onSignInPress = () => {
        navigation.navigate('SignIn');
    };

    return (
        <View style={styles.root}>
            <Text style={styles.title}>비밀번호 재설정</Text>
          
            <CustomInput 
                placeholder="인증코드를 입력해주세요" 
                value={code} 
                setValue={setCode} 
            />
            
            <CustomInput 
                placeholder="새로운 비밀번호를 입력해주세요" 
                value={newPassword} 
                setValue={setNewPassword} 
            />

            <CustomButton text="완료" onPress={onSubmitPressed} />

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

export default NewPasswordScreen;