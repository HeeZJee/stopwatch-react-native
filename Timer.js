import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Timer = ({ timer: { hr, min, sec, ms } }) => {
    return (

        <View style={styles.container}>

            <View >
                <Text style={styles.timerContainer} >
                    {hr > 9 ? hr : `0${hr}`}
                </Text>
            </View>

            <View>
                <Text style={styles.timerContainer}>
                    {min > 9 ? min : `0${min}`}
                </Text>
            </View>

            <View>
                <Text style={styles.timerContainer}>
                    {sec > 9 ? sec : `0${sec}`}
                </Text>
            </View>

            <View>
                <Text style={styles.timerContainer}>
                    {ms > 9 ? ms : `0${ms}`}
                </Text>
            </View>

        </View>
    )
}


export default Timer

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    timerContainer: {
        padding: 20,
        fontSize: 24,
        marginHorizontal: 5,
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: 'dodgerblue',
        color: 'white',
    }
})
