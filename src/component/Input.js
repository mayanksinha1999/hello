import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Input.css';

class Input extends Component{
    render(){
        return(
            <div className="input">
                {this.props.children}
            </div>
        );
    }
};

export default Input;

