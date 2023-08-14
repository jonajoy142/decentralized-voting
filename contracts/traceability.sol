// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TraceabilityContract {
    struct ProductDetails {
        uint256 productId;
        string productName;
        string quantity;
        string quality;
        uint256 farmerId;
        string farmerName;
        string pickupLocation;
        string deliveryAddress;
        string offTakerName;
        string[] bagNumbers;
        string[] bagQuantities;
    }

    mapping(bytes32 => ProductDetails) private products;

    event ProductAdded(bytes32 indexed hashKey);

    function addProduct(
        uint256 _productId,
        string memory _productName,
        string memory _quantity,
        string memory _quality,
        uint256 _farmerId,
        string memory _farmerName,
        string memory _pickupLocation,
        string memory _deliveryAddress,
        string memory _offTakerName,
        string[] memory _bagNumbers,
        string[] memory _bagQuantities
    ) public returns (bytes32) {
        bytes32 hashKey = keccak256(abi.encodePacked(_productId, _productName, _quantity, _quality, _farmerId, _farmerName, _pickupLocation, _deliveryAddress, _offTakerName));
        require(products[hashKey].productId == 0, "Product already exists");

        products[hashKey] = ProductDetails(
            _productId,
            _productName,
            _quantity,
            _quality,
            _farmerId,
            _farmerName,
            _pickupLocation,
            _deliveryAddress,
            _offTakerName,
            _bagNumbers,
            _bagQuantities
        );

        emit ProductAdded(hashKey);
        return hashKey;
    }

    function updateProductDetails(
        bytes32 hashKey,
        string memory newQuantity,
        string memory newQuality
    ) public {
        require(products[hashKey].productId != 0, "Product does not exist");
        products[hashKey].quantity = newQuantity;
        products[hashKey].quality = newQuality;
    }

    function getProductDetails(bytes32 hashKey) public view returns (ProductDetails memory) {
        return products[hashKey];
    }
}
