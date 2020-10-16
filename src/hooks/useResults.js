import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [result, setResult] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchAPI = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResult(response.data.businesses);
        } catch (error) {
            setErrorMessage('!!Something Went Wrong!!');
        }
    };

    //useEffect is used for call searchAPI for only one time when Screen is render
    //[] empty array tells useEffect to call arrow fuction only one time(when SearchScreen render first time)
    useEffect(() => {
        searchAPI('Pasta');
    }, []);



    return [searchAPI, result, errorMessage];

};