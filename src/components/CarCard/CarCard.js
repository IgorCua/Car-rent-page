import css from './CarCard.module.scss';
import sprite from '../../assets/icons/icons.svg';

export const CarCard = ({cardArr, elem}) => {
    // console.log('carCard', cardArr)
    const {
        manufacturer,
        year,
        price,
        model,
        mileage,
        carType,
        companyName,
        city,
        additionalFeatures,
        country
    } = elem;
    // console.log(cardArr)
    return <div className={css.container}>
        <div className={css.imageContainer}>
            <div className={css.svgContainer}>
                <svg className={css.svg}>
                    <use href={sprite + '#icon-heart-filled'}></use>
                </svg>
            </div>
            <div className={css.image}>Image</div>   
        </div>
        <div className={css.headers}>
            <h2> {manufacturer} <span className={css.headersSpan}> {model} </span>, {year} </h2>
            <h2> {price} </h2>
        </div>
        <ul className={css.list}>
            <li className={css.listItem}> {city} </li>
            <li className={css.listItem}> {country} </li>
            <li className={css.listItem}> {companyName} </li>
            <li className={css.listItem}> {carType} </li>
            <li className={css.listItem}> {model} </li>
            <li className={css.listItem}> {mileage} </li>
            <li className={css.listItem}> {additionalFeatures} </li>
        </ul>
        <button className={css.button} type='button'>Learn More</button>
    </div>
}