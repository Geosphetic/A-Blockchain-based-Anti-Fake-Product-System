var AntiFake = artifacts.require("AntiFake");

contract("AntiFake", function(accounts){
    var productInstance;

    it("intializes with three products", function(){
        return AntiFake.deployed().then(function (instance){
            return instance.productsCount();
        }).then(function(count){
            assert.equal(count, 3);
        })
    });

    it("it initializes the products with the correct values", function() {
        return AntiFake.deployed().then(function(instance) {
          productInstance = instance;
          return productInstance.products(1);
        }).then(function(product) {
          assert.equal(product[0], 1, "contains the correct id");
          assert.equal(product[1], "Product1", "contains the correct name");
          assert.equal(product[2], 0, "contains the correct votes count");
          return productInstance.products(2);
        }).then(function(product) {
          assert.equal(product[0], 2, "contains the correct id");
          assert.equal(product[1], "Product2", "contains the correct name");
          assert.equal(product[2], 0, "contains the correct votes count");
        });
    });

    it("allows a client to cast a reject", function() {
        return AntiFake.deployed().then(function(instance) {
          productInstance = instance;
          productId = 1;
        //   console.log(accounts[0]);
          return productInstance.vote(productId, { from: accounts[0] });
        }).then(function(receipt) {
          assert.equal(receipt.logs.length, 1, "an event was triggered");
          assert.equal(receipt.logs[0].event, "rejectedEvent", "the event type is correct");
          assert.equal(receipt.logs[0].args._productId.toNumber(), productId, "the product id is correct");
          return productInstance.clients(accounts[0]);
        }).then(function(rejected) {
          assert(rejected, "the client was marked as rejected");
          return productInstance.products(productId);
        }).then(function(product) {
          var remCount = product[2];
          assert.equal(remCount, 1, "increments the product's reject count");
        })
    });

    it("throws an exception for invalid products", function() {
        return AntiFake.deployed().then(function(instance) {
          productInstance = instance;
          return productInstance.vote(99, { from: accounts[1] })
        }).then(assert.fail).catch(function(error) {
          assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
          return productInstance.products(1);
        }).then(function(product1) {
          var remCount = product1[2];
          assert.equal(remCount, 1, "product 1 did not receive any votes");
          return productInstance.products(2);
        }).then(function(product2) {
          var remCount = product2[2];
          assert.equal(remCount, 0, "product 2 did not receive any votes");
        });
    });
    
    it("throws an exception for double rejecting", function() {
        return AntiFake.deployed().then(function(instance) {
          productInstance = instance;
          productId = 2;
          productInstance.vote(productId, { from: accounts[1] });
          return productInstance.products(productId);
        }).then(function(product) {
          var remCount = product[2];
          assert.equal(remCount, 1, "accepts first reject");
          // Try to vote again
          return productInstance.vote(productId, { from: accounts[1] });
        }).then(assert.fail).catch(function(error) {
          assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
          return productInstance.products(1);
        }).then(function(product1) {
          var remCount = product1[2];
          assert.equal(remCount, 1, "product 1 did not receive any rejects");
          return productInstance.products(2);
        }).then(function(product2) {
          var remCount = product2[2];
          assert.equal(remCount, 1, "product 2 did not receive any rejects");
        });
    });

});
