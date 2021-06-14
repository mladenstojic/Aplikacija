import React from 'react';
import { githubProvider, googleProvider } from './config/authMethods';
import socialMediaAuth from './service/auth';

const handleOnClick = async(provider) =>{
    const res = await socialMediaAuth(provider);
    console.log(res);
  };


const Login = (props) => {
    
    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount, 
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    // njegos al ne radi...
   return (
        <div className="base-container">
          <div className="login-page">
          <div className="form">
            <div className="login-form">
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Mejl"/>
                <p className="errorMsg">{emailError}</p>
                <input type="password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Šifra"/>
                <p className="errorMsg">{passwordError}</p>

              <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Uloguj se</button>  
                        <div class="helper">Prijavite se preko drugih naloga?</div>
                        <button onClick={()=>handleOnClick(githubProvider)}>Github</button>
                        <button onClick={()=>handleOnClick(googleProvider)}>Google</button>
                        <p>Niste registrovani ? <span onClick={() => setHasAccount(!hasAccount)}>Kreirajte nalog</span></p>

                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Registruj se</button>
                        <p>Već imate nalog ? <span onClick={() => setHasAccount(!hasAccount)}>Prijavite se</span></p>
                        </>

                    )}
                </div>

              

            </div>
          </div>
         </div>
        </div>
          
        )

       /*placeholder="Korisničko ime"
        placeholder="Šifra"
        <button>Ovde ce biti google dugme</button>
                        <button>Ovde ce biti github dugme</button>*/
    /*return(
        <section className="login">
            <div className="loginContainer">   
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Mejl"/>
                <p className="errorMsg">{emailError}</p>
                <input type="password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Šifra"/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <div class="helper">Prijavite se preko drugih naloga?</div>
                        <button onClick={()=>handleOnClick(githubProvider)}>Github</button>
                        <button onClick={()=>handleOnClick(googleProvider)}>Google</button>
                        <p>Niste registrovani ? <span onClick={() => setHasAccount(!hasAccount)}>Kreirajte nalog</span></p>
                        </>
                    ):(
                        <>
                        <button onClick={handleSignup}>Sign up</button>
                        <p>Već imate nalog ? <span onClick={() => setHasAccount(!hasAccount)}>Prijavite se</span></p>
                        </>

                    )}
                </div>
            </div>
        </section>
    )*/
}

export default Login;