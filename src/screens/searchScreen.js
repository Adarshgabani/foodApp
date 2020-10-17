import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/searchBar';
import useResult from '../hooks/useResults';
import ResultList from '../components/resultList';


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchAPI, results, errorMessage] = useResult();

    const filterResultByPrice = (price) => {
        // price === '$' || '$$' || '$$$'

        return results.filter(result => {
            return result.price === price;
        });
    };


    return (
        <>
            <SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchAPI(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultList results={filterResultByPrice('$')} title="Cost Effactive" />
                <ResultList results={filterResultByPrice('$$')} title="Bit Pricier" />
                <ResultList results={filterResultByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({});

export default SearchScreen;