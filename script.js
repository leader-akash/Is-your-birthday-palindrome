

function reverseStr(str){

    var charList = str.split('');
    var reversedList = charList.reverse('');
    var joinList = reversedList.join('');

    return joinList;

    // ****** or ***** in this func only we can chk palindrome

    // if(str === joinList){
    //    console.log(true);
    // }
    // else
    //     console.log(false);
}

function checkPalindrome(str){
    var reverse =reverseStr(str);
    return str === reverse;
}


// function dateToString(){
//     let bdate = dateOfBirth.value;
//     bdate= bdate.replaceAll("-", "");
//     console.log(bdate);

//     for(let i=0; i<bdate.length; i++){
//         if(bdate.charAt(4) < 10)
//         return bdate.charAt(5);
//     }
// }

// dateToString();



function convertDateToString(date){
    var dateInStr ={day: '', month: '', year: ''};

    if(date.day <10){
        dateInStr.day ='0' + date.day;
    }
    else{
        dateInStr.day = date.day.toString();
    }

    if(date.month <10){
        dateInStr.month ='0' + date.month;
    }
    else{
        dateInStr.monh = date.month.toString();
    }

    dateInStr.year = date.year.toString();
    return dateInStr;
}

    function getAllDateFormats(date){

        var dateStr =convertDateToString(date);

        var ddmmyyyy =dateStr.day +dateStr.month + dateStr.year;
        var mmddyyyy =dateStr.month +dateStr.day + dateStr.year;
        var yyyymmdd =dateStr.year +dateStr.month + dateStr.day;
        var ddmmyy =dateStr.day +dateStr.month + dateStr.year.slice(-2);
        var mmddyy =dateStr.month +dateStr.day + dateStr.year.slice(-2);
        var yymmdd =dateStr.year.slice(-2) +dateStr.month + dateStr.day;

        var ddmmyyyy =dateStr.day +dateStr.month + dateStr.year;
        return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    }


    function isPalindromeForAllDateFormats(date){
        var listOdPalindromes  = getAllDateFormats(date);

        var palindrome = false;

        for(let i=0; i<listOdPalindromes.length; i++){
            if(checkPalindrome(listOdPalindromes[i])){
                palindrome = true;
                break;
            }
        }

        return palindrome;

    }

    function isLeapYear(year){
        if(year % 400 === 0)
            return true;
        if(year %100 === 0)
            return false;
        if(year % 4 === 0)
            return true;
        
        return false;
    }
    // console.log(isLeapYear(2021));

    function getNextDate(date){
        var day = date.day +1;
        var month = date.month;
        var year = date.year;

        var daysInMonth = [31, 28,31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        if(month === 2){
            // check for leap year
            if(isLeapYear(year)){
                if(day > 29){
                    day=1;
                    month++;
                }
            }
            else{
                if(day > 29){
                    day=1;
                    month++;
                }
            }
        }
        else{
            if(day > daysInMonth[month -1]){
                day = 1;
                month++;
            }
            else{

            }
        }

        if(month > 12){
            month =1;
            year++;
        }
        return {
            day: day,
            month: month,
            year: year
        }
    }

    function nextPalindromeDate(date){
        var cnt =0; // count
        var nextDate = getNextDate(date);

        while(1){
            cnt++;
            var checkPalindrome = isPalindromeForAllDateFormats(nextDate);
            if(checkPalindrome){
                break;
            }
            nextDate = getNextDate(nextDate);
        }
        return [cnt, nextDate];
    }


    var date = {
        day: 28, 
        month: 02,
        year: 2020
        };

    // console.log(nextPalindromeDate(date));




    const dateOfBirth = document.querySelector("#dob");
    const checkButton = document.querySelector("#check");  
    const output = document.querySelector("#result")  


    function clickHandler(e){
        var strDate = dateOfBirth.value;
    
        if(strDate !== ''){
            var fulldate = strDate.split("-");
            
            var date = {
                day: Number(fulldate[2]),
                month: Number(fulldate[1]),
                year: Number(fulldate[0])
            };
    
            var checkPalindrome = isPalindromeForAllDateFormats(date);

            if(checkPalindrome){
                output.innerText = "Hurray !🥳 your Birthday is a Palindrome.🍻🍺"
            }
            else{
                var [cnt, nextDate] = nextPalindromeDate(date);
                output.innerText = "The next Palindrome date is " + nextDate.day + "-" + nextDate.month + "-" + nextDate.year + ", you missed it by " + cnt + " days!😟😯";

                // ******* or *******
                // var [cnt, nextDate] = nextPalindromeDate(date);
                // output.innerText = `The next Palindrome date is ${nextDate.day}-${nextDate.month}-${nextDate.year}, you missed it by ${cnt} days!😟😯`;

                // here use backticks (`) belo escape button not single quotes i.e (') in invaded commas to using $ symbol

                
            }
            
            
        }
    }
    
    checkButton.addEventListener('click', clickHandler);
    
