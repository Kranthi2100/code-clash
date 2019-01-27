/**
 * q: find the longest common substring between s1, s2
 * AAVAVS, AAS => AAS
 * "", "ASA" => ""
 * AASDAS, AAD => AAD
 */

const runTests = require('../helper/test').runTests;

test_cases = [
  [["AAVAVS", "AAS"], "AAS"],
  [["", ""], ""],
  [["aaaaaaaa", "aa"], "aa"],
  [["ASDASD","DAS"], "DAS"],
  [["EFEFEFEEFF", "EEFF"], "EEFF"],
  [["", "AAdSDFS"], ""],
  [["AASDAS", "AAD"], "AAD"]
]

function findLargestCommonSubstring(s1, s2){
  longestSubstring = '';
  let cur = 0;
  let cur2 = 0;
  const len = s1.length;
  const len2 = s2.length;
  while(cur < len && cur2 < len2){
    if(s1[cur] === s2[cur2]){
      longestSubstring += s2[cur2]
      cur += 1;
      cur2 += 1;
    }else{
      cur += 1;
    }
  }
  return longestSubstring;
}


runTests(test_cases, findLargestCommonSubstring);
