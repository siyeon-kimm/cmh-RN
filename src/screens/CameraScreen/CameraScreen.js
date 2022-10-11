import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../../components/CustomButton';
import { useNavigation } from '@react-navigation/native';

const CameraScreen = () => {
    const navigation = useNavigation();

    const InfoPressed = () => {
        navigation.navigate("Info");
    };
    
    return (
        <View style={styles.root}>
            <Text style={{
                fontSize: 24, 
                marginTop: 200,
                marginBottom: 300
                }}>
                    폐기물 사진 촬영중 화면입니다.
            </Text>
            
            <CustomButton
                text="완료 되었나요?" onPress={InfoPressed} />
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }
});

export default CameraScreen;