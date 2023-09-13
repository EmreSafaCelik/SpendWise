import React, { useState, useEffect } from "react";
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native'

const Home = ({navigation, route}) => {

    const [expenses, setExpenses] = useState([])

    useEffect(() => {
        console.log(route.params);
        setExpenses([...expenses, route.params])
    }, [route.params])

    return (
        <View style={styles.container}>
            <View style={styles.summary}>
                <View style={styles.summaryColumnContainer}>
                    <Text style={styles.summaryTxt}>{'BU AY:\n0'} TL</Text>
                    <Text style={styles.summaryTxt}>{'BU HAFTA:\n0'} TL</Text>
                    <Text style={styles.summaryTxt}>{'BUGÜN:\n0'} TL</Text>
                </View>

                <View style={styles.summaryColumnContainer}>
                    <Text style={styles.summaryTxt}>{'GEÇEN AY:\n0'} TL</Text>
                    <Text style={styles.summaryTxt}>{'GEÇEN HAFTA:\n0'} TL</Text>
                    <Text style={styles.summaryTxt}>{'DÜN:\n0'} TL</Text>
                </View>
            </View>

            <FlatList
                style={styles.expenses}
                data={expenses}
                renderItem={element => {

                    return (
                        <View style={styles.expenseRow}>
                            <Text style={styles.expenseTxt}>{element.item.category}</Text>
                            <Text style={styles.expenseTxt}>{element.item.amount}</Text>
                            <Text style={styles.expenseTxt}>{element.item.date}</Text>
                        </View>
                    )
                }}
            />

            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('newExpense')
                }}
                style={styles.btn}
            >
                <Text style={styles.btnTxt}>Yeni Harcama</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 40,
        backgroundColor: 'white'
    }, 
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 240,
        width: '100%',
        backgroundColor: '#46ABC5',
        borderBottomRightRadius: 90,
    },
    summaryColumnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-evenly'
    },
    summaryTxt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '400'
    },

    expenses: {
        width: '100%',
        marginVertical: 40,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        backgroundColor: 'white'
    },

    expenseRow: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 8,
    },

    expenseTxt: {
        flex: 1,
        textAlign: 'center',
        color: 'black'
    },

    btn: {
        height: 72,
        width: 280,
        backgroundColor: '#46ABC5',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },

    btnTxt: {
        color: 'white',
        fontSize: 24,
        fontWeight: '500',
    },

})

export default Home;