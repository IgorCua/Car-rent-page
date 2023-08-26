import { NavLink, Outlet } from "react-router-dom";
import { Filter } from "../Filter/Filter.js";
import css from "./Header.module.scss";
import { Navigation } from "../Navigation/Navigation.js";
// import { Children } from "react";
// import { Selector } from "../Selector/Selector.js";

export const Header = ({filterObj, setFilterObj}) => {
    return (
        // <div className={css.headerContainer}>
        // <section>
        <>
            <header className={css.header}> 
                {/* <div className={css.userContainer}>
                    <Navigation/>

                    <div className={css.userInfo}>
                        User@mail.com
                        <div>
                            image
                        </div>
                    </div>
                </div> */}
                <Filter filterObj={filterObj} setFilterObj={setFilterObj}/>
            </header>
            <Outlet/>
        </>
        // </section>
        // </div>
    )
}