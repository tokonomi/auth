import styles from"./styles/Registration.module.css"

import React from "react";
import { Field, Form } from "react-final-form";
import { connect } from "react-redux";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Link } from "react-router-dom";

import { setUser, otpRequest, setOtp, signIn } from "../../actions";
import { authentication } from "../../firebase-config";

const countryCode = '+994'

const required = value => (value ? undefined : 'Required'),
      mustBeNumber = value => (isNaN(value) ? 'Must be a number' : undefined),
      numValue = value => (value.length != 9 ? 'Number is not correct' : undefined),
      composeValidators = (...validators) => value => validators.reduce((error, validator) => error || validator(value), undefined);



class Registration extends React.Component{
    render(){
        this.newBtn = () => {
            return(
                <Link to='/home' className="ui primary button">Завершить регистрацию</Link>
            )
        }
        this.generateRecaptcha = () => {
            window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
                'size': 'invisible',
                'callback': (response) => {
                  // reCAPTCHA solved, allow signInWithPhoneNumber.
                }
              }, authentication);
        }
        this.onVerifyOtp = (e) => {
            let otp = e.target.value
            this.props.setOtp(otp)
            if(otp.length === 6){
                let confirmationResult = window.confirmationResult;
                confirmationResult.confirm(otp).then((result) => {
                    // User signed in successfully.
                    const user = result.user;
                    this.buttonStat = true
                    this.props.signIn(true)
                  }).catch((error) => {
                    // User couldn't sign in (bad verification code?)
                  });
            }
        }
        return(
            <div className={styles["registration"]}>
                <div>
                    <header className={styles["header-title"]}>
                        <h1>Чтобы использовать это приложение, вы должны зарегистрироваться.</h1>
                    </header>
                    <section className={styles["registration-section"]}>
                        <Form onSubmit={(data) => {
                                this.props.setUser(data)
                                this.generateRecaptcha()
                                let appVerifier = window.recaptchaVerifier
                                signInWithPhoneNumber(authentication, '+994' + data.number, appVerifier)
                                .then(confirmationResult => {
                                    this.props.otpRequest(true)
                                    window.confirmationResult = confirmationResult
                                }).catch((error) => {
                                    console.log(error)
                                })
                                }}>
                            {({handleSubmit}) => (
                                <form onSubmit={handleSubmit} className="ui form error">
                                    <Field name="userName" validate={required}>
                                        {({input, meta}) => (
                                            <div>
                                                <label>Имя пользователя</label>
                                                <input {...input} type="text" placeholder="Введите имя пользователя" />
                                                {meta.error && meta.touched && <div className="ui error message"><div className="header">{meta.error}</div></div>}
                                            </div>
                                        )}
                                    </Field>
                                    <Field 
                                        name="number"
                                        validate={composeValidators(required, mustBeNumber, numValue)}>
                                            {({input, meta}) => (
                                                <div>
                                                    <label>Номер телефона</label>
                                                    <div className={styles["number-field"]}>
                                                        <div className={styles["code-field"]}>{countryCode}</div>
                                                        <input {...input} type="text" placeholder="Введите номер телефона" />
                                                    </div>
                                                    {meta.error && meta.touched && <span className="ui error message">{meta.error}</span>}
                                                </div>
                                            )}
                                    </Field>
                                    {
                                        this.props.expandOtp === true ? 
                                        <Field name="OTP" validate={required}>
                                            {({input, meta}) => (
                                                <div>
                                                    <label>Подтвердите номер</label>
                                                    <input {...input} type="number" value={this.props.OTP} onChange={(e) => this.onVerifyOtp(e)}/>
                                                </div>
                                            )}
                                        </Field> : ''
                                    }
                                    <button disabled={this.props.signedIn} style={{marginTop: '10px'}} type="submit" className="ui primary button">Далее</button>
                                    {this.props.signedIn ? this.newBtn() : ''}
                                    <div id="recaptcha-container"></div>
                                </form>
                            )}
                        </Form>
                    </section>
                </div>
                <div className={styles["qr-side"]}>
                    <img src={require("./images/qr.png")} alt="qr" className={styles.qr}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        userData: state.profileData,
        expandOtp: state.otpEnabled,
        OTP: state.verifyOtp,
        signedIn: state.signedIn
    }
}

export default connect(mapStateToProps, {setUser, otpRequest, setOtp, signIn})(Registration);