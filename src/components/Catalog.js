import { useEffect, useState } from "react";
import { CarCard } from "./CarCard/CarCard";
import css from './Catalog.module.scss';
import Modal from "./Modal/Modal";
// import { useEffect, useState } from "react";
export const Catalog = ({cardArr, filterObj}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // console.log(cardArr);
    // console.log(filterObj);

    useEffect(()=>{
        console.log(isModalOpen);
    }, [isModalOpen]);

    const catalogFilter = (obj, i) => {
        // return <CarCard key={i} cardInfo={elem} index={i} cardArr={cardArr} elem={elem}></CarCard>
    }

    const handleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <section className={css.section}>
            {cardArr.map((elem, i) => {
                // console.log(elem.manufacturer);
                if(filterObj.model === ''){
                    return <CarCard 
                        key={i} 
                        cardInfo={elem} 
                        index={i} 
                        cardArr={cardArr} 
                        elem={elem} 
                        handleModal={handleModal}
                    ></CarCard>
                }
                
                if(elem.manufacturer === filterObj.model){
                    return <CarCard 
                        key={i} 
                        cardInfo={elem} 
                        index={i} 
                        cardArr={cardArr} 
                        elem={elem} 
                        isModalOpen={isModalOpen} 
                        handleModal={handleModal}
                    ></CarCard>
                }
                // return <CarCard key={i} cardInfo={elem} index={i} cardArr={cardArr} elem={elem}></CarCard>
            })}
            
            <div className={css.btnContainer}>
                <button type="button" className={css.loadMore} >Load More</button>
            </div>  

            {isModalOpen && (<Modal closeModal={handleModal}></Modal>)}             
        </section>
    )
}