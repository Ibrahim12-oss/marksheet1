var a=+prompt("Enter 1st subject number ")
var b = +prompt("Enter 2nd subject number ");
var c = +prompt("Enter 3rd subject number ");
var d = +prompt("Enter 4th subject number ");
var e = +prompt("Enter 5th subject number ");
document.write("1st Subject nukber "+a)
document.write("<br/>2nd Subject nukber " + b);
document.write("<br/>3rd Subject nukber " + c);
document.write("<br/>4th Subject nukber " + d);
document.write("<br/>5th Subject nukber " + e);
var total
var per
function tota(){
    var total=parseInt(a+b+c+d+e);
    return total;
}
total=tota();

function percentage(a){
    per=a/500*100
    return per
} 
var per=percentage(total);
document.write("<br/>Total numkber is "+total)
document.write("<br/>Percentage is "+per);