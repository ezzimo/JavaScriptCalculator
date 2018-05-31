/*
 * Implement all your JavaScript in this file!
 */
 // variables
 var currNum = ""; // the number displayed
 var oldNum = ""; // the old number
 var result; // the result of the operation
 var operator; // the opperation's operator

 $(".num-button").click(function() {
   var loccurNum;

   if ((!oldNum && !operator) && !result) {
     // the first time that a button is tapped
     loccurNum = $(this).val();
     currNum = currNum + loccurNum;
     $("#display").val(currNum);

   } else if ((oldNum && operator) && !result ) {
     // change of the operation's operator in the seconde click on an operation button
     loccurNum = $(this).val();
     currNum = currNum + loccurNum;
     $("#display").val(currNum)

   }else if ((oldNum && operator) && result) {
     // click on number for new operation after an operation was done
     result = "";
     operator = "";
     currNum = "";
     oldNum = "";
     loccurNum = $(this).val();
     currNum = loccurNum;
     $("#display").val(currNum);

   }
});

 $(".clear").click(function(){
   // clear all data
   result = "";
   oldNum = "";
   currNum = "";
   operator = "";
   $("#display").val("");
 })


  $(".operation").click(function(){
     if ((!result && !oldNum) && currNum) {
      oldNum = currNum;
      idclass = $(this);
      operator = idclass.attr('id');
      currNum = "";

    } else if ((!result && oldNum)&& !currNum) {
      idclass = $(this);
      operator = idclass.attr('id');

    } else if ((result && oldNum)&& currNum) {
      currNum = "";
      result = "";
      idclass = $(this);
      operator = idclass.attr('id');

    } else if ((!result && oldNum)&& currNum) {
      equal();
      idclass = $(this);
      operator = idclass.attr('id');
      result = "";
      currNum = "";
    }
  });

  $(".equals").click(equal);

  function equal (){
    if (!isNaN(oldNum) && currNum) {
      if (operator === "addButton") {
        result = Number(oldNum) + Number(currNum);
        oldNum = result;
        $("#display").val(result);
      } else if (operator === "subtractButton") {
        result = Number(oldNum) - Number(currNum);
        oldNum = result;
        $("#display").val(result);
      } else if (operator === "multiplyButton") {
        result = Number(oldNum) * Number(currNum);
        oldNum = result;
        $("#display").val(result);
      } else if (operator === "divideButton") {
        result = Number(oldNum) / Number(currNum);
        oldNum = result;
        $("#display").val(result);
      }
    }
  }
