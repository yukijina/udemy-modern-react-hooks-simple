import React, { useState, useEffect} from 'react';
import axios from 'axios'

const ResourceList = ({ resource }) => {
    const [resources, setResources] = useState([])

    const fetchResource = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/${resource}`)

        setResources(response.data)
    }

    useEffect(() => {
        fetchResource(resource)
    }, [resource])
    // second argument "resouce" is from App.js "props.resouce || { resource }"

        return (
            <div>
                {resources.length}
            </div>
        )
    
}
export default ResourceList;