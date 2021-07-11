import React from 'react';
import moneyIMG from '../../assets/images/money.png';
import {ReactComponent as CpCircleIcon} from '../../assets/images/coupon-circle-icon.svg';
import {ReactComponent as TimeIcon} from '../../assets/images/time-icon.svg';
import './styles.css';

function PromoBanner(props){
    return(
        <div className="promobanner" onClick={props.handleClick}>
            <h1>APROVEITE AGORA</h1>
            <div className="promobanner_cpcontainer">
                <CpCircleIcon />
                <span className="cpcontainer__title">CUPOM:</span>
                <span className="cpcontainer__content">htmlnaoelinguagem</span>
            </div>
            <div className="promobanner_line"></div>
            <div className="promobanner_timercontainer">
                <h2>FINALIZA EM:</h2>
                <TimeIcon />
                <span>00:05:00</span>
            </div>
            <img src={moneyIMG} alt="Promotion Banner" />
        </div>
    )
}

export default PromoBanner;