
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import firebaseApp from '../firebase/Credenciales';
import {getFirestore, doc, getDoc, setDoc} from "firebase/firestore"
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp)
function Login() {

    const [isRegistrado, setisRegistrado] = useState(false);
    async function registrarUsuario(email, contraseña, rol) {
        const infoUsuario = await createUserWithEmailAndPassword(auth, email, contraseña).then((usuarioFirebase) => {
            return usuarioFirebase
        })
        console.log(infoUsuario.user.uid)
        const docuRef = await doc(firestore, `/usuarios/${infoUsuario.user.uid}`)
        setDoc(docuRef,{correo:email,rol:rol});
    }
    function submitHandler(e) {
        e.preventDefault();
        const email = e.target.elements.email.value
        const contraseña = e.target.elements.contraseña.value
        const rol = e.target.elements.rol.value
        console.log("submit", email, contraseña, rol)

        if (isRegistrado) {
            registrarUsuario(email, contraseña, rol);
        }
        else {
          signInWithEmailAndPassword(auth,email,contraseña)  
        }
    }
    return (
        <div>
            <h1>{isRegistrado ? "Regístrate" : "Inicia Sesión"}</h1>
            <form onSubmit={submitHandler}>
                <label >
                    Coreo Electronico:
                    <input type="email" id='email' />
                </label>
                <label >
                    contraseña:
                    <input type="password" id='contraseña' />
                </label>
                <label>
                    Rol:
                    <select id='rol'>
                        <option value="admin">Administrador</option>
                        <option value="user">Usuario</option>
                    </select>
                    <input type="submit" value={isRegistrado ? "resgistrar" : "Iniciar Sesión"} />
                </label>
            </form>
            <button onClick={() => setisRegistrado(!isRegistrado)}>
                {isRegistrado ? "Ya tengo una cuenta" : "Quiero Registrarme"}
            </button>

        </div>
    )
}

export default Login