// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TraceabilityContract {
    struct FarmerDetails {
        string farmerId;
        string farmerName;
        string pickupLocation;
    }

    struct ProductDetails {
        string contractID;
        string productName;
        string quantity;
        string quality;
        FarmerDetails farmerDetails;
        string offTakerID;
        string logisticID;
        string[] bagNumbers;
        string[] bagQuantities;
    }

    mapping(bytes32 => ProductDetails) private products;

    event ProductAdded(bytes32 indexed hashKey);

    //to add product details to blockchain
    function addProduct(
        string memory _contractID,
        string memory _productName,
        string memory _quantity,
        string memory _quality,
        string memory _farmerId,
        string memory _farmerName,
        string memory _pickupLocation,
        string memory _offTakerID,
        string memory _logisticID,
        string[] memory _bagNumbers,
        string[] memory _bagQuantities
    ) public returns (bytes32) {
        bytes32 hashKey = keccak256(
            abi.encodePacked(
                _contractID,
                _productName,
                _quantity,
                _quality,
                _farmerId,
                _farmerName,
                _pickupLocation,
                _offTakerID
            )
        );
        if (bytes(products[hashKey].contractID).length != 0) {
            // Product already exists, return the existing hashKey
            return hashKey;
        }
        products[hashKey] = ProductDetails(
            _contractID,
            _productName,
            _quantity,
            _quality,
            FarmerDetails(_farmerId, _farmerName, _pickupLocation),
            _offTakerID,
            _logisticID,
            _bagNumbers,
            _bagQuantities
        );

        emit ProductAdded(hashKey);
        return hashKey;
    }

    //update product details and Qr
    function updateProductDetails(
        bytes32 _oldHashKey,
        string memory _contractID,
        string memory _newQuality,
        string memory _newQuantity
    ) public returns (bytes32) {
        ProductDetails storage product = products[_oldHashKey];
        require(
            bytes(product.contractID).length != 0,
            "Product does not exist"
        );

        bytes32 newHashKey;
        if (bytes(_newQuality).length > 0 && bytes(_newQuantity).length > 0) {
            newHashKey = keccak256(
                abi.encodePacked(
                    _contractID,
                    _oldHashKey,
                    _newQuantity,
                    _newQuality
                )
            );
        } else if (bytes(_newQuality).length > 0) {
            newHashKey = keccak256(
                abi.encodePacked(_contractID, _oldHashKey, _newQuality)
            );
        } else if (bytes(_newQuantity).length > 0) {
            newHashKey = keccak256(
                abi.encodePacked(_contractID, _oldHashKey, _newQuantity)
            );
        } else {
            revert("Either quality or quantity should be updated");
        }

        require(
            bytes(products[newHashKey].contractID).length == 0,
            "Product with new quality and quantity already exists"
        );

        ProductDetails storage newProduct = products[newHashKey];
        newProduct.contractID = product.contractID;
        newProduct.productName = product.productName;
        newProduct.quantity = bytes(_newQuantity).length > 0
            ? _newQuantity
            : product.quantity;
        newProduct.quality = bytes(_newQuality).length > 0
            ? _newQuality
            : product.quality;
        newProduct.farmerDetails = product.farmerDetails;
        newProduct.offTakerID = product.offTakerID;
        newProduct.bagNumbers = product.bagNumbers;
        newProduct.bagQuantities = product.bagQuantities;

        emit ProductAdded(newHashKey);
        return newHashKey;
    }

    //retrieve block details

    function getProductDetails(bytes32 hashKey)
        public
        view
        returns (ProductDetails memory)
    {
        return products[hashKey];
    }
}

//0x7cc80e0C1BEc0dB2B4E65A6f310c66eEcd99B52b
