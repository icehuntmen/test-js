const { task } = require('./util');
const taskDescription = {
    name: 'repeatedDNASequences',
    description: "All DNA is composed of a series of nucleotides abbreviated as `A`, `C`,`G`, and `T`. In research, it can be useful to identify repeated sequences within DNA.Write a function to find all the 10-letter sequences (substrings) that occur more than once in a DNA molecule `s`, and return them in lexicographical order. These sequences can overlap.\n"
}
/**
 * Task: repeatedDNASequences
 * @description All DNA is composed of a series of nucleotides abbreviated as `A`, `C`,`G`, and `T`.
 * In research, it can be useful to identify repeated sequences within DNA.Write a function to find all
 * the 10-letter sequences (substrings) that occur more than once in a DNA molecule `s`, and return
 * them in lexicographical order. These sequences can overlap.
 * @example
 * For `s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"`,
 * the output should be`repeatedDNASequences(s) = ["AAAAACCCCC", "CCCCCAAAAA"]`.
 * @param s {String}
 * @return {[]}
 */
const repeatedDNASequences = s => {
    if(typeof s !== 'string') { return new Error(`Not the exact type "${typeof s}" for function, requires a string`);}
    if(s.length === 0 && s.length <= 5000 ) return []

    const seq = 10;
    const obj = {};
    const response = [];
    Object.entries(s).forEach((el,i) =>{
        const dna = s.slice(i,i + seq)
        obj[dna] = obj[dna] + 1 || 1;
        if(obj[dna] === 2){
            response.push(dna)
        }
    })

    return response;
}

// Run task
const s =  "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
task.run(repeatedDNASequences,taskDescription).set(s)
