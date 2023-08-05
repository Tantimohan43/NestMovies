import {createContext,useState} from 'react';//context Api as a global;

export const AccountContext=createContext();



const AccountProvider=({children})=>{   
    const[account,setaccount]=useState();
 
    

     return(
        <>
            <AccountContext.Provider value={{account,setaccount
           }}>
            {children}
            </AccountContext.Provider>
        </>
    )
}
export default AccountProvider;
