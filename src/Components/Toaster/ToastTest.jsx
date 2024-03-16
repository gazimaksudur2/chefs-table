import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastTest = () => {
    const showToast = (condition, message, time) => {
        if (condition) {
          toast.success(message, {
            position: 'top-center',
            autoClose: time
          });
        }
      };

  return (
    <div className='my-10 flex justify-center items-center'>
      <button className='btn p-4 bg-red-400' onClick={() => showToast(true, 'Awesome message!', 2000)}>Show Toast</button>
      <ToastContainer />
    </div>
  );
}

export default ToastTest;
