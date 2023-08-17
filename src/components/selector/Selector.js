import clsx from 'clsx';
import css from './Selector.module.scss';
import { useState } from "react";
// import './Selector.module.scss';
// import sprite from '../../../assets/icons/icons.svg';
import { OutsideClicker } from './OutsideClicker';

export const Selector = () => {
    const [isActive, setActive] = useState(false);
    const [theme, setTheme] = useState('dark');
    
    const handleClick = (event) => {
        const evtParent = event.currentTarget.parentElement;
        evtParent.children[1].classList.toggle('active');
        evtParent.children[0].children[1].classList.toggle('rotate');
        
        setActive(!isActive);
    }

    const handleSelect = (event) => {
        const theme = event.target.innerText.toLowerCase();
        setTheme(theme);
        // selectHandler(theme);
    }

    const themeCheckHandler = () => {
        // return userTheme.length === 0 ? 'dark' : userTheme;
        console.log(theme)
    }

    return (
        // <OutsideClicker isActive={isActive} setActive={setActive}>
            <div className={css.container}> 
                <form className={css.form}>
                    <div className={css.modelContainer}>
                        <label className={css.formLabel} for='enterText'>Car brand</label>
                        <input className={css.carModel} id='enterText' type='text' placeholder='enter the text'></input>
                    </div>

                    <div className={css.containerPerHour}>
                        <label className={css.formLabel} for='pricePerHour'>Price / 1 hour</label>
                        <input className={css.perHour} id='pricePerHour' type='text' placeholder='to $'></input>
                    </div>

                    <div className={css.containerFromTo}>
                        <label className={css.formLabel} for='priceFrom'>Car mileage / km</label>
                        <input className={css.priceFrom} id='priceFrom' type='text' placeholder='From'></input>
                        <input className={css.priceTo} id="priceTo" type='text' placeholder='To'></input>
                    </div>

                    <button className={css.button} type='submit'>Search</button>
                </form>  
                {/* <div className={css.select}>
                    <div className={css.selectContainer} onClick={handleClick}>
                        <p className={css.header}>Theme</p>
                        <div className={clsx(css.icon, [isActive && css.rotate])}>
                            <svg className={css.svg}>
                                <use href={sprite + '#icon-arrow-down'}></use>
                                
                            </svg>
                            <p>^</p>
                        </div>
                    </div>
                    
                    <ul className={clsx(css.list, [isActive && css.active])} 
                        onClick={event => {
                            handleClick(event);
                            handleSelect(event);
                    }}>
                        <li key={1} className={clsx({
                            [css.listItem] : true,
                            [css.current] : isActive && themeCheckHandler() === 'light'
                        })}>
                            <p>Light</p>
                        </li>
                        <li key={2} className={clsx({
                            [css.listItem] : true,
                            [css.current] : isActive && themeCheckHandler() === 'dark'
                        })}>
                            <p>Dark</p>
                        </li>
                        <li key={3} className={clsx({
                            [css.listItem] : true,
                            [css.current] : isActive && themeCheckHandler() === 'violet'
                        })}>
                            <p>Violet</p>
                        </li>
                    </ul>
                </div> */}
            </div>
        // </OutsideClicker>
    )
}