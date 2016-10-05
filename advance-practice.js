var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [{
  name: "Telus",
  province: "BC",
  sales: [ 100, 200, 400 ]
},
{
  name: "Bombardier",
  province: "AB",
  sales: [ 80, 20, 10, 100, 90, 500 ]
},
{
  name: "Telus",
  province: "SK",
  sales: [ 500, 100 ]
}];

var sumArray = function(arr){
  var sum = 0;
  arr.forEach(function(n){
    sum += n;
  });
  return sum;
}

var salesTaxReport = function(salesData, taxRates) {
  var results = {};
  salesData.forEach(function(current){
    var salesSum = sumArray(current.sales);
    var taxes = salesSum * salesTaxRates[current.province];
    if(results.hasOwnProperty(current.name)){
      results[current.name].totalSales += salesSum;
      results[current.name].totalTaxes += taxes;
    } else {
      results[current.name] = {
        totalSales: salesSum,
        totalTaxes: taxes
      };
    }
  });
  return results;
}

var results = salesTaxReport(companySalesData, salesTaxRates);
console.log(results);
