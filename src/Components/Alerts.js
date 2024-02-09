import React from 'react'

export default function Alerts(props) {
    const capitalize=(word)=>{
        let ch=word.charAt(0).toUpperCase();
        return ch + word.substring(1);


    }
  return (
   
    props.alert&&<div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  )
}
//at the begining of div tag the syntax "props.alert&&"is used because at start props.alert is null ,it will run if both conditions are true