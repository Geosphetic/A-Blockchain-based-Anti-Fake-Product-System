pragma solidity >=0.5.16;

contract AntiFake {

    struct Product {
        uint id;
        string name;
        uint remCount;
        string details;
        string product_id;
    }

    mapping(uint => Product) public products;
    mapping(address => bool) public clients;

    uint public productsCount;

    string public product;

    constructor() public {}

    event votedEvent(
        uint indexed _productId
    );

    function addProduct(string memory _name, string memory _details, string memory _product_id) public {
        productsCount++;
        products[productsCount] = Product(productsCount, _name, 0, _details, _product_id);
    }

    function rejectProduct(string memory _name, string memory _details, string memory _product_id) public {
        productsCount++;
        products[productsCount] = Product(productsCount, _name, 0, _details, _product_id);
    }

    function reject(uint _productId) public {
        require(!clients[msg.sender]);

        require(_productId > 0 && _productId <= productsCount);
        
        clients[msg.sender] = true;
        
        products[_productId].remCount++;
    
        emit votedEvent(_productId);
    }

}