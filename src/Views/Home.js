import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCategory } from '../Redux/Actions'

const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategory())
    }, [dispatch])

    const stateCategory = useSelector((state) => state.Datas.datas)

    return (
        <div className="container-sm">
            <div className="card p-3">
                <div className="row col-12">
                    {stateCategory.map((cat, idx) => {
                        return (
                            <div className="col-lg-3 mb-3 pl-0 pr-0" key={idx}>
                                <Link to={{
                                    pathname: `/list/${cat.id}`,
                                    state: cat.name
                                }}>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary btn-lg"
                                        style={{ width: '100%' }}
                                    >{cat.name}</button>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home