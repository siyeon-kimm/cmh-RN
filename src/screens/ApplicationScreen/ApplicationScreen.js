import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, ScrollView} from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from '../../components/styles.js';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../components/CustomInput/CustomInput.js';

const ApplicationScreen = () => {

    const navigation = useNavigation();

    const PayPressed = () => {
        navigation.navigate("Pay");
    }
    
    const [checked,setChecked] = React.useState('first');

    return (
        <ScrollView>
        <View>
            <Text style={{
                marginTop: 20,
                marginBottom: 30,
                marginLeft: 30,
                fontWeight: 'bold', 
                fontSize: 30,
                color: 'black',
                }}>
                    처리 신청
            </Text>

            {/* {Row 1: Identity} */}
            <View style={{
                marginHorizontal: 10,
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 20
                }}>
                {/* {Title} */}
                <Text style={{
                    fontWeight:'bold', 
                    color:'black',
                    fontSize: 15,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderBottomWidth: 1
                    }}>
                        {'  '}예약자 정보
                </Text>
                {/* info */}
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    padding: 7,
                }}>
                    <View style={{padding:10}}>
                        <Text style={{
                            fontWeight:'bold',
                            color: 'black', 
                            fontSize: 16,
                            marginVertical: 7}}>
                                이름
                        </Text>
                        <Text style={{
                            fontWeight:'bold',
                            color: 'black',
                            fontSize: 16,
                            marginTop: 18
                            }}>
                                휴대폰 번호
                        </Text>
                    </View>
                    {/* value */}
                    <View>
                        <TextInput 
                            placeholder="이름을 입력해주세요" 
                        />
                        <TextInput 
                            placeholder="번호를 입력해주세요" 
                        />
                    </View>
                </View>
            </View>

            {/* {Row 2: Address} */}
            <View style={{
                marginHorizontal: 10,
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 20
                }}>
                {/* {Title} */}
                <Text style={{
                    fontWeight:'bold', 
                    color:'black',
                    fontSize: 15,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderBottomWidth: 1
                    }}>
                        {'  '}주소 정보
                </Text>
                {/* address */}
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    padding: 7,
                }}>
                    <View>
                        <Text style={{
                            fontWeight:'bold', 
                            color: 'black', 
                            fontSize: 16,
                            marginLeft: 16,
                            marginTop:13
                            }}>
                                주소
                        </Text>
                    </View>
                    {/* value */}
                    <View>
                        <TextInput
                            placeholder='주소를 입력해주세요' 
                        />
                    </View>
                </View>
            </View>

            {/* {Row 3: SelectTime} */}
            <View style={{
                marginHorizontal: 10,
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 20
                }}>
                {/* {Title} */}
                <Text style={{
                    fontWeight:'bold', 
                    color:'black',
                    fontSize: 15,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderBottomWidth: 1
                    }}>
                        {'  '}수거 시간 선택
                </Text>
                {/* info */}
                <View style={{
                    // flexDirection: 'row', 
                    padding: 20,
                }}>
                    <View style={{flexDirection:'row'}}>
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                            color="#3B71F3"
                            flexDirection='row'
                        />
                        <Text style={{
                            fontWeight:'bold', 
                            color: 'black', 
                            marginTop: 5,
                            fontSize: 17
                            }}>금일 밤 22:00~06:00</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                            color="#3B71F3"
                        />
                        <Text style={{
                            fontWeight:'bold', 
                            color: 'black', 
                            marginTop: 7,
                            fontSize: 17
                            }}>내일 낮 14:00~18:00</Text>
                    </View>
                </View>
            </View>

            {/* {Row 4: Comment} */}
            <View style={{
                marginHorizontal: 10,
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 25
                }}>
                {/* {Title} */}
                <Text style={{
                    fontWeight:'bold', 
                    color:'black',
                    fontSize: 15,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderBottomWidth: 1
                    }}>
                        {'  '}남기실 말
                </Text>
                {/* info */}
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    padding: 1,
                }}>
                    <TextInput />
                </View>
            </View>
            <Pressable
                onPress={PayPressed}
                style={styles.button}
            >
                <Text style={{fontWeight:'bold', color: 'white'}}>결제하기</Text>
            </Pressable>
        </View>
        </ScrollView>
    );
};

export default ApplicationScreen;