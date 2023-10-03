export const CONTRACT_ADDRESS = "0x80015f93e681242E4d1Fa5aAD48b54b3Fe1FbEd4";
export const abi2 = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_quantity",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_quality",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_farmerId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_farmerName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_pickupLocation",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_deliveryAddress",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_offTakerName",
				"type": "string"
			},
			{
				"internalType": "string[]",
				"name": "_bagNumbers",
				"type": "string[]"
			},
			{
				"internalType": "string[]",
				"name": "_bagQuantities",
				"type": "string[]"
			}
		],
		"name": "addProduct",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "hashKey",
				"type": "bytes32"
			}
		],
		"name": "ProductAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hashKey",
				"type": "bytes32"
			},
			{
				"internalType": "string",
				"name": "newQuantity",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "newQuality",
				"type": "string"
			}
		],
		"name": "updateProductDetails",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "hashKey",
				"type": "bytes32"
			}
		],
		"name": "getProductDetails",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "productId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "productName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "quantity",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "quality",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "farmerId",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "farmerName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "pickupLocation",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "offTakerName",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "deliveryAddress",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "bagNumbers",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "bagQuantities",
						"type": "string[]"
					}
				],
				"internalType": "struct TraceabilityContract.ProductDetails",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];