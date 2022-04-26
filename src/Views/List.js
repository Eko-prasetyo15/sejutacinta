import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBook } from '../Redux/Actions'

const List = (props) => {
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(15)
    const [updateSearch, setUpdateSearch] = useState('')
    const dispatch = useDispatch()

    const data = props.location
    const queryString = window.location.pathname;
    const urlParams = queryString.split("/")
    const book = urlParams[2]

    useEffect(() => {
        dispatch(getAllBook(book, page, size))
    }, [dispatch, props, page, size])

    const onClickNExt = () => {
        setPage(page + 1)
    }
    const onClickPrev = () => {
        setPage(page - 1)
    }
    const onCLick = (i) => {
        setPage(i)
    }
    console.log(page, 'page')
    const stateAllbook = useSelector((state) => state.Datas.allbook)
    const searchBook = stateAllbook.filter(function (item) {
        console.log(item, 'ini item')
        return item.title.toLowerCase().includes(updateSearch)
    });

    const listSearch = searchBook.map((book, idx) => {
        return (
            <div class="col-lg-3 col-sm-12 mb-3" key={idx}>
                <div class="card" key={idx} style={{ border: 'none' }}>
                    <img src={book.cover_url} class="card-img-top" alt="..." style={{ borderRadius: '20px' }} />
                    <div class="card-body">
                        <h5 class="card-title">{book.title}</h5>
                        <p class="card-text">{data.state}</p>
                    </div>
                </div>
            </div>
        )
    })
    const handleSearchChange = (e) => {
        setUpdateSearch(e.target.value)
    }
   
    var pageArray = []
    for (var i = 1; i < page; i++) {
        pageArray.push(<li class="page-item">
            <button class="page-link" onClick={() => {
                setPage(page)
            }}>{i}</button>
        </li>);
    }

    return (
        <div className="container">
            <form class="d-flex mb-5">
                <input class="form-control" type="search" placeholder="Search" aria-label="Search" onChange={handleSearchChange} />
                <button type="button" class="btn btn-primary disabled">
                    <i class="fa fa-search"></i>
                </button>
            </form>
            <div class="row col-12 m-0">
                {listSearch}
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class={`page-item ${page <= 1 ? 'disabled' : ''}`}>
                        <button class="page-link" onClick={onClickPrev}>Previous</button>
                    </li>
                    {pageArray}
                    <li class="page-item">
                        <button class="page-link" onClick={onClickNExt}>Next</button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default List