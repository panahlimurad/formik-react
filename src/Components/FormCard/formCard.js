import React from "react";
import PropTypes from "prop-types";
import style from './formCard.module.css'



export class FormCard extends React.Component{
    render() {
        console.log(this.props.list);

        const { list } = this.props
        
        const container = list?.map((item, index) => (
          <div key={index} className={style.card}>
                <p>{item.fullName }</p>
                <p>{item.email }</p>
          </div>
        ));

        return (
          <div className={style.formCard}>
            {container}
          </div>
        );
    }
}

FormCard.propTypes = {
  addList: PropTypes.func,
};