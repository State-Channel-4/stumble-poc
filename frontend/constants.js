export const contractAddress = "0xe76d6953cd7b1b31a09efc13a07314d2df07b5d4";
export const abi = [
  {
    inputs: [],
    name: "allURLs",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
    ],
    name: "downvoteURL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getTopURLs",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
    ],
    name: "getcount",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
    ],
    name: "submitURL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "upvotes",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "downvotes",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "submit_urls",
        type: "string[]",
      },
    ],
    name: "update_fields",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_url",
        type: "string",
      },
    ],
    name: "upvoteURL",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "urlArray",
    outputs: [
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "int256",
        name: "voteCount",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "urlArray_element",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "urlArray_length",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "urlToMetadata",
    outputs: [
      {
        internalType: "string",
        name: "url",
        type: "string",
      },
      {
        internalType: "int256",
        name: "voteCount",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
