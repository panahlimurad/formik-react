import React from "react";
import style from "./main.module.css"
import { FormContainer } from "../FormContainer/formContainer";


export class Main extends React.Component{
    render() {
        return (
            <div className={style.main}>
                <button className={style.btnRegister}>Register Now</button>
                <FormContainer />
            </div>
        )
    }
}