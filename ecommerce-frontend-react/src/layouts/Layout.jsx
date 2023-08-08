import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Sidebar } from '../components/Sidebar'
import { Summary } from '../components/Summary'
import useStore from "../hooks/useStore"
import { ModalProduct } from '../components/ModalProduct'
import { useAuth } from '../hooks/useAuth';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

//For bug console with the modal
Modal.setAppElement('#root')

export default function Layout() {

  const { modal } = useStore();
  const {user, error} = useAuth({middleware: 'auth'})

  return (
    <>
      <div className='md:flex'>
        <Sidebar />

        <main className='flex-1 h-screen overflow-y-scroll bg-gray-100 p-3'>
          <Outlet />
        </main>

        <Summary />
      </div>

      <Modal isOpen={modal} style={customStyles} >
        <ModalProduct />
      </Modal>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}
