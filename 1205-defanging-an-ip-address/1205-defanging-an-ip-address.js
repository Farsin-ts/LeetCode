/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    
    let copy = ''
    
    let copy1 = ''
    
    for(let i=0;i<address.length;i++) {
        
       copy = address.split('.')
       
       copy1 =  copy.join("[.]")
    }
    
    return copy1
    
}
