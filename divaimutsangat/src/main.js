//JavaScrip --> Programming language
/*
Programming language
1. input & output
2.variable and data type
3.condition(if,else)
4. looping(pengulangan)
5.function
*/

//output
//1. using console.log()
console.log("Hello world!");
console.log("my name is diva");
console.log(5+4);

//2.alert()
alert("welcome to my website")

//3. document
document.write()

//4. using innerHTML
//document.getElementByID("id_name").innerHTML="text";
document.getElementById("first").innerHTML="My Name Is Diva";

//variable --> to store data

//let
let name="Diva";
name="Aisyahtun Nadhifa";
console.log(name)
let a = 4;
let b = 3;
let c = a+b;
let d = a*b;
console.log(a+b);
console.log(c);
console.log(c+d);
let address= "solo";
console.log("my name is " + name +" i am from "+ address);

let _oke1 = 8;
let OKE = 7;
console.log(_oke1);
console.log(OKE);

const school="SMA ABBS SKA"
console.log(school);

/*
penjumlahan (+)
pengurangan (-)
perkalian (*)
pembagisn (/)
modulo (%)
perpangkatan (**)
*/

let number1 = 100;
let number2 = 250;
console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);
console.log(number1 ** 2)

//calculator BMI

//variable =let, ver, const
let angka = 5;
angka =6;
//untuk yg terakhir let angka = 6;- ga usah di tambahin let soalya ga bisa 
console.log(angka);

var angka1 =5;
var angka1=6;
console.log(angka1);
//const (constant)= ga bisa dirubah lagi 

const angka2 = 5;
//angka2 = 6;(tidak boleh)
console.log(angka2);

/*Data Type
Kayak kotak penyimpanan. Kayak wadah nya apa tipenya apa.
1. String = Character --> using ""/''
2. Number (2) = a.Integer = (Bilangan Bulat) 
                 b. float = (Bilangan Pecahan)
3. Boolean = isinya cuman ada 2 = true or false
*/
let data ="SMA ABBS Surakata" // string
let data1 = "100"; // string
let data3 = 50; // integer
let data4 = 25.25; // float --> karna angka dan ga ada tanda petiknya 
let data5 =false; // boolean

/*Comparison Operator --> the output the comparizionor if else , wahta happeng
- Equal (==)
-Not Equal (!=)
-Greather than (>)
Greather than  or equal(>=)
less than (<)
less than or equal (<=)
*/
//example

 let x = 5;
console.log(x == 5)
console.log(x !=5)
console.log ( x > 10)
console.log ( x >= 10)
console.log ( x < 10)
console.log ( x <= 10)

  /*
  logical Operators
  -and (&&) --> kalau 3 true 1 false brrti itu dah masuk false
  -or (!!) --> kalau semisal salah 1 kondisi true, dia udh masuk trus
  -not (!) --> kebalikan kyk A itu true 'A itu False
  */

  //Condition 
  /*1. if (1 condition) --> pakai ini klau cuman 1 kondisi aja 
        if (condition){ 
            action;
        }
*/

            let time = 6;
if (time <= 6){
    console.log("Good Morning");
}

/*2. if (2 conditions)
        if (condition 1){
      action 1;
    }
    else{
        actions 2;
    }

*/

/*kondisi 
1. Jika hari ini hujan, maka membawa payung
2.Jika hari ini tidak hujan, maka tidak membawa payung.
*/