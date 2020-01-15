//this file is lowercase - not React component

import {useState, useEffect} from 'react';
import axios from 'axios';


// N0.3 another way - reusable
const useResources = (resource) => {
    const [resources, setResources] = useState([])

    useEffect(
        () => {
            (async resource => {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        
                setResources(response.data)
            })(resource); // invoking right way - same as (()=> somecode)()
    }, [resource])

    // return array
    return resources
}

export default useResources;