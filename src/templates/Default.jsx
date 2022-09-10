import React from 'react'

import Header from '../components/Header'


const Default = ({ children }) => {
    return (
        <>
            <Header>Header</Header>
            {children}
            <footer>Footer</footer>
        </>
    )
}

export default Default