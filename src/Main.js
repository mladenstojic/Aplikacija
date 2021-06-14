import React from 'react';
import './App.css';

const Main = ({handleLogout}) =>{
    return(
        <section>
            <nav>
                <h2>Dobro dosli</h2>
                <button onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}
export default Main;