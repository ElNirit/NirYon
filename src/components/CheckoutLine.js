import React from 'react'

export default function CheckoutLine(props) {
    return (
        <div className="row checkout-steps">
            <div className={props.step1 ? 'active':''}> הרשמה </div>
            <div className={props.step2 ? 'active':''}> שילוח </div>
            <div className={props.step3 ? 'active':''}> תשלום </div>
            <div className={props.step4 ? 'active':''}> סיום הזמנה </div>

            
        </div>
    )
}
