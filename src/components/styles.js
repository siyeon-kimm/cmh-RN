import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize : 100,
        color : 'black',
        alignItems: 'center',
        alignSelf: 'center',
        padding: 20
    },

    button: {
        width: '95%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#3B71F3',
        borderColor: '#3B71F3'
    },
    
    ifactor: {
        fontWeight:'bold', 
        color: 'black', 
        fontSize: 16,
        marginBottom: 26
    },

    factor: {
        fontWeight:'bold', 
        color: 'black', 
        fontSize: 16,
    },

    buttonText: {
        fontSize : 16,
        fontWeight : 'bold',
        color : 'white',
    },

    button1: {
        width: '40%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#3B71F3',
        borderColor: '#3B71F3',
        marginLeft : 20 ,
        marginRight : 20
    },

    button2: {
        width: '40%',
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#3B71F3',
        borderColor: '#3B71F3',
        marginLeft : 10,
        marginRight : 20
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        alignSelf: 'center'
    }
});

export default styles;