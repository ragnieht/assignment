import React from 'react'
import { Text,View,StyleSheet,ScrollView } from 'react-native'

export default function PostComponent({data}) {    
    const posts = data    
    return (
        <View style={styles.container}>
            <ScrollView>
                {posts?.map((post) => (
                    <View key={post.key}>
                        <Text>
                            {`${post.key}: ${post.body}`}
                        </Text>
                        <Text style={styles.bolded}>
                            {`- ${post.randomInt}`}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        marginTop: 30
    },
    bolded: {
        fontWeight: 'bold'
    }
})
