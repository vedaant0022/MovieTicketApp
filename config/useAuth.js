import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

const useAuth = () => {
    const [user,setuser] = useState(null);

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth, user=>{
            console.log('got user:', user);
            if (user){
                setuser(user)
            }else{
                setuser(null);
            }
        });
        return unsub;
    },[])
  return {user}
}

export default useAuth