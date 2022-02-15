import React from 'react';
import { useForm } from 'react-hook-form';
import Title from '../Title/index';
import Button from '../Button/index';

const Register = () => {

    const {register, handleSubmit, setValue} = useForm();

    const onSubmit = (e) => {
        console.log(e);
    }

    const checkCEP = (e) => {
        const cep = e.target.value.replace(/\D/g, '');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setValue('street', data.logradouro);
                setValue('city', data.localidade);
                setValue('district', data.bairro);
                setValue('state', data.uf)
            });

    }


    return (
        <div className="register">
            <Title title="Register"/>
            <form onSubmit={handleSubmit(onSubmit)} className="register__form">
                <div className="register__form__field">                   
                    <input
                        {...register("name")}
                        type="text"
                        className="register__form__field__input" 
                        placeholder="Name"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input
                        {...register("email")}
                        type="text"
                        className="register__form__field__input" 
                        placeholder="Email"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input
                        {...register("cpf")}
                        type="text"
                        className="register__form__field__input" 
                        placeholder="CPF"
                    />
                </div>                 
                <div className="register__form__field">                   
                    <input
                        {...register("birthday")}
                        type="date"
                        className="register__form__field__input" 
                        placeholder="Birthday"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input
                        {...register("cep")}
                        onBlur={checkCEP}
                        type="text"
                        className="register__form__field__input" 
                        placeholder="CEP"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input
                        {...register("street")}
                        type="text"
                        className="register__form__field__input" 
                        placeholder="Street"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input
                        {...register("number")}
                        type="text"
                        className="register__form__field__input" 
                        placeholder="Number"
                    />
                </div> 
                <div className="register__form__field">                   
                    <input
                        {...register("district")}
                        type="text"
                        className="register__form__field__input" 
                        placeholder="District"
                    />
                </div>  
                <div className="register__form__field">                   
                    <input
                        {...register("city")}
                        type="text"
                        className="register__form__field__input" 
                        placeholder="City"
                    />
                </div>   
                <div className="register__form__field">                   
                    <input
                        {...register("state")}
                        type="text"
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