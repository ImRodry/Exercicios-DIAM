import { createContext, useContext, useState } from 'react'

const Context = createContext()

export function Provider({ children }) {
    const [allSubmissions, setAllSubmissions] = useState([])

    return (
        <Context.Provider value={{ allSubmissions, setAllSubmissions }}>
            {children}
        </Context.Provider>
    )
}

export function useSubmissions() {
    return useContext(Context)
}
