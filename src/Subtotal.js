import React from 'react'
import subtotal_css from './Subtotal.module.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider'
import { Total_payment } from './reducer';
import GooglePay from '@google-pay/button-react';
function Subtotal() {
    const [{basket}] = useStateValue();
    const paymentRequest = {
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: "CARD",
            parameters: {
                allowedAuthMethods: ["PAN_ONLY"],
                allowedCardNetworks: ["VISA"]
            },
            tokenizationSpecification: {
              type: "PAYMENT_GATEWAY",
              parameters: {
                gateway: "example"
              }
            }
          }
        ],
        merchantInfo: {
          merchantId: 'BCR2DN6TV7D5TV2S',
          merchantName: "MIHIR VAGHELA"
        },
        transactionInfo: {
          totalPriceStatus: "FINAL",
          totalPriceLabel: "Total",
          totalPrice: "100.00",
          currencyCode: "INR",
          countryCode: "IN"
        }
      };
    return (
        <div className={subtotal_css.subtotal}>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):<strong>{value}</strong>
                        </p>
                        <small className={subtotal_css.subtotal__gift}>
                            <input type="checkbox" />This order
                   contains a gift
                   </small>
                    </>
                )}
                decimalScale={2}
                value={Total_payment(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {/* <button>payment proceed</button> */}
            <GooglePay
          environment="TEST"
          buttonColor="default"
          buttonType="plain" 
          buttonSizeMode="fill"
          paymentRequest={paymentRequest}
          onLoadPaymentData={paymentRequest => {
            console.log("load payment data", paymentRequest);
          }}
          style={{ width: 240, height: 40  }}
        />
        </div>
    )
}

export default Subtotal

