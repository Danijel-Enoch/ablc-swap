import { ethers } from "ethers";
import axios from 'axios';
import { updateOrder } from "./apiSDK";

const address = "0x344762521c057A9a5e1d221a9B899Bf73D1B1359";


//approve
async function approve(amount, token) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const abi = [
        "function approve(address spender, uint256 amount) returns (bool)"
    ];
    const contract = new ethers.Contract(token, abi, signer);
    const tx = await contract.functions.approve("0x344762521c057A9a5e1d221a9B899Bf73D1B1359", amount);

    const receipt = await tx.wait();
    console.log("receipt", receipt);
}


//create Order
async function CreateOrder(orderType, tokenA, tokenB, baseAmount, quoteAmount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const abi = [
        "function CreateOrder(string _orderType, address _tokenA, address _tokenB, uint256 _baseAmount, uint256 _quoteAmount) payable"
    ];
    const contract = new ethers.Contract("0x344762521c057A9a5e1d221a9B899Bf73D1B1359", abi, signer);
    const tx = await contract.functions.CreateOrder(orderType.toString(), tokenA.toString(), tokenB.toString(), baseAmount.toString(), quoteAmount.toString());

    const receipt = await tx.wait();
    console.log("receipt", receipt);
}

export const createPair = async (orderType, tokenA, tokenB, baseAmount, quoteAmount) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    alert("approving Token")
    await approve("10000000000000000000000000000", tokenA).then(async (res) => {
        alert("creating Order")
        await CreateOrder(orderType, tokenA, tokenB, ethers.utils.parseUnits(baseAmount, 8), ethers.utils.parseUnits(quoteAmount, 18));
    })

}

//Cancel Order
async function cancelOrder(Oid) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const abi = [
        "function cancelOrder(uint256 id)"
    ];
    const contract = new ethers.Contract(address, abi, signer);
    const tx = await contract.functions.cancelOrder(Oid);

    const receipt = await tx.wait();
    console.log("receipt", receipt);
}


//Exchnage



export async function Exchange(wallet, id, tokenB, quoteAmount) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    alert("Approving Token")
    await approve("1000000000000000000000000000", tokenB).then(async (res) => {
        alert("Exchanging")
        const abi = [
            "function Exchange(address _wallet, uint256 id)"
        ];
        const contract = new ethers.Contract("0x344762521c057A9a5e1d221a9B899Bf73D1B1359", abi, signer);
        const tx = await contract.functions.Exchange(wallet, id);

        const receipt = await tx.wait();
        console.log("receipt", receipt);

    })

}


//get orders
