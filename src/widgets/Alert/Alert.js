import Swal from 'sweetalert2';

const showAlert = (content) => {
    Swal.fire({
        title: 'Уведомление',
        text: content,
        icon: 'success',
        confirmButtonText: 'ОК',
        confirmButtonColor: '#214A25'
    });
};

export default showAlert;
