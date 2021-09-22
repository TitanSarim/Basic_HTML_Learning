

//var name = "sarim";
//var age = 21;
//var shootingScore = 45.6;

    //var message = "my name is " + name + "iam " + age + "years old";
        //alert(message);


    // var firstname = "sarim";
    // var lastname = "zahid";
    // var dateofbirth = "01-03-2001"
    // var age = 21;
    // var profileImgUrl = "https://www.facebook.com/sarim.zahid.333/"
    
    // var loginwelcomeMessage = "Welcom" + firstname + ". happy " + age + "birthday" + profileImgUrl + "";
    
    // console.log(loginwelcomeMessage);

//--------------------------------------------------------------------------------------------------------------------//
    
// var sum = 10  + 5;
// var sub  = 15-10
// var mul = 50 / 10;
// var mod = 10 % 3;
// var mess = "10 /3 = 3 wth a reminder of "+mod;

// var result = 10  * ((5+3)-4) - 500 ;

// console.log(result);


//--------------------------------------------------------------------------------------------------------------------//

// var balances = [50.45, 4000.12, -300.50];
// var studentNames = ["Timmy", "Azee","Sarim"];

// var naughtyList = [];

// naughtyList.push(studentNames[0]);

// var index = naughtyList.indexOf["Timmy"];

// console.log(naughtyList);
// if(index > -1){
//     naughtyList.splice(index, -1);
// }

// console.log(naughtyList);

//#########################################################

// var myaccount = 300;
// var nikesdshoes = 799.23;
// var coupon = 500;

// if (nikesdshoes <= myaccount){
//     myaccount -= nikesdshoes;
//     console.log("We jist baought some shoes ");
//     console.log("account balance " +myaccount);
// }else if(nikesdshoes - coupon <= myaccount){
//     console.log("We just baught some new shoes with coupn")
//     myaccount -= nikesdshoes - coupon;
//     console.log("account balance " + myaccount);
// }else{
//     console.log("you broke")
// }

//###########################################################

// var val1 = 23;
// var val2 = "23";

// if(val1 === val2){
//     console.log("These are the sames ");
// }else{
//     console.log("One of these is not like each other")
// }

//############################################################

// if(1 === 1 && 2 === 2){
//     console.log("These are both true");
// }
// if(true && true){
//     console.log("These are the same")
// }

// if(1 === 3 || "joe" === "joe"){
//     console.log("one of these are true ");
// }

//############################################################

// var cat1 = 5;
// var cat2 = 10;
// var cat3 = 1;
// var disable = true;

// if(cat1 > cat2 && cat1 > cat3 &&  !disable){
//     console.log("cat 1 is the cutest");

// }else if(cat2 > cat1 && cat2 >  cat3 && !disable){
//     console.log("cat 2 is the cutest");   
// }
// else if(cat3 > cat1 && cat3 > cat2 || disable){
//     console.log("cat 3 is the cutest");
// }


//#############################################################

//#########################
//#########Arrays##########
//#########################

// var balances = [50.45, 4000.12, -300.50];

// var student1 = "Timmy";
// var student2 = "Sarim";
// var student3 = "azeem";

// var students  = ["Timmy","Sarim","azeem"];

// var naughtyList = [];

// naughtyList.push(students[0]);

// var index = naughtyList.indexOf("Timmy");


// if(index < -1){
//     naughtyList.splice(index, 1);
// }

// console.log(naughtyList);

//###############################################################

//############################
//#########For Loop###########
//############################


// var total = 10;

// for (var x = 0; x< total; x++){

//     console.log(x);
// }

// var students = ["sarim","dani","bilu","heimer","smith"];

// for(var index = 0; index <= students.length; index++){
//     console.log(students[index]);
// }


var length1 = 15;
var width1 = 10;
var area1 = length1 * width1;

var length2 = 15;
var width2 = 10;
var area2 = length2 * width2;


console.log(area1);
console.log(area2);

function area(length, width){
    return length * width;
}

//array of area
var rectangles = []
rectangles.push(area(10,15));
rectangles.push(area(14,15));
rectangles.push(area(20,15));
rectangles.push(area(30,15));


console.log(rectangles);

var bank = 500;
function maketransaction(priceOfSale){
    if(priceOfSale <= bank){
        bank -= priceOfSale;
        console.log("Purchase SuccessFul");
    }else{
        console.log("Insufficient Balance")
    }
}

console.log(bank);
maketransaction(79.00);

maketransaction(2.23);
console.log(bank);

maketransaction(10.45);
console.log(bank);

console.log(bank);
maketransaction(450.00);

var transection = function(priceOfSale){
    if(priceOfSale <= bankBalance){
        console.log("Purchase successfull");
    }else{
        console.log("Insufficent BAlanace");
    }
};

var printcustomerName = function(first, last){
    console.log("First name: "+ first + "last name " + last);
}

var applyforcradit = function(cradirScore, soul){
    //---call sime funcition to process application
}

var bankOperations = [];
bankOperations.push(transection);
bankOperations.push(printcustomerName);
bankOperations.push(applyforcradit);


