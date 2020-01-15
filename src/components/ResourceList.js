import React, { useState, useEffect} from 'react';
import axios from 'axios'

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

const ResourceList = ({ resource }) => {
    // const [resources, setResources] = useState([])

    // const fetchResource = async () => {
    //     const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

    //     setResources(response.data)
    // }

    // useEffect(() => {
    //     fetchResource(resource)
    // }, [resource])
    // second array "resouce" is from App.js "props.resouce || { resource }"
    // No array means called only once
    // But if you want to use as componentDidUpdate function, you want to invoke only once. Put empty array [] otherwise it called forever(loop)
    
    // No.2 Another way
    // useEffect(
    //     () => {
    //         (async resource => {
    //             const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)
        
    //             setResources(response.data)
    //         })(resource); // invoking right way - same as (()=> somecode)()
    // }, [resource])


    const resources = useResources(resource)

        return (
            <div>
                <ul>{resources.map(record => (
                    <li key={record.id}>{record.title}</li>
                ))}
                </ul>
            </div>
        )
    
}
export default ResourceList;