import React from 'react'
import { ethers } from 'ethers'
import { ConnectButton } from '@rainbow-me/rainbowkit'

export default function Admin() {
    const [price, setPrice] = React.useState();


    async function setTokenPrice(newPrice) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const address = "0x3f31b1823a1E9b408AA6c83Db56BA434DF4212c9";
        const abi = [
            "function setTokenPrice(uint256 _newPrice) returns (uint256)"
        ];
        const contract = new ethers.Contract(address, abi, signer);
        const tx = await contract.functions.setTokenPrice(newPrice.toString());

        const receipt = await tx.wait();
        console.log("receipt", receipt);
    }

    return (
        <div>
            <div><ConnectButton /></div>

            <div>
                <label>New price Of Ablc</label>
                <input onChange={(e) => setPrice(e.target.value)} type="text" />
                <button
                    onClick={() => {
                        if (price && parseFloat(price) > 0) {
                            setTokenPrice(price)
                        } else {
                            alert("invalid price value")
                        }

                    }}>
                    Set new Price
                </button>
            </div>
        </div>
    )
}
