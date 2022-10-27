import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='flex min-h-screen max-w-6xl mx-auto bg-primary-base'>
            {children}
        </div>
    )
}

export default Container