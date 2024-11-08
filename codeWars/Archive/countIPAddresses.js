/* Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.

Examples
ipsBetween("10.0.0.0", "10.0.0.50")  ===   50 
ipsBetween("10.0.0.0", "10.0.1.0")   ===  256 
ipsBetween("20.0.0.10", "20.0.1.0")  ===  246 */

function ipsBetween(start, end) {
    start = start.split('.')
    end = end.split('.')
    let difference = []
    let count = 0
    for (let i = 0; i < start.length; i++) {
        start[i] = parseInt(start[i])
        end[i] = parseInt(end[i])
        difference.push(end[i]-start[i])
    }
    for (let i = 0; i < difference.length; i++) {
        count += difference[i]* 256 ** (difference.length - i-1)
    }
    return count
}

//console.log(ipsBetween("10.0.0.0", "10.0.0.50"));
 console.log(ipsBetween("20.0.0.10", "20.0.1.0"));