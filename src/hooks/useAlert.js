import { useColorScheme } from '@mui/material';
import Swal from 'sweetalert2';

const initialConfigConfirmAlert = {
    title: '',
    text: '',
    icon: 'warning',
    confirm: 'Confirmar',
    cancel: 'Cancelar',
    callback: null,
};

const initialConfigAlert = {
    title: '',
    text: '',
    icon: 'success',
    showConfirmButton: false,
    timer: undefined,
};

export const useAlert = () => {
    const { mode } = useColorScheme();

    const showConfirmAlert = (config = {}) => {
        config = Object.assign(initialConfigConfirmAlert, config);
        const { title, text, icon, confirm, cancel, callback } = config;
        Swal.fire({
            title,
            text,
            icon,
            showCancelButton: true,
            confirmButtonColor: '#cf332e',
            cancelButtonColor: '#1e5883',
            confirmButtonText: confirm,
            cancelButtonText: cancel,
            theme: mode === 'light' || mode === 'system' ? 'light' : 'dark',
        }).then((result) => {
            if (result.isConfirmed) {
                if (callback && typeof callback === 'function') {
                    callback();
                }
            }
        });
    };

    const showAlert = (config = {}) => {
        config = Object.assign(initialConfigAlert, config);
        const { title, text, icon, timer, showConfirmButton } = config;
        Swal.fire({
            title,
            text,
            icon,
            showConfirmButton: showConfirmButton,
            timer,
            theme: mode === 'light' || mode === 'system' ? 'light' : 'dark',
        });
    };

    return { showConfirmAlert, showAlert };
};
