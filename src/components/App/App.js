import styles from "./styles/App.module.css"
import React from "react";
import { BrowserRouter, Route } from "react-router-dom"

import Registration from "../Registration/Registration";
import Home from "../Home/Home";
import Account from "../Account/Account";


class App extends React.Component{
    render(){
        return(
            <div className={styles["main-block"]}>
               <header className={styles.header}>
                    <div className={styles["web-logo"]}>
                        <img src={require('./images/wap.png')} alt="logo" className={styles.logo}/>
                        <span className={styles["web-title"]}>ZIMBABBWEB</span>
                    </div>
               </header>
               <BrowserRouter>
                    <div>
                        <Route path="/" exact component={Registration}/>
                        <Route path="/home" component={Home}/>
                    </div>
               </BrowserRouter>
            </div>
        )
    }
}

export default App;