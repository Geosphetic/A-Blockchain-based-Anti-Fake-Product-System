pragma solidity >=0.5.16;

contract AntiFake {

    struct Product {
        uint id;
        string name;
        uint remCount;
        string decision;
        string details;
        string product_id;
    }

    mapping(uint => Product) public products;
    mapping(address => bool) public clients;

    uint public productsCount;

    string public product;

    string public decision;

    constructor() public {}

    event votedEvent(
        uint indexed _productId
    );

    function addProduct(string memory _name, string memory _details, string memory _product_id) public {
        productsCount++;
        decision = "Accepted";
        products[productsCount] = Product(productsCount, _name, 0, decision,  _details, _product_id);
    }

    function rejectProduct(string memory _name, string memory reject_reason, string memory _product_id) public {
        productsCount++;
        decision = "Rejected";
        products[productsCount] = Product(productsCount, _name, 0, decision, reject_reason, _product_id);
    }

    function reject(uint _productId) public {
        require(!clients[msg.sender]);

        require(_productId > 0 && _productId <= productsCount);
        
        clients[msg.sender] = true;
        
        products[_productId].remCount++;
    
        emit votedEvent(_productId);
    }

}