exports.sum = function(){
    var result = 0;
    for (var i=0; i<arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};

exports.div = function(a, b){
    return a / b;
};