import React from 'react'

const InputField = ({type, label, placeHolder, value, name, changeHandler,error}) => {
    return (
        <div style={styles.container}>
            <label>{label}</label>
            <input 
                style={styles.input}
                type={type} 
                placeholder={placeHolder} 
                value={value}
                name={name}
                onChange={changeHandler}
                />

            <p style={{color:'darkRed'}}>{error}</p>
        </div>
    )
}

const styles = {
    input: {
        minWidth:'200px',
        border:'none',
        borderBottom: '2px solid green',
        fontSize:'10px'
    },
    container:{
        display:'flex',
        flexDirection:'column',
        minWidth:'40%',
        padding:'10px'
    }
}

export default InputField