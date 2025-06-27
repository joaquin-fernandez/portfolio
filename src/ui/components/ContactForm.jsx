import { Button, TextField, Typography } from '@mui/material';
import { useForm as useFormFormspree } from '@formspree/react';
import { useEffect, useState } from 'react';
import { useAlert, useForm } from '../../hooks';
import { formValidationsTypes, getFormValidations } from '../../utils';
import { getEnvVariables } from '../../helpers';

const initialForm = {
    email: '',
    nombre: '',
    message: '',
};

const formValidations = getFormValidations([
    formValidationsTypes.email,
    formValidationsTypes.nombre,
    formValidationsTypes.message,
]);

const { VITE_FORMSPREE_API_KEY } = getEnvVariables();

export const ContactForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { showAlert } = useAlert();
    const [state, handleSubmit, reset] = useFormFormspree(
        VITE_FORMSPREE_API_KEY
    );

    const {
        email,
        nombre,
        message,
        onInputChange,
        onResetForm,
        emailValid,
        nombreValid,
        messageValid,
        isFormValid,
    } = useForm(initialForm, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!isFormValid) return;
        handleSubmit(e);
    };

    useEffect(() => {
        if (state.succeeded) {
            showAlert({
                title: '¡Gracias por contactarme!',
                text: 'Te responderé lo antes posible ⏳',
                icon: 'success',
                timer: 3500,
            });
            reset();
            setFormSubmitted(false);
            onResetForm();
            return;
        }
        if (state.errors) {
            showAlert({
                title: 'Oops!',
                text: 'Algo salió mal 😕. Revisa tus datos e inténtalo de nuevo. Si el error persiste, podés escribirme directamente a: 📧 joaquin.fernandez.dev@gmail.com',
                icon: 'error',
                timer: 3500,
            });
            reset();
        }
    }, [state.succeeded, state.errors]);

    return (
        <>
            <Typography
                variant='h5'
                sx={{
                    mt: 2,
                    fontWeight: 700,
                }}
                display={{ md: 'none' }}
            >
                📧 Envíame un mensaje
            </Typography>
            <form onSubmit={onSubmit}>
                <Typography
                    variant='body1'
                    sx={{
                        mt: { xs: 4, md: 3 },
                        fontWeight: 600,
                    }}
                >
                    Nombre
                </Typography>
                <TextField
                    id='name'
                    placeholder='Ingresa tu nombre'
                    type='text'
                    name='nombre'
                    value={nombre}
                    onChange={onInputChange}
                    error={!!nombreValid && formSubmitted}
                    helperText={!!nombreValid && formSubmitted && nombreValid}
                    variant='outlined'
                    sx={{ mt: 1 }}
                    fullWidth
                />
                <Typography
                    variant='body1'
                    sx={{
                        mt: 2,
                        fontWeight: 600,
                    }}
                >
                    Correo electrónico
                </Typography>
                <TextField
                    id='email'
                    placeholder='Ingresa tu correo electrónico'
                    type='email'
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    error={!!emailValid && formSubmitted}
                    helperText={!!emailValid && formSubmitted && emailValid}
                    variant='outlined'
                    sx={{
                        mt: 1,
                    }}
                    fullWidth
                />
                <Typography
                    variant='body1'
                    sx={{
                        mt: 2,
                        fontWeight: 600,
                    }}
                >
                    Mensaje
                </Typography>
                <TextField
                    id='message'
                    placeholder='¿En qué puedo ayudarte?'
                    type='text'
                    name='message'
                    value={message}
                    onChange={onInputChange}
                    error={!!messageValid && formSubmitted}
                    helperText={!!messageValid && formSubmitted && messageValid}
                    variant='outlined'
                    multiline
                    rows={5}
                    sx={{
                        mt: 1,
                    }}
                    fullWidth
                />
                <Button
                    type='submit'
                    variant='contained'
                    sx={{
                        mt: 4,
                        fontSize: '1.1rem',
                    }}
                    className='styledButton'
                    disabled={state.submitting}
                    fullWidth
                >
                    Enviar 📤
                </Button>
            </form>
        </>
    );
};
