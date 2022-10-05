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
        flex: 1,
        marginHorizontal: 10,
        marginVertical: 30
    },
    bolded: {
        fontWeight: 'bold'
    }
})
