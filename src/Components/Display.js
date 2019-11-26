import React from 'react'

export default function Display(props) {
    return (
        <div className='card-content'>
            <div
                className='count-header'>
                    <span>{props.curPerson.id}/{props.length}</span>
            </div>
            <div
                className='person'>
                <div
                    className='person-name'>
                        <span>{props.curPerson.name.first} {props.curPerson.name.last}</span>
                </div>
                <div className="basic-info">
                    <div
                        className='info'>
                        <span><span className='bold'>From: </span>{props.curPerson.city}, {props.curPerson.country}</span>
                    </div>
                    <div
                        className='info'>
                        <span><span className='bold'>Job Title: </span>{props.curPerson.title}</span>
                    </div>
                    <div
                        className='info'>
                        <span><span className='bold'>Employer: </span>{props.curPerson.employer}</span>
                    </div>
                </div>
                <div className='movies'>
                    <span
                        className='bold'>Favorite Movies:</span>
                    <ol
                        className='indent'>
                        {props.curPerson.favoriteMovies.map((v, i) => <li key={i}>{v}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    )
}