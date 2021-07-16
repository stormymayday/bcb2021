import React from 'react'

import logo from '../../images/BextLogo.png';

const Loading = () => {
    return (
        <>
            <h1 style={{ textAlign: `center`, marginTop: `10rem` }}>Data Powered by</h1>

            <div style={{
                'margin-top': '2em',
                'display': 'flex',
                'align-items': 'center',
                'justify-content': 'center'
            }}>

                <img src={logo} style={{ 'width': '15em' }} ></img>
            </div>
            <div className="loader">
            </div>

        </>
    )
}

export default Loading;