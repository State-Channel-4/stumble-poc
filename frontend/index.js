import { ethers } from "./ethers-5.2.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const connectButton = document.getElementById("connectButton");
const submitUrlButton = document.getElementById("submitUrlButton");
const getAllUrlsButton = document.getElementById("getAllUrlsButton");
const stumbleButton = document.getElementById("stumbleButton");
const openChannelButton = document.getElementById("openChannel");
const closeChannelButton = document.getElementById("closeChannel");

connectButton.onclick = connect;
submitUrlButton.onclick = submiturl;
getAllUrlsButton.onclick = getAllUrls;
stumbleButton.onclick = stumble;
openChannelButton.onclick = openChannel;
closeChannelButton.onclick = closeChannel;

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
    connectButton.innerText = "Please install metamask";
  }
}

async function openChannel() {
  openChannelButton.disabled = true;
  closeChannelButton.disabled = false;
  window.localStorage.setItem("upvote_urls", JSON.stringify([]));
  window.localStorage.setItem("downvote_urls", JSON.stringify([]));
  window.localStorage.setItem("submit_urls", JSON.stringify([]));
  console.log(Object.keys(localStorage));
}

async function closeChannel() {
  openChannelButton.disabled = false;
  closeChannelButton.disabled = true;
  var upvotes = [...new Set(JSON.parse(window.localStorage.upvote_urls))];
  var downvotes = [...new Set(JSON.parse(window.localStorage.downvote_urls))];
  var submit_urls = [...new Set(JSON.parse(window.localStorage.submit_urls))];
  console.log("data : ", upvotes, downvotes, submit_urls);

  // clear localstorage
  window.localStorage.clear();

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
      const transactionResponse = await contract.update_fields(
        upvotes,
        downvotes,
        submit_urls
      );
      // listen for tx to be mined
      // wait for tx to finish
      await listenForTransactionMined(transactionResponse, provider);
      console.log("Done!!");
    } catch (error) {
      console.log(error);
    }
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
    populateTable(urls);
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

function populateTable(data) {
  // Clear any previously created table
  var oldTable = document.querySelector("table");
  if (oldTable) {
    oldTable.remove();
  }

  var table = document.createElement("table");
  for (var i = 0; i < data.length; i++) {
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var text = document.createTextNode(data[i]);
    cell.appendChild(text);
    row.appendChild(cell);

    // create upvote button
    var upvoteBtn = document.createElement("button");
    upvoteBtn.innerHTML = "Upvote";
    upvoteBtn.setAttribute("style", "border-radius: 10px; font-size: large;");
    upvoteBtn.onclick = (function (value) {
      return function () {
        // handle upvote logic
        console.log("upvoted: " + value);
        //you can do your update here
        upvote_url(value);
      };
    })(data[i]);
    row.appendChild(upvoteBtn);

    // create downvote button
    var downvoteBtn = document.createElement("button");
    downvoteBtn.innerHTML = "Downvote";
    downvoteBtn.setAttribute("style", "border-radius: 10px; font-size: large;");
    downvoteBtn.onclick = (function (value) {
      return function () {
        // handle downvote logic
        console.log("downvoted: " + value);
        //you can do your update here
        downvote_url(value);
      };
    })(data[i]);
    row.appendChild(downvoteBtn);

    // create Get Count button
    var getCountBtn = document.createElement("button");
    getCountBtn.innerHTML = "Get Count";
    getCountBtn.setAttribute("style", "border-radius: 10px; font-size: large;");
    getCountBtn.onclick = (function (value) {
      return async function () {
        // handle Get Count logic
        console.log("count of : " + value);
        //you can display the count here
        var count = await get_count(value); // call the function to get the count;
        console.log("count of : " + value + " is " + count);
      };
    })(data[i]);
    row.appendChild(getCountBtn);

    table.appendChild(row);
  }
  document.body.appendChild(table);
  document.body.appendChild(document.createElement("hr"));
}

async function upvote_url(url) {
  if (typeof window.ethereum != "undefined") {
    var upvote = JSON.parse(window.localStorage.upvote_urls);
    upvote.push(url);
    window.localStorage.setItem("upvote_urls", JSON.stringify(upvote));
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(contractAddress, abi, signer);
    // const upvoted = await contract.upvoteURL(url);
    // console.log(upvoted);
  }
}

async function downvote_url(url) {
  if (typeof window.ethereum != "undefined") {
    var downvote = JSON.parse(window.localStorage.upvote_urls);
    downvote.push(url);
    window.localStorage.setItem("downvote_urls", JSON.stringify(downvote));
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer = provider.getSigner();
    // const contract = new ethers.Contract(contractAddress, abi, signer);
    // const upvoted = await contract.downvoteURL(url);
    // console.log(upvoted);
  }
}

async function get_count(url) {
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const upvoted = await contract.getcount(url);
    console.log(upvoted.toNumber());
    return upvoted.toNumber();
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

async function stumble() {
  let url = "";
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const array_length = await contract.urlArray_length();
    const index = getRndInteger(0, array_length.toNumber());

    url = await contract.urlArray_element(index);
    console.log(url);
  }
  var frame = document.querySelector("iframe");
  if (frame) {
    frame.remove();
  }

  // Create an iframe element
  const iframe = document.createElement("iframe");
  iframe.sandbox = "allow-same-origin allow-scripts";

  // Set the src attribute to the returned URL
  iframe.src = url;
  console.log(iframe.src);

  // Set the style of the iframe to take up the full width of the screen
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  //iframe.style.position = "absolute";
  iframe.style.top = "0";
  iframe.style.left = "0";
  iframe.style.zIndex = "1";

  // Append the iframe to the body of the HTML page
  document.body.appendChild(iframe);
}
