import React, {useState} from 'react';
import {View, Text, TextInput, Pressable, Image, useWindowDimensions} from 'react-native';
import styles from '../../components/styles.js';
import Logo from '../../../assets/images/project_logo.png';
import { useNavigation } from '@react-navigation/native';

const CheckScreen = () => {
    const {height} = useWindowDimensions();

    const navigation = useNavigation();

    const onHomePressed = () => {
        navigation.navigate('Home');
    };

    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <Text style={{
                    marginTop: 20,
                    marginBottom: 30,
                    marginLeft: 130,
                    fontWeight: 'bold', 
                    fontSize: 30,
                    color: 'black',
                    alignSelf: 'center'
                    }}>
                        신청 완료!
                </Text>

                <Pressable
                    onPress={onHomePressed}
                    style={{
                        width: '15%',
                        marginTop: 30,
                        marginLeft: 50,
                        alignItems: 'center'
                    }}>
                        <Text style={{fontWeight:'bold', color: '#3B71F3', fontSize: 16}}>홈으로</Text>
                </Pressable>
            </View>

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
                    padding: 20,
                }}>
                    <View>
                        <Text style={styles.factor}>이름</Text>
                        <Text style={styles.factor}>휴대폰 번호</Text>
                    </View>
                    {/* value */}
                    <View>
                        <Text style={styles.factor}>김지민</Text>
                        <Text style={styles.factor}>010-xx-xx</Text>
                    </View>
                </View>
            </View>

            {/* {Row 2: Detail} */}
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
                        {'  '}상세 내용
                </Text>
                {/* info */}
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    padding: 20,
                }}>
                    <View>
                        <Text style={styles.factor}>폐기물 종류</Text>
                        <Text style={styles.factor}>배출지 주소</Text>
                        <Text style={styles.factor}>처리 일자</Text>
                        <Text style={styles.factor}>처리 중량</Text>
                        <Text style={styles.factor}>처리 가격</Text>
                    </View>
                    {/* value */}
                    <View>
                        <Text style={styles.factor}>소파</Text>
                        <Text style={styles.factor}>서울 ***</Text>
                        <Text style={styles.factor}>2022-10-27</Text>
                        <Text style={styles.factor}>100kg</Text>
                        <Text style={styles.factor}>2000원</Text>
                    </View>
                </View>
            </View>

            {/* {Row 1: Identity} */}
            <View style={{
                marginHorizontal: 10,
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 35
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
                        {'  '}진행 상태
                </Text>
                {/* info */}
                <View style={{
                    flexDirection: 'row', 
                    justifyContent: 'space-between', 
                    padding: 20,
                }}>
                    <View>
                        <Text style={styles.factor}>{''}</Text>
                    </View>
                    {/* value */}
                    <View>
                        <Text style={styles.factor}>접수 완료</Text>
                    </View>
                </View>
            </View>

            <View>
                <Image 
                    source={Logo} 
                    style={[styles.logo, {height: height * 0.15}]} 
                    resizeMode="contain" 
                />
            </View>

        </View>
        )
}

export default CheckScreen;