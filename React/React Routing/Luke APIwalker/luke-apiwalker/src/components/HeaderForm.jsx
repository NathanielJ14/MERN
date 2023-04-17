import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const HeaderForm = () => {
    const [category, setCategory] = useState("")
    const [id, setId] = useState()
    const navigate = useNavigate()

    const handleSubmit =(e) =>{
        e.preventDefault()
        navigate(`/${category}/${id}`)

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Search for
                    <select name='category' value={category} onChange={e=>setCategory(e.target.value)}>
                        <option hidden>Please select a category</option>
                        <option value="planet">Planet</option>
                        <option value="people">People</option>
                    </select>
                    <label>ID: </label>
                    <input type="text" name='id' value={id} onChange={e=>setId(e.target.value)}/>
                    <button type='submit'>Search</button>
                </p>
            </form>
        </div>
    )
}

export default HeaderForm