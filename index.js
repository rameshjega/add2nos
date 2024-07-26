module.exports = {
    sumOfNos: function(a, b) {
        if(!a){
            return `first value is empty or null`;
        }else if(!b){
            return `second value is empty or null`;
        }else{
            return a+b;
        }
    }
  };