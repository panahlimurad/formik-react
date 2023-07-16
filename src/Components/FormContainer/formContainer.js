import React from "react";
import style from "./formContainer.module.css"
import { FormSection } from "../FormSection/formSection";
import { FormCard } from "../FormCard/formCard";


export class FormContainer extends React.Component{

    constructor() {
        super()
        this.state = {
            list: []
        }

        this.addList = this.addList.bind(this)
    }

    addList(text) {
        
        const NewList = [text, ...this.state.list]

         this.setState({ list: NewList }, () => {
           console.log(this.state.list); 
         });
    }

    render() {
        return <div className={style.formContainer}>
            <FormSection addList={ this.addList } />
            <FormCard list={ this.state.list } />
        </div>;
    }
}