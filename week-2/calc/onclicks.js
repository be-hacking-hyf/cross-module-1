var printVal = document.getElementById("print_val");
var addVal = document.getElementById("add_val");
var subtVal = document.getElementById("subt_val");
var multiVal = document.getElementById("multi_val");
var divVal = document.getElementById("div_val");

printVal.onclick = function() {print_vals(n1, n2);}
addVal.onclick = function() {do_math(n1, n2, add);}
subtVal.onclick = function() {do_math(n1, n2, subtract);}
multiVal.onclick = function() {do_math(n1, n2, multiply);}
divVal.onclick = function() {do_math(n1, n2, divide);}