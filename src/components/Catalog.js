import { CarCard } from "./CarCard/CarCard";
import css from './Catalog.module.scss';

// import { useEffect, useState } from "react";
export const Catalog = ({cardArr}) => {
    // console.log(cardArr);
    return (
        <section className={css.section}>
            {cardArr.map((elem, i) => {
                return <CarCard key={i} cardInfo={elem} index={i} cardArr={cardArr} elem={elem}></CarCard>
            })}
            
            <div className={css.btnContainer}>
                <button type="button" className={css.loadMore} >Load More</button>
            </div>               
        </section>
    )
}