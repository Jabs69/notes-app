import React from 'react';
import style from '../../styles/Modal.module.css';

type ModalProps = {
    children: React.ReactNode,
    onClose: () => void,
    open: boolean,
}

function Modal ({children,onClose,open}:ModalProps) {

  return (

    <div className={style.modal}>

      {children}

    </div>

  )

}