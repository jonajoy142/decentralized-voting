// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TraceabilityContract {
    struct ProductDetails {
        uint256 contractID;
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
 
 //to add product details to blockchain
    function addProduct(
        uint256 _contractID,
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
        bytes32 hashKey = keccak256(abi.encodePacked(_contractID, _productName, _quantity, _quality, _farmerId, _farmerName, _pickupLocation, _deliveryAddress, _offTakerName));
        require(products[hashKey].contractID == 0, "Product already exists");

        products[hashKey] = ProductDetails(
            _contractID,
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
 
 //update product details and Qr
  function updateProductDetails(    
    bytes32 _oldHashKey,
    uint256 _contractID,
    string memory _newQuality,
    string memory _newQuantity
) public returns (bytes32) {
    ProductDetails storage product = products[_oldHashKey];
    require(product.contractID != 0, "Product does not exist");

    
    bytes32 newHashKey;
    if (bytes(_newQuality).length > 0 && bytes(_newQuantity).length > 0) {
        newHashKey = keccak256(abi.encodePacked(
            _contractID,
            _oldHashKey,
            _newQuantity,
            _newQuality
        ));
    } else if (bytes(_newQuality).length > 0) {
        newHashKey = keccak256(abi.encodePacked(
            _contractID,
            _oldHashKey,
            _newQuality
        ));
    } else if (bytes(_newQuantity).length > 0) {
        newHashKey = keccak256(abi.encodePacked(
            _contractID,
            _oldHashKey,
            _newQuantity
        ));
    } else {
        revert("Either quality or quantity should be updated");
    }

    require(
        products[newHashKey].contractID == 0,
        "Product with new quality and quantity already exists"
    );

    ProductDetails storage newProduct = products[newHashKey];
    newProduct.contractID = product.contractID;
    newProduct.productName = product.productName;
    newProduct.quantity = bytes(_newQuantity).length > 0 ? _newQuantity : product.quantity;
    newProduct.quality = bytes(_newQuality).length > 0 ? _newQuality : product.quality;
    newProduct.farmerId = product.farmerId;
    newProduct.farmerName = product.farmerName;
    newProduct.offTakerName = product.offTakerName;
    newProduct.pickupLocation = product.pickupLocation;
    newProduct.deliveryAddress = product.deliveryAddress;
    newProduct.bagNumbers = product.bagNumbers;
    newProduct.bagQuantities = product.bagQuantities;

    emit ProductAdded(newHashKey);
    return newHashKey;
}

   //retrieve block details

    function getProductDetails(bytes32 hashKey) public view returns (ProductDetails memory) {
        return products[hashKey];
    }
}

//0x962Dd956c399618601F7171A87f9ACfd42E0F7b0

//0xdac406aa1730c747d568207d9a8a798bd4150d94c5f8b85ac5038daf4a54e5b3


//new

//0x1498b4170F0B304D3f7C857B130483738413462a
//0x0c4297125f7ad68b93b13c8060681c9188ba530d72dd35ffb767f4e2ddae2937