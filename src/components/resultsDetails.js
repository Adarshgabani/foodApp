import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';


const ResultsDetails = ({ result }) => {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name} </Text>
            <Text style={styles.reviewStyle} >{result.rating} Star, {result.review_count} Reviews </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15,
        marginBottom: 15
    },
    imageStyle: {
        height: 150,
        width: 250,
        borderRadius: 5,

    },
    nameStyle: {
        fontWeight: 'bold'
    },
    reviewStyle: {
        color: 'gray'
    },
});

export default ResultsDetails;