import React from 'react'

const Container = ({ children }) => {
    return (
        <div className='flex min-h-screen max-w-6xl mx-auto bg-black'>
            {children}
        </div>
    )
}

export default Container