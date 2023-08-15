import { Selector } from "../selector/Selector";
import css from "./Header.module.scss";
// import { Selector } from "../Selector/Selector.js";

export const Header = () => {
    return (
        <div className={css.headerContainer}>
            <Selector/>
        </div>
    )
}