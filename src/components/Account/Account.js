import styles from './styles/style.css'

import React from "react";
import { connect } from 'react-redux';

class Account extends React.Component{
    render(){
        return(
            <div className='account-info'>
                <div className='info-inner'>
                    <div>Пользователь: {this.props.profileData.userName}</div>
                    <div>Номер: +994 {this.props.profileData.number}</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        profileData: state.profileData
    }
}

export default connect(mapStateToProps)(Account);