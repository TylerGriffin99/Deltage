import React from 'react'

import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className='adim-credits'>
                    <h3> <a href="https://devacademy.co.nz/">EDA</a> Harakeke-2018 Project by</h3>
                    <br />
                    <a href="https://www.linkedin.com/in/adam-kuhn-20803481/">Adam,</a>
                    <a href="http://www.allinarow.co.nz/"> Madeleine,</a>
                    <a href="http://sim.gen.nz/"> Peter,</a>
                    <a href="https://www.linkedin.com/in/timothy-tolley/"> Timothy &amp;</a>
                    <a href="https://www.linkedin.com/in/tyler-griffin-a8097a77/"> Tyler</a>
                </div>
                <hr className='hr-footer' />
                <div className='credits'>
                    <h3>A Special thanks to:</h3>
                    <a target="_blank" href="https://www.instagram.com/nina.vanlier/">
                    <img className='nina-logo'src="/images/nina.png" alt="nina logo" />
                    <h3>Nina Van Lier</h3>
                    </a>
                    
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