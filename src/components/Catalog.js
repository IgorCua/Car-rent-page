import { CarCard } from "./CarCard/CarCard";
import css from './Catalog.module.scss';

// import { useEffect, useState } from "react";
export const Catalog = ({cardArr, filterObj}) => {
    console.log(cardArr);
    console.log(filterObj)

    const catalogFilter = (obj, i) => {
        // return <CarCard key={i} cardInfo={elem} index={i} cardArr={cardArr} elem={elem}></CarCard>
    }

    return (
        <section className={css.section}>
            {cardArr.map((elem, i) => {
                console.log(elem.manufacturer);
                if(filterObj.model === ''){
                    return <CarCard key={i} cardInfo={elem} index={i} cardArr={cardArr} elem={elem}></CarCard>
                }
                
                if(elem.manufacturer === filterObj.model){
                    return <CarCard key={i} cardInfo={elem} index={i} cardArr={cardArr} elem={elem}></CarCard>
                }
                // return <CarCard key={i} cardInfo={elem} index={i} cardArr={cardArr} elem={elem}></CarCard>
            })}
            
            <div className={css.btnContainer}>
                <button type="button" className={css.loadMore} >Load More</button>
            </div>               
        </section>
    )
}