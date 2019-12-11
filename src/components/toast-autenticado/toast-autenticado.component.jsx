import Swal from "sweetalert2";

/**
 * @author Matheus Rocha <matheus.silva@gsw.com.br>
 * @function ToastAutenticado Toast da biblioteca SweetAlert2 para indicar sucesso de autenticação
 * @param {String} nome
 * */
const ToastAutenticado = ({nome}) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 2300,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer);
            toast.addEventListener('mouseleave', Swal.resumeTimer);
        }
    });

    Toast.fire({
        icon: 'success',
        title: `${nome} autenticado com sucesso!`
    });

    return null;
};

export default ToastAutenticado;