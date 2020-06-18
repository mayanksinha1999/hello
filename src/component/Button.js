import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component{
    isOperator = val =>{
        return !isNaN(val) || val === "." || val === "=";
    }
    render(){
        return(
            <div className={`button ${this.isOperator
            (this.props.children) ? "" : "operator"}`
            }
            onClick={()=> this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
        );
    }
};

export default Button;

