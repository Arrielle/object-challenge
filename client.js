// ["IL", 5000, 12]
// ["MN", 300, 3]
// ["NV", 25000, 1]

var State = function(state, revenue, locationCount) {
    this.state = state,
    this.revenue = revenue,
    this.locationCount = locationCount
    this.averageRevenue = function(){
      return (this.revenue / this.locationCount);
    }
}

var illinois = new State('IL', 5000, 12);
var minnesota = new State('MN', 300, 3);
var nevada = new State ('NV', 25000, 1);

console.log(illinois);
console.log(minnesota);
console.log(nevada);

console.log(illinois.averageRevenue());
console.log(minnesota.averageRevenue());
console.log(nevada.averageRevenue());
