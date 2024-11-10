var hasGroupsSizeX = function(deck) {
    const freqs = buildFreqs(deck)
    const minFreq = calculateMinFreq(freqs)
    if(minFreq === 1) return false
    if(Object.keys(freqs).length === 1) return true

    const gcd = calculateGreatestCommonDivisor(Object.values(freqs))
    if(gcd === 1) return false
    for(let key in freqs) {
        if(freqs[key] % gcd !== 0) return false
    }
    return true
};

function buildFreqs(deck){
    const freqs = {}
    for(let elem of deck){
        freqs[elem] = freqs[elem] ? freqs[elem] + 1 : 1
    }
    return freqs
}

function calculateMinFreq(freqs){
    let min = Infinity
    for(let key in freqs){
        min = Math.min(freqs[key], min)
    }
    return min
}

function calculateGreatestCommonDivisor(values){
    let result = gcd(values[0], values[1])
    for(let i=2; i < values.length; i++){
        result = gcd(result, values[i])
    }
    return result
}

function gcd(a, b){
    return !b ? a : gcd(b, a % b)
}