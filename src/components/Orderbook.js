import React from 'react'
import "./assets/css/orderbook.css"
export default function Orderbook() {
    return (
        <div className='footer-table'>
            <table>
                <tr>
                    <th>Wallet ID</th>
                    <th>Token Pair</th>
                    <th>Base</th>
                    <th>Quote</th>
                    <th>TX</th>
                </tr>
                <tr className='buy-row'>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Germany</td>
                    <td> <button className='buy'>Buy</button> </td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                    <td>Germany</td>
                    <td><button className='sell'>Sell</button></td>
                </tr>
                <tr className='buy-row'>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                    <td>Germany</td>
                    <td><button className='buy'>Buy</button></td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                    <td>Germany</td>
                    <td><button className='sell'>Sell</button></td>
                </tr>

            </table>
        </div>
    )
}
