import { toast } from 'react-toastify';

const showErrorToast = (condition, message, time) => {
    if (condition) {
      toast.error(message, {
        position: 'top-center',
        autoClose: time
      });
    }
  };

  const showWarningToast = (condition, message, time) => {
    if (condition) {
      toast.warning(message, {
        position: 'top-center',
        autoClose: time
      });
    }
  };

  export {showErrorToast, showWarningToast}