import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetails from './resultsDetails';
import { withNavigation } from 'react-navigation';

const ResultList = ({ title, results, navigation }) => {
    if (!results.length) {
        return null
    }
    return (
        <View>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate('ResultShow', { id: item.id })}>

                            <ResultsDetails result={item} />
                        </TouchableOpacity>
                    );
                }}
            />

        </View>
    );

};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15
    }
});

export default withNavigation(ResultList);