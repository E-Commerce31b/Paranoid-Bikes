import { useState, useEffect } from 'react';
import style from './Pagination.module.css'

export default function Pagination({currentPage, filtered, pagination, dispatch}) {

    const [pages, setPages] = useState([])
    const [actualPage, setActualPage] = useState(1)

    useEffect(() => {
            let totalPages = (Math.ceil(filtered.length / 16))
            let arrPages = []
            while(totalPages > 0) {
                arrPages.push(totalPages)
                totalPages = totalPages - 1
                }
            setPages(arrPages.reverse())
        }, 
    [filtered])

    useEffect(() => {
        setActualPage(currentPage / 16 + 1)
    }, [currentPage])

    return (
        <div className={style.footer}>
                <div className={style.page_number}>
                    <div className={style.actual_page}>N° {actualPage}</div>
                </div>
                <div className={style.bottom}>
                    <button className={`${style.pagination} ${(currentPage - 1 > 0) ? style.show_arrow : style.hide_arrow}`} onClick={() => dispatch(pagination({currentPage, filtered, page:'anteriores'}))}> {'<'} </button>
                        <div className={style.pages}>
                            {pages?.map((page, i) => {return (<button className={style.page} onClick={() => dispatch(pagination({currentPage, filtered, page}))} key={i}>{page}</button>)})}
                        </div>
                    <button className={`${style.pagination} ${(filtered.length > currentPage + 16) ? style.show_arrow : style.hide_arrow}`} onClick={() => dispatch(pagination({currentPage, filtered, page:'posteriores'}))}> {'>'} </button>
                </div>
        </div>
    )
}




