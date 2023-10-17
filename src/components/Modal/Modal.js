import { useState } from 'react';
import css from './Modal.module.scss';
import { createPortal } from 'react-dom';

export const Modal = ({closeModal}) => {

    const handleBackdropClick = (event) => {
        if(event.target === event.currentTarget) closeModal();
    }

    return createPortal(
        <div className={css.backdrop} onClick={handleBackdropClick}>
            
            <div className={css.modal}>
                <svg>
                    X
                </svg>
                <img className={css.image} alt=''></img>
                <div>
                    <h2 className={css.header}></h2>
                    <ul className={css.headerList}>
                        <li key={1}></li>
                        <li key={2}></li>
                        <li key={3}></li>
                        <li key={4}></li>
                        <li key={5}></li>
                        <li key={6}></li>
                        <li key={7}></li>
                    </ul> 
                    <p className={css.headerDescription}></p> 
                </div>
                <div>
                    <h3>Accessories and functionalities:</h3>
                    <ul>
                        {/* {accessoriesObj.map((elem)=>{
                            return (
                                <li></li>
                            )
                        })} */}
                        <li>1</li>
                    </ul>
                </div>
                <div>
                    <h3>Rental Conditions:</h3>
                    <ul>
                        {/* {conditionsObj.map((elem)=>{
                            return (
                                <li></li>
                            )
                        })} */}
                        <li>1</li>
                    </ul>
                </div>
                <button type='button' onClick={closeModal}>Close window</button>
            </div>
        </div>,
        document.body
    )
}

export default Modal;