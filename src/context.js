import React, { useContext, useEffect, useState } from "react"

// context(warehouse)

// Provider //delevery boy

// consumer / (useContext())

const API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;


const AppContext = React.createContext()

//we need to create a provider fun

const AppProvider = ({ children }) => {

    const [movies, setMovies] = useState([])
    const [isLoding, setisLoding] = useState(true)
    const [isError, setError] = useState({ show: "false", msg: "" })

    const [query, setQuery] = useState("Titanic")

    const getMovies = async (url) => {
        setisLoding(true)

        try {
            const res = await fetch(url)
            const data = await res.json()
            console.log(data)


            if (data.Response === "True") {
                setMovies(data.Search)
                setisLoding(false)
                setError({
                    show: false,
                    msg:""
                })
            } else {
                setError({
                    show: true,
                    msg:data.Error,
                })
            }

        } catch (error) {
           
            console.log(error)
        }

    }

    useEffect(() => {
     let timeOut= setTimeout(()=>{
            getMovies(`${API_URL}&s=${query}`);
        },1000)
        return ()=>clearTimeout(timeOut)
       
    }, [query])



    return (
        <AppContext.Provider value={{ isLoding, isError, movies, query, setQuery }}>
            {children}
        </AppContext.Provider>


    )
}


//global custome hooks

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppContext, AppProvider, useGlobalContext }