import { useState, useContext, createContext} from "react";
import axios from 'axios';

const SearchContext = createContext();

const SearchProvider = (props) => {
    const [auth, setAuth] = useState({
        keyword:"",
        results:[] 
    });


    return(
        <SearchContext.Provider value={[auth, setAuth]}>
            {props.children}
        </SearchContext.Provider>
    )    
}


// CUSTOM HOOK
const useSearch = () => useContext(SearchContext);
 
export {useSearch, SearchProvider}

