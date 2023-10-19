import { useState } from 'react';
import css from './Modal.module.scss';
import { createPortal } from 'react-dom';
import sprite from '../../assets/icons/icons.svg';

export const Modal = ({closeModal}) => {

    const handleBackdropClick = (event) => {
        if(event.target === event.currentTarget) closeModal();
    }

    return createPortal(
        <div className={css.backdrop} onClick={handleBackdropClick}>
            
            <div className={css.modal}>
                <svg className={css.svg} onClick={closeModal}>
                    <use href={sprite + '#icon-x-close'}></use>
                </svg>
                <img className={css.image} alt=''></img>
                <div className={css.descriptionContainer}>
                    <h2 className={css.modalheader}>Make: <span>Model</span>, year</h2>
                    <ul className={css.descriptionList}>
                        <li key={1}>City: Chicago</li>
                        <li key={2}>Country: USA</li>
                        <li key={3}>Id: no id</li>
                        <li key={4}>Year</li>
                        <li key={5}>Type</li>
                        <li key={6}>Fuel consunption</li>
                        <li key={7}>engine size</li>
                    </ul> 
                    <p className={css.carDescription}>
                        The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.
                    </p> 
                </div>
                <div className={css.accessoriesContainer}>
                    <h3 className={css.header}>Accessories and functionalities:</h3>
                    <ul className={css.accessoriesList}>
                        {/* {accessoriesObj.map((elem)=>{
                            return (
                                <li></li>
                            )
                        })} */}
                        <li>Tleather seats</li>
                        <li>Panoramic roof</li>
                        <li>Power liftage</li>
                        <li>Premium audio system</li>
                        <li>Remote start</li>
                    </ul>
                </div>
                <div className={css.rentalContainer}>
                    <h3 className={css.header}>Rental Conditions:</h3>
                    <ul className={css.rentalList}>
                        {/* {conditionsObj.map((elem)=>{
                            return (
                                <li></li>
                            )
                        })} */}
                        <li>Minimum age: <span>25</span></li>
                        <li>Valid driver license</li>
                        <li>Security deposit required</li>
                        <li>Mileage: <span>12,345</span></li>
                        <li>Prise: <span>50$</span></li>
                    </ul>
                </div>
                <button className={css.btn} type='button' onClick={closeModal}>Close window</button>
            </div>
        </div>,
        document.body
    )
}

export default Modal;