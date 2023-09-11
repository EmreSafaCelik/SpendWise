import React, { useState } from 'react';
import {
    View,
    TextInput,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'

import axios from 'axios'

import Logo from '../assets/icons/Logo';
import UsernameIcon from '../assets/icons/Username';
import PasswordIcon from '../assets/icons/Password';

const Login = () => {

    return (
        <View style={styles.container} >
            <View style={styles.upperContainer}>
                <Logo/>
                <Text style={styles.titleTxt} >SpendWise</Text>
            </View>

            <View>
                <View style={styles.singularInputContainer}>
                    <UsernameIcon/>
                    <TextInput
                        style={styles.input}
                        placeholder='username'
                    />
                </View>

                <View style={styles.singularInputContainer}>
                    <PasswordIcon/>
                    <TextInput
                        style={styles.input}
                        placeholder='password'
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnTxt}>Giriş Yap</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 40
    },

    upperContainer: {
        alignItems: 'center',
    },

    titleTxt: {
        fontWeight: 'bold',
        fontSize: 48,
        color: 'black'
    },

    singularInputContainer: {
        borderRadius: 12,
        borderWidth: 1,
        height: 65,
        width: 320,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 16,
        marginVertical: 12,
    },
    
    input: {
        flex: 1,
        fontSize: 24,
        marginLeft: 8,
    },

    btn: {
        backgroundColor: '#46ABC5',
        width: 280,
        height: 72,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },

    btnTxt: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500'
    }


})

export default Login