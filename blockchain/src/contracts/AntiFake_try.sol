pragma solidity >=0.5.16;

contract AntiFake_test {

    struct Product {
        uint id;
        string name;
        string manufacturer;
        string details;
        bool accepted;
        bool rejected;
    }

    mapping(uint => Product) public products;
    mapping(address => bool) public voters;

    uint public productsCount;

    event ProductAdded(
        uint indexed productId,
        string name,
        string manufacturer,
        string details
    );

    event ProductAccepted(
        uint indexed productId
    );

    event ProductRejected(
        uint indexed productId
    );

    function addProduct(string memory name, string memory manufacturer, string memory details) public {
        productsCount++;

        products[productsCount] = Product({
            id: productsCount,
            name: name,
            manufacturer: manufacturer,
            details: details,
            accepted: false,
            rejected: false
        });

        emit ProductAdded(productsCount, name, manufacturer, details);
    }

    function acceptProduct(uint productId) public {
        require(productId > 0 && productId <= productsCount, "Invalid product ID");
        require(!products[productId].accepted, "Product is already accepted");

        products[productId].accepted = true;

        emit ProductAccepted(productId);
    }

    function rejectProduct(uint productId) public {
        require(productId > 0 && productId <= productsCount, "Invalid product ID");
        require(!products[productId].rejected, "Product is already rejected");

        products[productId].rejected = true;

        emit ProductRejected(productId);
    }

    function voteToReject(uint productId) public {
        require(productId > 0 && productId <= productsCount, "Invalid product ID");
        require(!voters[msg.sender], "You have already voted for this product");

        voters[msg.sender] = true;

        if (isRejected(productId)) {
            products[productId].rejected = true;
            emit ProductRejected(productId);
        }
    }

    function isRejected(uint productId) public view returns (bool) {
        return voters[msg.sender] && !products[productId].accepted && !products[productId].rejected;
    }

    function getProductStatus(uint productId) public view returns (string memory) {
        if (products[productId].rejected) {
            return "This product is rejected";
        } else if (products[productId].accepted) {
            return "This product is approved";
        } else {
            return "This product is pending";
        }
    }
}
