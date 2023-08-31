import clsx from 'clsx';
import css from './Filter.module.scss';
import { useState, useRef, useEffect } from "react";
// import './Selector.module.scss';
// import sprite from '../../../assets/icons/icons.svg';
import 'overlayscrollbars/overlayscrollbars.css';
// import 'overlayscrollbars/over';
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

export const Filter = ({filterObj, setFilterObj}) => {
    const [modelIsActive, setModelIsActive] = useState(false);
    const [perOurIsActive, setPerOurIsActive] = useState(false);
    // const [theme, setTheme] = useState('dark');
    let modelRef = useRef(null);
    let perOurRef = useRef(null);

    const carBrands = ['Toyota', 'Lexus', 'Honda', 'Acura', 'Chevrolet', 'Ford', 'Kia', 'Chrysler', 'Hundai', 'Hummer', 'Subaru', 'Suzuki', 'Nissan'];
    const pricePerHour = ['30', '40', '50', '60', '70', '80', '90', '100', '110', '120', '130', '140', '150', '160', '170', '180', '190', '200']
    
    const handleClick = (event) => {
        const evtParent = event.currentTarget.parentElement;
        // console.log(event);

        if(event.target.id === 'carModel'){
            setModelIsActive(!modelIsActive);
        }
        
        if(event.target.id === 'pricePerHour'){
            setPerOurIsActive(!perOurIsActive);
        }
        // setModelIsActive(!modelIsActive);
        // console.log('current target' , event.currentTarget.children[2]);
    }

    const themeCheckHandler = () => {
        // return userTheme.length === 0 ? 'dark' : userTheme;
        // console.log(theme)
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget.elements;
        event.preventDefault();
        // event.target.reset();
        // console.log(filterObj)
        console.log(form.carModel.value);
        console.log(form.perHour.value);
        console.log(form.mileAgeFrom.value);
        console.log(form.mileAgeTo.value);
        setFilterObj({
            model: form.carModel.value,
            pricePerHour: form.perHour.value,
            mileAgeFrom: form.mileAgeFrom.value,
            mileAgeTo: form.mileAgeTo.value
        })
    }

    const handleSelect = (event) => {
        const currTargetId = event.currentTarget.children[1].id;
        const eventId = event.target.id;
        let currentSelect;
        // console.log(event.target.localName);

        if(eventId === 'carModel'){
            console.log('event', eventId)
            setModelIsActive(!modelIsActive);
        }
        
        if(eventId === 'pricePerHour'){
            setPerOurIsActive(!perOurIsActive);
        }

        if(event.target.localName === 'li') {

            (currTargetId === "carModel") ? currentSelect = modelRef.current.children[1] 
                                    : currentSelect = perOurRef.current.children[1]
            // console.log(event.target.innerText);
            // console.log(currentSelect);
            // console.log(currTargetId);
            currentSelect.value = event.target.innerText;
            // console.log(modelRef.current.children[1].value);
            // console.log(perOurRef.current.children);
        }
        // console.log(evt)
    }
    const handleList = (evt) => {
        // if(evt.target.localName !== 'ul') {
        //     setFilterObj({
        //         model: evt.target.innerText,
        //         pricePerHour: '',
        //         proceFrom: '',
        //         priceTo: ''
        //     });
        //     console.log(evt.target.innerText);
        // }
        // console.log(evt)
    }
    // console.log('Filter', filterObj)

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
                
                        <div ref={modelRef} className={css.modelContainer} onClick={handleSelect}>
                            <label className={css.formLabel} htmlFor='carModel'>Car brand</label>
                            <input 
                                className={css.carModel} 
                                name='carModel'
                                id='carModel' 
                                type='text' 
                                placeholder='enter the text'
                                autoComplete="off"
                            ></input>
                            {/* <OverlayScrollbarsComponent
                                // element="div"
                                // options={{ scrollbars: { autoHide: 'scroll' } }}
                                defer> */}
                                <ul 
                                    id='carModelId' 
                                    className={clsx(css.list, [modelIsActive && css.modelActive])}
                                    onClick={handleList}
                                >
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
                    
                        <div ref={perOurRef} className={css.containerPerHour} onClick={handleSelect}>
                            <label className={css.formLabel} htmlFor='pricePerHour'>Price / 1 hour</label>
                            <input 
                                className={css.perHour} 
                                name='perHour' 
                                id='pricePerHour' 
                                type='text' 
                                placeholder='to $'
                                autoComplete="off"
                            >
                            </input>
                            <ul className={clsx(css.listPerHour, perOurIsActive && css.perOurActive)}>
                                {pricePerHour.map((elem, i) => {
                                    return (<li className={css.listPerHourItem} key={i}>{elem}</li>)
                                })}
                            </ul>
                        </div>

                    <div className={css.containerFromTo}>
                        <label className={css.formLabel} htmlFor='mileAgeFrom'>Car mileage / km</label>
                        <input className={css.mileAgeFrom} name='mileAgeFrom' id='priceFrom' type='text' placeholder='From'></input>
                        <input className={css.mileAgeTo} name='mileAgeTo' id="priceTo" type='text' placeholder='To'></input>
                    </div>

                    <button className={css.submit} type='submit'>Search</button>
                </form>  
        
            </div>
        
    )
}