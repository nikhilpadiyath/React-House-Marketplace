import { useEffect, useState, useRef } from 'react'
import { getAuth, onAuthStateChanged} from 'firebase/auth'


export const useAuthStatus = () => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)
    const isMount = useRef(true)

    useEffect(()=> {
        if(isMount){
        const auth= getAuth()
        onAuthStateChanged(auth, (user) => {
            if(user){
                setLoggedIn(true)
            }
            setCheckingStatus(false)
        })
    }
    return () => {
    isMount.current = false
    }
},[isMount]
    )
  return {loggedIn, checkingStatus}
}

