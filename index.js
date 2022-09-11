import { ethers } from "https://cdn-cors.ethers.io/lib/ethers-5.5.4.esm.min.js";
import {contractAddress, contractAbi} from  "./constants.js";

const mintBronze = document.getElementById('MintBronze');
const mintSteel = document.getElementById('MintSteel');
const mintGold = document.getElementById('MintGold');
const mintDiamond = document.getElementById('MintDiamond');
const mintPlatinum = document.getElementById('MintPlatinum');

mintBronze.onclick = MintBronze;
mintSteel.onclick = MintSteel;
mintGold.onclick = MintGold;
mintDiamond.onclick = MintDiamond;
mintPlatinum.onclick = MintPlatinum;

async function connect() {

    if (typeof window.ethereum !== 'undifined') {
        await window.ethereum.request({ method: "eth_requestAccounts" })
        console.log("Connected");
    } else {
        console.log("Get A Metamask Wallet");
    }

}

connect();

let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer = provider.getSigner();
let wagmiPakistanContract = new ethers.Contract(contractAddress, contractAbi, signer)


async function MintBronze() {
    const mintBronze = wagmiPakistanContract.mintBronze({ value: ethers.utils.parseEther("0.001") });
    const Bronze = await mintBronze;
    console.log(`Bronze Minted`);
}
async function MintSteel() {
    const mintSteel = wagmiPakistanContract.mintSteel({ value: ethers.utils.parseEther("0.002") });
    const Steel = await mintSteel;
    console.log(`Steel Minted`);
}
async function MintGold() {
    const mintGold = wagmiPakistanContract.mintGold({ value: ethers.utils.parseEther("0.003") });
    const Gold = await mintGold;
    console.log(`Gold Minted`);
}
async function MintDiamond() {
    const mintDiamond = wagmiPakistanContract.mintDiamond({ value: ethers.utils.parseEther("0.004") });
    const Diamond = await mintDiamond;
    console.log(`Diamond Minted`);
}
async function MintPlatinum() {
    const mintPlatinum = wagmiPakistanContract.mintPlatinum({ value: ethers.utils.parseEther("0.005") });
    const Platinum = await mintPlatinum;
    console.log(`Platinum Minted`);
}