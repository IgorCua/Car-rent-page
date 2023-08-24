import clsx from 'clsx';
import css from './Filter.module.scss';
import { useState, useRef, useEffect } from "react";
// import './Selector.module.scss';
// import sprite from '../../../assets/icons/icons.svg';
import { OutsideClicker } from './OutsideClicker';
import 'overlayscrollbars/overlayscrollbars.css';
// import 'overlayscrollbars/over';
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const Filter = () => {
    const [modelIsActive, setModelIsActive] = useState(false);
    const [perOurIsActive, setPerOurIsActive] = useState(false);
    const [theme, setTheme] = useState('dark');
    let modelRef = useRef(null);
    let perOurRef = useRef(null);

    const carBrands = ['Toyota', 'Lexus', 'Honda', 'Acura', 'Chevrolet', 'Ford', 'Kia', 'Chrysler', 'Hundai', 'Hummer', 'Subaru', 'Suzuki', 'Nissan'];
    const pricePerHour = ['30', '40', '50', '60', '70', '80', '90', '100', '110', '120', '130', '140', '150', '160', '170', '180', '190', '200']
    // const cardArr = [
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'},
    //     {manufacturer: "Hummer", year: "2006", price: '$55', city: 'Lviv', companyName: 'Adventure Car Rentals', carType: 'SUV', model: 'Hummer', mileage: '1234', additionalFeatures: 'Premium sound system'}
    // ] 
    const handleClick = (event) => {
        const evtParent = event.currentTarget.parentElement;
        // console.log(event);

        if(event.target.id === 'enterText'){
            setModelIsActive(!modelIsActive);
        }
        
        if(event.target.id === 'pricePerHour'){
            setPerOurIsActive(!perOurIsActive);
        }
        // setModelIsActive(!modelIsActive);
        // console.log('current target' , event.currentTarget.children[2]);
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

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset();
    }

    // OverlayScrollbars(document.querySelector('#carModelId'), {
    //     overflow:{
    //         y: 'scroll'
    //     }
    // });
    
    // let { isActive, setActive } = props;
  
      useEffect(() => {
        function handleClickOutside(event) {
          if(modelRef.current && !modelRef.current.contains(event.target)){
            setModelIsActive(false);
          }
          if(perOurRef.current && !perOurRef.current.contains(event.target)){
            setPerOurIsActive(false);
          }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [modelRef, perOurRef]);
  
    return (
        
            <div className={css.container}> 
                <form className={css.form} onSubmit={handleSubmit}>
                
                        <div ref={modelRef} className={css.modelContainer} onClick={handleClick}>
                            <label className={css.formLabel} htmlFor='enterText'>Car brand</label>
                            <input 
                                className={css.carModel} 
                                id='enterText' 
                                type='text' 
                                placeholder='enter the text'
                            ></input>
                            {/* <OverlayScrollbarsComponent
                                // element="div"
                                // options={{ scrollbars: { autoHide: 'scroll' } }}
                                defer> */}
                                <ul id='carModelId' className={clsx(css.list, [modelIsActive && css.modelActive])}>
                                    {/* <OverlayScrollbarsComponent
                                    // element="li"
                                    options={{ 
                                        showNativeOverlaidScrollbars: false,
                                        scrollbars: { 
                                        // autoHide: 'scroll',
                                        theme: 'os-theme-dark',
                                        visibility: 'auto',
                                        autoHide: 'never',
                                        // autoHideDelay: 1300,
                                        dragScroll: false,
                                        clickScroll: false,
                                        pointers: ['mouse', 'touch', 'pen'], 
                                    }, 
                                    overflow: {
                                        y: 'scroll'
                                    }
                                    } }
                                    defer> */}
                                        {carBrands.map((elem, i)=>{
                                            return (
                                                <li key={i} className={css.listItem}>{elem}</li>
                                            )
                                        })}
                                    {/* </OverlayScrollbarsComponent> */}
                                </ul>
                            {/* </OverlayScrollbarsComponent> */}
                            {/* <ul id='carModelId' className={clsx(css.list, [modelIsActive && css.modelActive])}>
                                {carBrands.map((elem, i)=>{
                                    return (
                                        <li key={i} className={css.listItem}>{elem}</li>
                                    )
                                })}
                            </ul> */}
                        </div>
                    
                        <div ref={perOurRef} className={css.containerPerHour} onClick={handleClick}>
                            <label className={css.formLabel} htmlFor='pricePerHour'>Price / 1 hour</label>
                            <input className={css.perHour} id='pricePerHour' type='text' placeholder='to $'>
                            </input>
                            <ul className={clsx(css.listPerHour, perOurIsActive && css.perOurActive)}>
                                {pricePerHour.map((elem, i) => {
                                    return (<li className={css.listPerHourItem} key={i}>{elem}</li>)
                                })}
                            </ul>
                        </div>

                    <div className={css.containerFromTo}>
                        <label className={css.formLabel} htmlFor='priceFrom'>Car mileage / km</label>
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
        
    )
}