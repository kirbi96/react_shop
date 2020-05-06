import React, {createContext, useState} from 'react'

export const CardContext = createContext([{}, () => {}])

export const CardProvider = ({children}) => {
    const [state, setState] = useState([
        ])

    return (
        <CardContext.Provider value={[state, setState]}>
            {children}
        </CardContext.Provider>
    )
}
