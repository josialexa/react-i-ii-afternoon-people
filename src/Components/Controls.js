import React from 'react'

export default function Controls(props) {
    function handleEdit() {
        props.handleEdit()
    }

    function handleDelete() {
        props.handleDelete()
    }

    function handleNew() {
        props.handleNew()
    }

    function handleNext() {
        console.log(props.index, props.total)
        if(props.index < props.total - 1) {
            props.handleNext()
        }
    }

    function handlePrev() {
        if(props.index > 0){
            props.handlePrev()
        }
    }

    return (
        <div className='control-container'>
            <div className='control-arrows'
                onClick={handlePrev}>
                <span>{'< Previous'}</span>
            </div>
            <div className='control-buttons'>
                <button className='control-button' 
                    onClick={handleEdit}>Edit</button>
                <button className='control-button'
                    onClick={handleDelete}>Delete</button>
                <button className='control-button'
                    onClick={handleNew}>New</button>
            </div>
            <div className='control-arrows'
                onClick={handleNext}>
                <span>{'Next >'}</span>
            </div>
        </div>
    )
}