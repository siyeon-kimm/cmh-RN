import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
    const onSignInNaver = () => {
        console.warn('onSignInNaver');
    };

    const onSignInGoogle = () => {
        console.warn('onSignInGoogle');
    };

    const onSignInKakao = () => {
        console.warn('onSignInKakao');
    };

    return (
        <>
            <CustomButton
                text="네이버로 시작하기"
                onPress={onSignInNaver}
                bgColor="#00ff7f"
                fgColor="#008000"
            />
            <CustomButton
                text="구글로 시작하기"
                onPress={onSignInGoogle}
                bgColor="#b0e0e6"
                fgColor="#4169e1"
            />
            <CustomButton
                text="카카오로 시작하기"
                onPress={onSignInKakao}
                bgColor="#ffd700"
                fgColor="#8b4513"
            />
        </>
    );
};

export default SocialSignInButtons;