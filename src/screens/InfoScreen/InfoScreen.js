import React from "react";
import { View, Text, Pressable, TextInput} from "react-native";
import styles from '../../components/styles';
import { useNavigation } from '@react-navigation/native';

const InfoScreen = () => {
    const navigation = useNavigation();

    const ApplicationPressed = () => {
        navigation.navigate("Application");
    };
    
    return (
        <View>
            <Text style={{
                marginTop: 20,
                marginBottom: 10,
                marginLeft: 30,
                fontWeight: 'bold', 
                fontSize: 30,
                color: 'black',
                }}>
                    폐기물 정보
            </Text>

            <Text style={styles.title}>폐기물 사진</Text>

            {/* {Row 1: Identity} */}
            <View style={{
                marginHorizontal: 10,
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 20,
                marginVertical: 10
                }}>
                {/* {Title} */}
                <Text style={{
                    fontWeight:'bold',
                    color:'black',
                    fontSize: 16,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderBottomWidth: 1,

                    }}>
                        {'  '}정보를 입력해주세요.
                </Text>

                {/* info */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                }}>
                    <View>
                        <Text style={styles.ifactor}>카테고리</Text>
                        <Text style={styles.ifactor}>상세품목</Text>
                        <Text style={styles.ifactor}>사이즈</Text>
                    </View>
                    {/* value */}
                    <View>
                        <Text style={{
                            fontWeight:'bold', 
                            color: '#051C60', 
                            fontSize: 16, 
                            marginBottom: 10
                            }}>
                                소파
                        </Text>
                        <TextInput 
                            placeholder="여기에 입력해주세요" 
                        />
                        <TextInput
                            placeholder="(소, 중, 대) 중 선택"
                        />
                    </View>
                </View>
            </View>

            <Pressable
                style={styles.button}
                onPress={ApplicationPressed}
            >
                <Text style={styles.buttonText}> 처리 신청 </Text>
            </Pressable>


        </View>
    );
};

export default InfoScreen;