import { useState, useEffect, useRef } from 'react';
import useInterval from './useInterval';

const useFetch = (sectionQuery, sortQuery, sizeQuery, delay) => {
    const [queryItems, setQueryItems] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [queryStat, setQueryStat] = useState([]);
    const prevStatQuery = useRef(queryStat);

    const isNewData = () => {
        fetch(`http://35.203.53.106:8607/${sectionQuery}/_search?sort=${sortQuery}&size=1`)
            .then(response => response.json())
            .then(json => {
                if (prevStatQuery.current !== json.hits.hits[0]._id) {
                    setQueryStat(json.hits.hits[0]._id);
                }
            })
            .catch(error => {
                console.log('Error:', error);
            })
    }

    const requestData = () => {
        setTimeout(() => {
            setIsPending(true);
            fetch(`http://35.203.53.106:8607/${sectionQuery}/_search?sort=${sortQuery}&size=${sizeQuery}`)
                .then(response => response.json())
                .then(json => {
                    setQueryItems(json.hits.hits);
                    setIsPending(false);
                })
                .catch(error => {
                    console.log('Error:', error);
                    setIsPending(false);
                })
        }, 1000)
    }

    useInterval(isNewData, delay);

    useEffect(() => {
        prevStatQuery.current = queryStat;
        requestData();
    }, [queryStat])

    return { queryItems, isPending };
}

export default useFetch;
