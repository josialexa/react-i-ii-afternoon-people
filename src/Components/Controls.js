import React from 'react'

export default function Controls(props) {
    function handleEdit() {
        props.handleEdit(true, true)
    }

    function handleDelete() {
        props.handleDelete()
    }

    function handleNew() {
        props.handleNew(true, false)
    }

    function handleNext() {
        if(props.index < props.total - 1 && !props.formFlag) {
            props.handleNext()
        }
    }

    function handlePrev() {
        if(props.index > 0 && !props.formFlag){
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