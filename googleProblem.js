fs = require('fs');

var path = './e_also_big.in';

var data = fs.readFileSync(path,{encoding:'ascii'}).split('\n').map(function(i){
    var j = i.split(' ').map(function(k){
        return parseInt(k);
    });
    return j;
});

var constraints = {
    "sliceMaximum":data[0][0],
    "typesMaximum":data[0][1]
};
var typesofPizza = data[1]; //types of pizza and number of slices per pizza

//sort types by descending...
typesofPizza.sort(function(a,b){
    return b - a;
});

var sliceCount = 0;
//var typeCount = 0;
var types = [];
for(var i = 0; i < typesofPizza.length; i++){
    if(sliceCount + typesofPizza[i] <= constraints.sliceMaximum){
        //adding this type will not exceed the maximum number of slices
        if(types.length <= constraints.typesMaximum){
            //adding this type will not exceed the maximum number of types
            sliceCount += typesofPizza[i];
            types.push(i);
        }
    }
}
console.log("types of pizza used: "+types);
console.log("total number of slices used: "+sliceCount)

fs.writeFileSync('./e_also_big_output.in',types.length.toString()+'\n'+types.join(' '));

/*
expected output:
3 || 3 types of pizza
0 2 3 || ordering pizzas: S0, S2, and S3
*/