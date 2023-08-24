import css from './CarCard.module.scss';
import sprite from '../../assets/icons/icons.svg';

export const CarCard = ({cardArr}) => {
    console.log(cardArr)
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
            <h2>car <span className={css.headersSpan}>model</span>, 2015</h2>
            <h2>$40</h2>
        </div>
        <ul className={css.list}>
            <li className={css.listItem}>City</li>
            <li className={css.listItem}>Country</li>
            <li className={css.listItem}>Company</li>
            <li className={css.listItem}>Car type</li>
            <li className={css.listItem}>Car model</li>
            <li className={css.listItem}>mileage</li>
            <li className={css.listItem}>Additional features</li>
        </ul>
        <button className={css.button} type='button'>Learn More</button>
    </div>
}