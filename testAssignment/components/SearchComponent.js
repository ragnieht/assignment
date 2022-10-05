import React from 'react'
import { Text,TextInput,StyleSheet,View, Dimensions,TouchableOpacity } from 'react-native'

export default function SearchComponent({ handleChange, onPress }) {    
    return (  
        <View>
            <TextInput
                style={styles.searchBox}
                placeholder='Search a text'
                onChangeText={handleChange}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            >
                <Text>
                    Re-render
                </Text>
            </TouchableOpacity>
        </View>
  )
}

const win = Dimensions.get('window')
const styles = StyleSheet.create({
    searchBox: {
        marginLeft: 10,
        marginTop: 5,
        borderWidth: 1,
        maxWidth:'95%',
        width: win.width,
        padding: 10
    },
    button: {
        alignItems: 'center',
        marginLeft: 10,
        marginTop: 5,
        width: 100,
        padding: 10,
        backgroundColor: '#DDDDDD'
    }
})