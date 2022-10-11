import React from "react";
import { View, Text, Pressable, TextInput} from "react-native";
import styles from '../../components/styles';
import { useNavigation } from '@react-navigation/native';

const PayScreen = () => {
    const navigation = useNavigation();

    const CardPressed = () => {
        navigation.navigate("Check");
    };

    const PhonePressed = () => {
        navigation.navigate("Check");
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
                    결제
            </Text>

            {/* {Row 1: Sum} */}
            <View style={{
                marginHorizontal: 10,
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 20,
                margin : 40,
                marginLeft : 20,
                marginRight : 20
                }}>
                {/* {Title} */}
                <Text style={{
                    fontWeight:'bold',
                    color:'black',
                    fontSize: 16,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderBottomWidth: 1
                    }}>
                        {'  '}처리폐기물 총 개수
                </Text>
                {/* info */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,

                }}>
                    <View>
                        <Text style={{fontWeight:'bold', color: 'black', fontSize: 16}}>개수</Text>
                    </View>
                    {/* value */}
                    <View>
                        <Text style={{fontWeight:'bold', color: 'grey', fontSize: 16}}>1</Text>
                    </View>
                </View>
            </View>
            {/* {Row 2: Cost} */}
            <View style={{
                marginHorizontal: 10,
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 20,
                marginRight : 20,
                marginLeft : 20,
                }}>
                {/* {Title} */}
                <Text style={{
                    fontWeight:'bold',
                    color:'black',
                    fontSize: 16,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderBottomWidth: 1
                    }}>
                        {'  '}총 처리 비용
                </Text>
                {/* address */}
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 20,
                }}>
                    <View>
                        <Text style={{fontWeight:'bold', color: 'black', fontSize: 16}}>처리 비용</Text>
                        <Text style={{fontWeight:'bold', color: 'black', fontSize: 16}}>할인 비용</Text>
                    </View>
                    {/* value */}
                    <View>
                        <Text style={{fontWeight:'bold', color: 'grey', fontSize: 16}}>3000원</Text>
                        <Text style={{fontWeight:'bold', color: 'grey', fontSize: 16}}>-1000원</Text>
                    </View>
                </View>
            </View>
					  {/* {Row 3: SelectTime} */}
            <View style={{
                marginHorizontal: 10,
                borderWidth: 2,
                borderRadius: 20,
                marginBottom: 20,
                marginLeft : 20,
                marginRight : 20

                }}>
                {/* {Title} */}
                <Text style={{
                    fontWeight:'bold',
                    color:'black',
                    fontSize: 18,
                    marginTop: 10,
                    marginHorizontal: 10,
                    borderBottomWidth: 1
                    }}>
                        {'  '}결제방법
                </Text>
                {/* info */}
                <View style={{
                    // flexDirection: 'row',
                    padding: 10,
                }}>
                    <View style={{flexDirection:'row'}}>
				        <Pressable
				            style={styles.button1}
						    onPress={CardPressed}
						>
						    <Text style={styles.buttonText}> 카드 결제</Text>
						</Pressable>

						<Pressable
						    style={styles.button2}
						    onPress={PhonePressed}
						>
						    <Text style={styles.buttonText}> 휴대폰 결제</Text>
						</Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default PayScreen;