import React, {useState} from "react";
import styles from "../Users/users.module.css";

const Paginator = ({totalItemsCount, pageSize, currentPage, onPageChange, portionSize= 25}) => {
    debugger
    let pagesCount = Math.ceil(totalItemsCount / pageSize);
    let pages = [];
    for (let i = 0; i < pagesCount; i++) {
        pages.push(i);
    }
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize +1;
    let rightPortionPageNumber = portionNumber * portionSize;



    return <div className={''}>
        {portionNumber > 1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) => {
                return <button className={styles.selectedPage} key={p} onClick={(e) => {
                    onPageChange(p);
                }}>{p}</button>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}

    </div>
}
export default Paginator;