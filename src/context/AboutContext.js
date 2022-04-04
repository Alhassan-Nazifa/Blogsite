import {createContext} from 'react'


export const AboutContext = createContext();

function AboutContextProvider({children}){
const about= {
    name:"Alhassan Nazifa",
    bio:"I am a passionate young lady who desires community growth.",
    hobbies:["Dancing", "Music","Eating"]
}



    return(
        <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
    )
}


export default AboutContextProvider