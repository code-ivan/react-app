import React from 'react';
// NOTE: Deprecated
import Validation from 'react-validation';
// From v2.10.0
import { rules, Form, Input, Select, Textarea, Button } from 'react-validation/lib/build/validation.rc'

const isEmail = (value) =>{
    if(typeof value !== 'undefined' && value.length > 0){
        if(value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/))
            return true
        else
            return false
    }else{
        return  true;
    }
}
const isPhoneUK = (value) => {
    if(value.length > 9 && value.match(/^(((\+44)? ?(\(0\))? ?)|(0))( ?[0-9]{3,4}){3}$/))
        return  true;
    else
        return false;
}
const isNumber = (value) => {
    if(typeof value !== 'undefined' && value.length){
        if(value.match(/^\d+$/))
            return  true;
        else
            return false;
    }else{
        return  true;
    }
}
// Use Object.assign or any similar API to merge a rules
// NOTE: IE10 doesn't have Object.assign API natively. Use polyfill/babel plugin.
Object.assign(Validation.rules, {
    // Key name maps the rule
    required: {
        // Function to validate value
        // NOTE: value might be a number -> force to string
        rule: value => {
            return typeof value !== 'undefined' && value.length > 0 && value.toString().trim();
        },
        // Function to return hint
        // You may use current value to inject it in some way to the hint
        hint: value => {
            return <span className='form-error is-visible'>This field is required</span>
        }
    },
    email: {
        // Example usage with external 'validator'
        rule: value => {
            return isEmail(value);
        },
        hint: value => {
            return <span className='form-error'>Please insert a valid email</span>
        }
    },
    phoneUK: {
        // Example usage with external 'validator'
        rule: value => {
            return isPhoneUK(value);
        },
        hint: value => {
            return <span className='form-error'>Please insert a valid UK Phone number</span>
        }
    },
    number: {
        // Example usage with external 'validator'
        rule: value => {
            return isNumber(value);
        },
        hint: value => {
            return <span className='form-error'>Please insert a valid amount</span>
        }
    }
});