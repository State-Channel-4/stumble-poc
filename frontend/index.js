import { ethers } from "./ethers-5.2.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const connectButton = document.getElementById("connectButton");
const submitUrlButton = document.getElementById("submitUrlButton");
const getAllUrlsButton = document.getElementById("getAllUrlsButton");

connectButton.onclick = connect;
submitUrlButton.onclick = submiturl;
getAllUrlsButton.onclick = getAllUrls;

async function connect() {
  if (typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } catch (error) {
      console.log(error);
    }
    connectButton.innerText = "Connected";
    const accounts = await ethereum.request({ method: "eth_accounts" });
    console.log(accounts);
  } else {
    console.log("no metamask");
    fundButton.innerText = "Please install metamask";
  }
}

async function submiturl() {
  let url = document.getElementById("stumble-url").value;
  console.log("submit url : ", url);
  if (typeof window.ethereum != "undefined") {
    // provider / connection to the blockchain
    // signer / wallet / someone with some gas
    // contract that we are interacting with
    // ^ ABI & address
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    console.log("signer : ", signer);
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.submitURL(url);
      // listen for tx to be mined
      // wait for tx to finish
      await listenForTransactionMined(transactionResponse, provider);
      console.log("Done!!");
    } catch (error) {
      console.log(error);
    }
  }
}

async function getAllUrls() {
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const urls = await contract.allURLs();
    console.log(urls);
  }
}

function listenForTransactionMined(transactionResponse, provider) {
  console.log(`Mining ${transactionResponse.hash} ...`);
  // create a listener for the blockchain and wait for it to finish
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        `Completed with ${transactionReceipt.confirmations} confirmations`
      );
      resolve();
    });
  });
}
