import { CarCard } from "./CarCard/CarCard";
import css from './Catalog.module.scss'

// import { useEffect, useState } from "react";
export const Catalog = ({cardArr}) => {
    return (
        <section className={css.section}>
            {cardArr.map((elem, i) => {
                return <CarCard key={i} cardInfo={elem} index={i}></CarCard>
            })}
            <div>
                
            </div>
        </section>
    )
}