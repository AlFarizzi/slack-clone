import { useReducer, createContext } from 'react'

const initialState = {
    name:null,
    picture : null
}

function reducer(state, action) {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state, name: action.data.name, picture : action.data.picture
            }
        default:
            break;
    }
}
export const DataContainer = createContext()
export const DataLayer = ({nama, children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const setData = (data) => {
        dispatch({
            type: "SET_DATA",
            data : data
        })
    }
    const authState = {setData,state}
    return(
        <DataContainer.Provider value={authState}>
            {children}
        </DataContainer.Provider>
    )
}
