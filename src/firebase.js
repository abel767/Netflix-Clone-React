import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import {addDoc, collection, getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";
const firebaseConfig = {
  apiKey: "AIzaSyCaNbdCtCBB1GP9PWp50EOSRtdHk17RwFQ",
  authDomain: "netflix-clone-c8b1b.firebaseapp.com",
  projectId: "netflix-clone-c8b1b",
  storageBucket: "netflix-clone-c8b1b.firebasestorage.app",
  messagingSenderId: "784229413097",
  appId: "1:784229413097:web:f4b995d160ed1207198078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const db = getFirestore(app)

const signup = async(name,email,password)=>{
     try{
      const res =   await createUserWithEmailAndPassword(auth,email, password)
      const user = res.user
      await addDoc(collection(db,'user'), {
        uid: user.uid,
        name,
        authProvider: 'local',
        email,
      })
     } 
     catch(error){
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(' '))
     }
}

const login = async (email,password)=>{
   try{
      await  signInWithEmailAndPassword(auth, email ,password)
   }
   catch(error){
      console.log(error)
      toast.error(error.code.split('/')[1].split('-').join(' '))
   }
}

const logout = ()=>{
    signOut(auth)
}

export {auth,db,login,signup,logout}