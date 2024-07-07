import { useEffect, useState } from "react"

// We are declaring a custom hook that will take particular URL
export const useFetch = (url) => {

    // This hook will maintain 3 states
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading,setLoading] = useState(false)

    // When there is a change on the url variable 
    // I will call the passed url
    // fetch the data..

    useEffect(()=>{

        // Defining an inner function to call the API (using fetch)
        const fetchData = async () => {
            setLoading(true) // Indicate that we are loading the API call
            try
            {
                const response = await fetch(url)
                const jsonData = await response.json()
               
                setData(jsonData)

            } catch (err){
                
                setError(true)
            }
            setLoading(false)
        }

        // Executing the inner function when there is change of url in the hook
        fetchData()


    }, [url])


    // We return to the component the following state
    return {data, error, loading}



}