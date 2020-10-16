import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/searchBar';
import useResult from '../hooks/useResults';
import ResultList from '../components/resultList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, result, errorMessage] = useResult();


    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We found {result.length} Search Results. </Text>

            <ResultList title="Cost Effactive" />
            <ResultList title="Bit Pricier" />
            <ResultList title="Big Spender" />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;