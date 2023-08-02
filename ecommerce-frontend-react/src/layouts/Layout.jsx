import { Outlet } from 'react-router-dom'
import Modal from 'react-modal'
import { Sidebar } from '../components/Sidebar'
import { Summary } from '../components/Summary'
import useStore from "../hooks/useStore"
import { ModalProduct } from '../components/ModalProduct'

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
    </>
  )
}
