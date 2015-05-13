(function() {
  'use strict';
  
  angular
    .module('app')
    .filter('total', total);
    
    function total() {
      return function (input, property) {
        var i;
        var total = 0;
        
        // If input is an array
        if (Object.prototype.toString.call( input ) === '[object Array]' 
            && typeof input[0] !== 'object'
            && !isNaN(input[0])) {
          i = input.length;
          while (i--)
            if (!isNaN(input[i])) {
              total += input[i];
            } else {
              throw 'There was a non-numeric value detected in your array';
            }
          return total;
        } 
        
        // If input is an array of objects
        else if (Object.prototype.toString.call( input ) === '[object Array]' 
            && Object.prototype.toString.call( input[0] ) === '[object Object]'
            && property !== undefined
            && !isNaN(input[0][property])) {
          i = input.length;
          while (i--)
            if (!isNaN(input[i][property])) {
              total += input[i][property];
            } else {
              throw 'There was a non-numeric value detected in your object';
            }
          return total;
        }
        
        // If input is an object with multiple properties
        else if (typeof input === 'object') {
          for (var k in input) {
            if (!isNaN(input[k])) {
              total += input[k];
            } else {
              throw 'There was a non-numeric value detected in your object';
            }
          }
          return total;
        } 
        
        // If input doesn't match a case above
        else {
          throw 'There was an error with your input. Only integers within arrays or objects are accepted';
        }
      };
    }
})();