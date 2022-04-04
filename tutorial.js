
//-------------------------------------------------------- ARRAYS------------------------------------------------------------------------------------------//
// const sports = ['cricket', 'football','tennis', 'badminton'];
// // console.log(sports[1]);
// for (const el of sports){
//     console.log(el)
// }
// // const find_sport = sports.findIndex(el=>el==='cricket');
// // sports.push('hockey');
// // console.log(sports)

// delete_element = sports.splice(1,2);
// console.log(sports)




//-------------------------------------------SETS----------------------------------------------------------------------------------------//
// const names = new Set();
// names.add("Shubhvrat");
// names.add(1);
// names.add(1);
// for(const el of names){

//     console.log(el)
// }
// console.log(names.has(1));








//------------------------------------------OBJECTS-------------------------------------------------------------------------------------//
// const person = {name:"Shubhvrat", age:20, hobbies:['Cooking', 'Playing'] ,greet(){
//     console.log('Hi, my name is '+person.name+' and my age is '+person.age); 
// }};
// person.lastname = "Kulkarni";
// // delete person.age;
// console.log(person);
// person.greet();



//---------------------------------------REVERSE AN ARRAY----------------------------------------------------------------------------------
// function Reverse(str){
//     // const split_array = str.split("");
//     // split_array.reverse();
//     // const joint_array = str.join("");
//     // return joint_array
//     return str.reverse().join(' ');
//     // let res = "";
//     // for(let i=0; i<str.length;i++){
//     //     const char = str[i];
//     //     res = char + res;
        
//     // }
    
// }
// console.log(Reverse([1,2,3]));

// function reversed_int(n){
//     int = n.toString().split('').reverse().join('');
//     rev_int = parseInt(int);
//     if(n<0){
//        return rev_int*-1;
//     }
//     return rev_int;
// }
// console.log(reversed_int(-45))



//-------------------------------------------PALINDROME------------------------------------------------------------------------------------
// function plaindrome(str){
//     str = str.toLowerCase();
//     const reversed_value = str.split('').reverse().join('');
//     if(str==reversed_value){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(plaindrome('AlilA'));



// const fib = (n) =>{
//     if(n<=2){
//         return 1;
//     }
//     else{
//         return fib(n-1)+fib(n-2);
//     }
// // } 



// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(50));


// var twoCitySchedcost = function(costs){
//     let final = 0;
//     for(let i = 0;i<costs.length;i++){
//         for(let j=0;j<costs.length;j++){
//             if(costs[i][j] < costs[i][j+1]){
//                 final = costs[i][j] + final;
//             }
//             else{
//                 final = final+ costs[i][j+1] ;
//             }
//         }
//     }
//    return final;
// }

// console.log(twoCitySchedcost([10,20], [30,100], [40,50]));


// function sorted(arr){
//     const final = 0;
//     sorted_arr = sorted(arr);
//     for(let i =0; i<arr.length;i++){
       
//             if(sorted_arr[i]==sorted_arr[i+1]){
//                      final = final+1;
//             }
        
//     }
//     return final;
// }
// console.log(sorted(1,2,3,4,2,3,4,1));

// var isPalindrome = function(a){
   
//     var reversed_arr = a.split('').reverse().join('');
//     if(reversed_arr === a){
//         return true;
//     }
//     else{
//         return false
//     }
    
// };
// console.log(isPalindrome([1,2,3,4]));

// var containsDuplicate = function(a){
//     var sorted_arr = a.sort();
//     for(let i =0;i<a.length;i++){
        
//         if(sorted_arr[i] === sorted_arr[i+1]){
//             return true;
            
//         }
//         else{
            
//         }
//     }  
// }
// console.log(containsDuplicate([1,2,4,4]));



// function reverse(a){
//     let reversed = a.toString().split('').reverse().join('');
//     let reversed_int = parseInt(reversed);
//     if(a<0){
//         return reversed_int*-1;
//     }
//     return reversed_int  }
// console.log(reverse(1234));

// function Max(str){
//     let chartCountObj = {};
//     let maxChar = "";
//     let maxCount = 0;
//     for(let i =0;i<str.length;i++){
//         const char = str[i];

    
//     chartCountObj[char] = chartCountObj[char]+ 1 || 1;
//     if(chartCountObj[char] > maxCount){
//         maxChar = char;
//         maxCount = chartCountObj[char];
//     } 
// }
//     return maxChar;
// }


// console.log(Max("Hello"));

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



