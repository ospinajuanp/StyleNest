import '@/styles/Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
    return (
        <form className='form'>
            <input className='form-search' type="text" placeholder="Search"></input>
            <FontAwesomeIcon className='form-icon' icon={faMagnifyingGlass} />
        </form>

    )
}