
module.exports = function(req,callback,stripe){
    stripe.charges.create({
    amount: 100, //$1.00 = 1000 -> Pennies
    currency: "usd",
    source: req,
    description: "Example charge"
    }, function(err, charge) {
      callback(err,charge);
    });
}