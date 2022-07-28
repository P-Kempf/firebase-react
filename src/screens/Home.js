import React from 'react'
import firebaseApp from '../firebase/Credenciales'
import {getAuth, signOut} from 'firebase/auth'
import Usuario from '../componentes/Usuario';
import Administrador from '../componentes/Administrador';
const auth = getAuth(firebaseApp);

function Home({user}) {
  return (
    <div>Home
      <button onClick={()=> signOut(auth)}> Cerrar Sesión</button>
      {user.rol=== "admin" ? <Administrador/> : <Usuario/>}
    </div>
  )
}

export default Home