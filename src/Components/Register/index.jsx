import React from 'react';
import Title from '../Title/index';
import Button from '../Button/index';

const Register = () => {
    return (
        <div className="register">
            <Title title="Register"/>
            <form className="register__form">
                <div className="register__form__field">                   
                    <input type="text"
                     className="register__form__field__input" 
                     placeholder="Name"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input type="text"
                     className="register__form__field__input" 
                     placeholder="CPF"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input type="text"
                     className="register__form__field__input" 
                     placeholder="Street"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input type="text"
                     className="register__form__field__input" 
                     placeholder="Number"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input type="text"
                     className="register__form__field__input" 
                     placeholder="District"
                    />
                </div>  
                <div className="register__form__field">                   
                    <input type="text"
                     className="register__form__field__input" 
                     placeholder="City"
                    />
                </div>   
                <div className="register__form__field">                   
                    <input type="text"
                     className="register__form__field__input" 
                     placeholder="State"
                    />
                </div>      
                
                <Button text="Submit"/>
            </form>
        </div>
    );
}

export default Register;