

const Toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })
  
  
  
const toast = {
    error: (title, type = 'error') => {
        return Toast.fire({
            icon: type,
            title: title,
        });
    },

    success: (title, type = 'success') => {
        return Toast.fire({
            icon: type,
            title: title,
        });
    }
};

export default toast;