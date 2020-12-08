import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = (props) => {
    const template = <div
    style={{
        background: props.bck,
        fontSize: props.size,
        color: props.color,
        padding: '5px 10px',
        display: 'inline-block',
        fontFamily: 'Righteous',
        margin: '10px'
    }}
    >{props.children}</div>
    if(props.link) {
        return (
            <Link to={props.linkto}>
            {template}
            </Link>
        )
    } else {
        return template
    }
}

export const firebaseLooper = (snapshot) => {
    const data = [];
    snapshot.forEach((childSnapshot) => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        })
    });
    return data
}

export const reverseArray = (arr) => {
    const reversedArray  = []
    for(let i = arr.length - 1; i >=0; i--) {
        reversedArray.push(arr[i])
    }
    return reversedArray;
}

export const validate = (element) => {
let error = [true, ''];
if(element.validation.email) {
    const valid = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(element.value);
    const msg = `${!valid? 'must be a valid email' :''}`;
    error = !valid ? [valid, msg] : error;
}

if(element.validation.required) {
    const valid = element.value.trim() !== '';
    const msg = `${!valid? 'this field is required' :''}`;
    error = !valid ? [valid, msg] : error;
}
return error;
}