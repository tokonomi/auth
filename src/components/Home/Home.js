import styles from "./styles/Home.module.css"

import React from "react";
import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav'
import '@trendmicro/react-sidenav/dist/react-sidenav.css'
import { BrowserRouter, Link, Route, Switch } from "react-router-dom"

import Account from "../Account/Account";

function Home() {
    const showHome = () =>{
        return(
            <div className={styles.title}>
                Home
            </div>
        )
    }
    return (
        <div>
        <BrowserRouter>
            <SideNav className={styles.sideNav}>
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected = "home">
                    <NavItem eventKey = "home">
                        <NavIcon><i className="fa fa-fw fa-home" style={{fontSize: '1.5em'}}/></NavIcon>
                        <NavText><Link to='/home'>Home</Link></NavText>
                    </NavItem>
                    <NavItem eventKey = "account">
                        <NavIcon><i className="fa fa-fw fa-user" style={{fontSize: '1.5em'}}/></NavIcon>
                        <NavText><Link to='/home/account'>Account</Link></NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
            
                <Switch>
                    <Route path="/home" exact component={showHome}/>
                    <Route path="/home/account" component={Account}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default Home;