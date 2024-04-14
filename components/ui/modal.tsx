import React from 'react'
import { Button } from './button';

type ModalProps = {
  open: boolean,
  onClose: () => void,
  children: React.ReactNode
  message?:string
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, message }) => {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? 'visible' : 'hidden'}`}
      style={{ backgroundColor: open ? 'rgba(0, 0, 0, 0.2)' : 'transparent' }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {message}
      <div
        className="bg-black p-4 rounded-xl text-white grid border glass border-1 border-gray-400"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <Button className='m-5 glass' onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default Modal;