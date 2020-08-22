import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const Buttons = ({ start, status, pause, reset, resume }) => {
    return (
        <View>
            {
                status === 0
                    ? <Button title={'start'} onPress={start} />
                    : null
            }

            {
                (status === 1)
                    ? <View style={styles.btnContainer}>
                        <View style={styles.btn}>
                            <Button title={'Pause'} onPress={pause} />
                        </View >
                        <View style={styles.btn}>
                            <Button title={'Reset'} onPress={reset} />
                        </View>
                    </View>
                    : null
            }

            {
                (status === 2)
                    ? <View style={styles.btnContainer}>
                        <View style={styles.btn}>
                            <Button title={'Resume'} onPress={resume} />
                        </View>
                        <View style={styles.btn}>
                            <Button title={'Reset'} onPress={reset} />
                        </View>
                    </View>
                    : null
            }

        </View>
    )
}

export default Buttons

const styles = StyleSheet.create({
    btnContainer: {
        flexDirection: 'row',
    },
    btn: {
        marginHorizontal: 10,
    }
})
