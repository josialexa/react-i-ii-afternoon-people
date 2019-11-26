import React, {useState} from 'react'

export default function CardForm(props) {
    const [nameFirst, setNameFirst] = useState(props.curPerson.name ? props.curPerson.name.first : '')
    const [nameLast, setNameLast] = useState(props.curPerson.name ? props.curPerson.name.last : '')
    const [city, setCity] = useState(() => props.curPerson.city || '')
    const [country, setCountry] = useState(() => props.curPerson.country || '')
    const [title, setTitle] = useState(() => props.curPerson.title || '')
    const [employer, setEmployer] = useState(() => props.curPerson.employer || '')
    const [movie1, setMovie1] = useState(props.curPerson.favoriteMovies ? props.curPerson.favoriteMovies[0] : '')
    const [movie2, setMovie2] = useState(props.curPerson.favoriteMovies ? props.curPerson.favoriteMovies[1] : '')
    const [movie3, setMovie3] = useState(props.curPerson.favoriteMovies ? props.curPerson.favoriteMovies[2] : '')

    function handleSubmitClick() {
        let newPerson = {
            id: props.length + 1,
            name: {
                first: nameFirst,
                last: nameLast
            },
            city: city,
            country: country,
            title: title,
            employer: employer,
            favoriteMovies: [movie1, movie2, movie3]
        }

        props.addPerson(newPerson)
    }

    function handleEditClick() {
        let editedPerson = {
            id: props.curPerson.id,
            name: {
                first: nameFirst,
                last: nameLast
            },
            city: city,
            country: country,
            title: title,
            employer: employer,
            favoriteMovies: [movie1, movie2, movie3]
        }

        props.updatePerson(editedPerson)
    }

    function handleCancelClick() {
        props.closeFlags()
    }

    return (
        <div className='card-content'>
            <div
                className='count-header'>
                    <span>{props.editFlag ? props.curPerson.id : '*'}/{props.length}</span>
            </div>
            <div
                className='person'>
                <div
                    className='person-name'>
                        {/* <span>{props.curPerson.name.first} {props.curPerson.name.last}</span> */}
                        <input
                            type='text'
                            value={nameFirst}
                            onChange={e => setNameFirst(e.target.value)}
                            placeholder='First Name'></input>
                        <input
                            type='text'
                            value={nameLast}
                            onChange={e => setNameLast(e.target.value)}
                            placeholder='Last Name'></input>
                </div>
                <div className="basic-info">
                    <div
                        className='info'>
                        {/* <span><span className='bold'>From: </span>{props.curPerson.city}, {props.curPerson.country}</span> */}
                        <input
                            type='text'
                            value={city}
                            onChange={e => setCity(e.target.value)}
                            placeholder='Birth City'></input>
                        <input
                            type='text'
                            value={country}
                            onChange={e => setCountry(e.target.value)}
                            placeholder='Birth Country'></input>
                    </div>
                    <div
                        className='info'>
                        {/* <span><span className='bold'>Job Title: </span>{props.curPerson.title}</span> */}
                        <input
                            type='text'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder='Job Title'></input>
                    </div>
                    <div
                        className='info'>
                        {/* <span><span className='bold'>Employer: </span>{props.curPerson.employer}</span> */}
                        <input
                            type='text'
                            value={employer}
                            onChange={e => setEmployer(e.target.value)}
                            placeholder='Employer'></input>
                    </div>
                </div>
                <div className='movies'>
                    <span
                        className='bold'>Favorite Movies:</span>
                    <ol
                        className='indent'>
                        {/* {props.curPerson.favoriteMovies.map((v, i) => <li key={i}>{v}</li>)} */}
                        <li><input
                            type='text'
                            value={movie1}
                            onChange={e => setMovie1(e.target.value)}
                            placeholder='#1 Favorite'></input></li>
                        <li><input
                            type='text'
                            value={movie2}
                            onChange={e => setMovie2(e.target.value)}
                            placeholder='#2 Favorite'></input></li>
                        <li><input
                            type='text'
                            value={movie3}
                            onChange={e => setMovie3(e.target.value)}
                            placeholder='#3 Favorite'></input></li>
                    </ol>
                </div>
            </div>
            <div className='form-buttons'>
                <button className='form-button'
                    onClick={props.editFlag ? handleEditClick : handleSubmitClick}>{props.editFlag ? 'Edit' : 'Add'}</button>
                <button className='control-button'
                    onClick={handleCancelClick}>Cancel</button>
            </div>
        </div>
    )
}
