$(document).ready(function() {
   $("#mugen").hide().show(3000);
   $("#text_box").css('background-color', 'black');
   var hold = $("#text_box").val();
   // alert(hold);   
});

$(function() {
   var list = [
      "Option2",
      "Dragons"
   ];
   $("#text_box").autocomplete({
      source: list
   });
});

function populate(s1, s2) {
   var s1 = document.getElementById(s1);
   var s2 = document.getElementById(s2);
   s2.innerHTML = "";
   if (s1.value == "op2") {
      var optionArray = ["default|Choose Test", "test1|Test1", "test2|Test2", "test3|Test3"]
   }
   if (s1.value == "op3") {
      var optionArray = ["default|Choose Dragon", "dg1|Dragos", "dg2|Yggdragsil", "dg3|Kuzuryu"]
   }
   for (var option in optionArray) {
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.innerHTML = pair[1];
      s2.options.add(newOption);
   }

   function change(s3, s4) {
      var s3 = document.getElementById(s3);
      var s4 = document.getElementById(s4);
      s4.innerHTML = "";

      if (s2.value == "default") {
         var box = "Dragons";
         var newInput = document.createElement("option");
         newInput.value = box;
         alert(newInput);
         s4.options.add(newInput);
      }
      s4.options.add(newInput);

   }
}

var t1 = document.getElementById("time");
var t2 = new Date("October 13, 2014");
t1.innerHTML = t2;