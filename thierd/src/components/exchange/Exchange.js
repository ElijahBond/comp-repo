import React, {useContext} from "react";
import { RateContext } from "../../context/RateContext";
import './exchange.scss'

export const Exchange = () =>{

    const {state} = useContext(RateContext)
    const currency = {...state.currency}

    return(
        <div className = "exchange">
            <div className = "exchangeContainer">
                <div className = "exchangeContent">
                    <div> <p>Base fiat: &nbsp;{state.base} &nbsp; Date: {state.date}</p></div>

                    <ul>
                        {
                            Object.keys(currency).map((item, i)=>{
                                return(
                                    <li key = {item}>
                                        <span><img src =  {currency[item].flag} alt = {item} />{item}</span>
                                        <span>{`1${state.base}= ${currency[item].course} ${item} `}</span>
                                    </li>
                                )
                                })
                        }

                    </ul>
                </div>

            </div>


        </div>
    )
}