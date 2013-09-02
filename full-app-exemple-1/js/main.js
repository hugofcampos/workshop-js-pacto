require.config({
});

require(["purchase"],
  function(purchase){
    purchase.purchaseProduct();
  }
);