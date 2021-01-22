// Kilometer To Meter calculetd
function kilometerToMeter(n){
    var meter = n *1000;
    if (meter <= 0) {
        return 'Please enter a positive number';
    }
    return meter;
}
var result = kilometerToMeter(1); // You can check value by various number.
console.log(result);


/** Budget Calculator */
function budgetCalculator(watch, mobile, leptop){
    var total = (watch * 50) + (mobile * 100) + (leptop * 500);
    if (watch <= -1) {
        return 'Please enter a positive number'
    }  else if (mobile <= -1) {
        return 'Please enter a positive number'
    } else if (leptop <= -1) {
        return 'Please enter a positive number'
    }
    return total;
}
var sum = budgetCalculator(1,1,1); // You can check value by various number.
console.log(sum);




/** Hotel Cost Calculator */
function hotelCost(day){
    var totalCost= 0;
    if (day <= 10){
        totalCost = day * 100;
    } /**Second Part start */
    else if (day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
    } /** Third Part start*/ 
    else {
        var firstPart = 10 * 100; 
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        totalCost = firstPart + secondPart + thirdPart;
    }   /**End */
    return totalCost;
}
var result = hotelCost(50); // You can change 50 and put any number whatever you want.
console.log( result);




/**  Find out Large Word from Friends Name */
function megaFriend(friend){
    for(var i = 0; i < friend.length; i++){
        var maxWord = friend[i];
        if (maxWord.length > friend.length){
            friend = maxWord;
        }
    }
    return friend;
}
var friend = ['Abir', 'Rafi', 'Azharul','Tanvir' , 'Rahin', 'jafor'];
var resultt = megaFriend(friend);
console.log(resultt);
