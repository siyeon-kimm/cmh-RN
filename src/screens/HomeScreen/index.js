import React from 'react';
import {View, Text, Image, StyleSheet, useWindowDimensions, Pressable} from 'react-native';
import Logo from '../../../assets/images/project_logo.png';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const onCameraPressed = () => {
        navigation.navigate('Camera');
    };

    return (
        <View>
            <View>
                <Text style={{fontSize: 24, alignSelf: 'center', marginTop: 100}}>세상의 모든 폐기물을</Text>
                <Text style={{fontSize: 24, alignSelf: 'center'}}>담당하는,</Text>

                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.3}]} 
                    resizeMode="contain" 
                />
            </View>

            <View style={{flexDirection: 'row', padding: 20}}>
                <Pressable
                    style={[styles.square]}>
                        <Text style={styles.text}>마이 페이지</Text>
                </Pressable>

                <Pressable
                    onPress={onCameraPressed}
                    style={[styles.square]}>
                        <Text style={styles.text}>폐기물 촬영</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        marginTop: 40,
        alignSelf: 'center',
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
    square: {
        width: '40%',
        padding: 15,
        marginVertical: 40,
        marginHorizontal: 18,
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#3B71F3'
    },
    text: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 15,
        
    },
});
export default HomeScreen;