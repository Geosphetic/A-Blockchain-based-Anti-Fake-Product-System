pragma solidity >=0.5.16;

contract AntiFake {

    struct Product {
        uint id;
        string name;
        string manufacturer;
        uint remCount;
        string decision;
        string quantity;
        string size;
        string product_id;
    }

    mapping(uint => Product) public products;
    
    mapping(address => bool) public clients;

    uint public productsCount;

    uint public remCount;

    string public product;

    string public decision;

    constructor() public {}

    event votedEvent(
        
        uint indexed _productId
    
    );

    function addProduct(string memory _name, string memory _manufacturer, string memory _quantity, string memory _size, string memory _product_id) public {
        
        productsCount++;
        
        decision = "Accepted";
        
        products[productsCount] = Product(productsCount, _name, _manufacturer, 0, decision,  _quantity, _size, _product_id);
    }

    function rejectProduct(string memory _name, string memory _manufacturer, string memory reject_reason, string memory _product_id) public {
        
        productsCount++;
        
        decision = "Rejected";
        
        products[productsCount] = Product(productsCount, _name, _manufacturer , 0, decision, reject_reason, " ", _product_id);
    }

    function remProduct(string memory _name, string memory _manufacturer, string memory _details, uint count) public {
        
        remCount = count ;
        
        decision = "Accepted";
        
        products[remCount] = Product(count, _name, _manufacturer, count, decision, _details, " ", "OK");
    }
    
     function getProduct(uint _productId) public view returns (uint, string memory, string memory, uint, string memory, string memory, string memory, string memory) {
        
        require(_productId > 0 && _productId <= productsCount);

        Product memory product = products[_productId];

        return (product.id, product.name, product.manufacturer, product.remCount, product.decision, product.quantity, product.size, product.product_id);
    }

    function reject(uint _productId) public {
        
        require(!clients[msg.sender]);

        require(_productId > 0 && _productId <= productsCount);
        
        clients[msg.sender] = true;
        
        products[_productId].remCount++;
    
        emit votedEvent(_productId);
    }

}
