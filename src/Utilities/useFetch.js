import { useState, useEffect, useRef } from 'react';


function useInterval(callback, delay) {
    const savedCallback = useRef(null);
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

const useFetch = (sectionQuery, sortQuery, sizeQuery, delay) => {
    const [queryItems, setQueryItems] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [queryStat, setQueryStat] = useState([]);
    const prevStatQuery = useRef(queryStat);

    const isNewData = () => {
        fetch(`http://35.203.53.106:8607/${sectionQuery}/_stats`)
            .then(response => response.json())
            .then(json => {
                console.log(`1queryStat for ${sectionQuery} is ${queryStat}`);
                if (prevStatQuery.current != json._all.primaries.docs.count) {
                    setQueryStat(json._all.primaries.docs.count);
                    console.log(`2prevStatQuery for ${sectionQuery} is ${prevStatQuery.current}`);
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
        requestData();
    }, [])

    useEffect(() => {
        prevStatQuery.current = queryStat;
        requestData();
    }, [queryStat])



    return { queryItems, isPending };
}

export default useFetch;

