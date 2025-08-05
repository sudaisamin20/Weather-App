import React from 'react'

const NotAvailableLocation = (props) => {


    return (
        <div className=''>
            <h1 className='text-4xl text-white p-6'>{props.message.charAt(0).toUpperCase() + props.message.slice(1, props.message.length)}. Please enter correct City/Location name.</h1>
        </div>
    )
}

export default NotAvailableLocation
