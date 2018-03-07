import React from 'react'

import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='adim-credits'>
                    <p>
                        EDA Harakeke-2018 Project by
                    </p>
                    <br />
                    <p>
                        Adam, Maddie, Peter, Tim &amp; Tyler
                </p>
                </div>
                <hr className='hr-footer' />
                <div className='credits'>
                    <h3>A Special thanks to:</h3>
                    <a target="_blank" href="https://www.instagram.com/nina.vanlier/">Nina Van Lier - Graphic Designer</a>
                    <div className='image-logo'>
                        <a target="_blank" href="https://www.cryptocompare.com/">
                            <img target="_blank" className='cryto-logo' src="/images/cryptocompare.png" alt="cryptocompare logo" />
                        </a>
                        <a target="_blank" href="https://newsapi.org/">
                            <img target="_blank" className='news-logo' src="/images/newsApi.png" alt="newsApi logo" />
                        </a>
                    </div>
                </div>
           

            </div>
        )
    }
}

export default Footer