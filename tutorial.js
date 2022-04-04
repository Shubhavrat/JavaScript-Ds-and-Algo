


function Reverse(){
   
    var getString = document.getElementById('value_input').value;
    let reversed =  getString.toString().split('').reverse().join('');
    
    document.getElementById('answer').innerHTML = reversed;
   
}

function palindrome(){
    var getPalindrome = document.getElementById('value_input').value;
    getPalindrome = getPalindrome.toLowerCase();
    let reversed_palindrome = getPalindrome.split('').reverse().join('');
    if(getPalindrome === reversed_palindrome){
    document.getElementById('answer').innerHTML = "YESS!! THE GIVEN VALUE IS PALINDROME";
    }
    else{
        document.getElementById('answer').innerHTML = "NO !! THE GIVEN VALUE IS NOT PALINDROME"
    }
    
}

function maximum(){
    var getMaxChar = document.getElementById('value_input').value;
    let chartCountObj = {};
        let maxChar = "";
        let maxCount = 0;
        for(let i =0;i<getMaxChar.length;i++){
            const char = getMaxChar[i];
    
        
        chartCountObj[char] = chartCountObj[char]+ 1 || 1;
        if(chartCountObj[char] > maxCount){
            maxChar = char;
            maxCount = chartCountObj[char];
        } 
    }
    document.getElementById('answer').innerHTML = maxChar;
    }   



