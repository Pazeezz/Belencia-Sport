function formvalidation(fname,email,totAll,buy){
    if(document.getElementById('fname').value==""){
        alert("Please Enter your Full-Name.");
        return false;
    }
    if(document.getElementById('email').value==""){
        alert("Please Enter your E-mail address.");
        return false;
    }
    if(document.getElementById('cname').value==""){
        alert("Please Enter your Card-Name.");
        return false;
    }
    if(document.getElementById('cnumber').value==""){
        alert("Please Enter your Card-Number.");
        return false;
    }
    if(document.getElementById('pn').value==""){
        alert("Please Enter your Mobile-Number.");
        return false;
    }
    if(document.getElementById('dadd').value==""){
        alert("Please Enter your Address.");
        return false;
    }
    else{
        if(document.getElementById("q1").value=="0" 
        && document.getElementById("q2").value=="0"
        && document.getElementById("q3").value=="0"
        && document.getElementById("q4").value=="0"
        && document.getElementById("q5").value=="0"
        && document.getElementById("q6").value=="0"
        && document.getElementById("q7").value=="0"
        && document.getElementById("q8").value=="0"){
            alert("You didn't Add any Product. Please Add products you want.");

        }
        else{
            var fname = document.getElementById("fname").value;
            var email = document.getElementById("email").value;

            var totAll = 0;
            var buy = "";

            var q1 = document.getElementById("q1").value;
            var p1 = 50.00;
            var q2 = document.getElementById("q2").value;
            var p2 = 78.00;
            var q3 = document.getElementById("q3").value;
            var p3 = 210.00;
            var q4 = document.getElementById("q4").value;
            var p4 = 6.00;
            var q5 = document.getElementById("q5").value;
            var p5 = 32.00;
            var q6 = document.getElementById("q6").value;
            var p6 = 40.00;
            var q7 = document.getElementById("q7").value;
            var p7 = 105.00;
            var q8 = document.getElementById("q8").value;
            var p8 = 36.00;
            var q9 = 0;

            if(q1>0){
                totAll = totAll + (q1*p1);
                buy = buy + "Product : WILSON Evolution Basketball" + "\n" + "Quantity : " + q1 + "\n" + "Price : $" + p1 + "\n" + "\n";
            }
            if(q2>0){
                totAll = totAll + (q2*p2);
                buy = buy + "Product : Wall-Mounted Basketball Hoop" + "\n" + "Quantity : " + q2 + "\n" + "Price : $" + p2 + "\n" + "\n";
            }
            if(q3>0){
                totAll = totAll + (q3*p3);
                buy = buy + "Product : Portable Basketball Hoop System " + "\n" + "Quantity : " + q3 + "\n" + "Price : $" + p3 + "\n" + "\n";
            }
            if(q4>0){
                totAll = totAll + (q4*p4);
                buy = buy + "Product : Basketball Net " + "\n" + "Quantity : " + q4 + "\n" + "Price : $" + p4 + "\n" + "\n";
            }
            if(q5>0){
                totAll = totAll + (q5*p5);
                buy = buy + "Product : Electric Pump Kit " + "\n" + "Quantity : " + q5 + "\n" + "Price : $" + p5 + "\n" + "\n";
            }
            if(q6>0){
                totAll = totAll + (q6*p6);
                buy = buy + "Product : Electronic Scoreboards " + "\n" + "Quantity : " + q6 + "\n" + "Price : $" + p6 + "\n" + "\n";
            }
            if(q7>0){
                totAll = totAll + (q7*p7);
                buy = buy + "Product : Basketball Backpack " + "\n" + "Quantity : " + q7 + "\n" + "Price : $" + p7 + "\n" + "\n";
            }
            if(q8>0){
                totAll = totAll + (q8*p8);
                buy = buy + "Product : Basketball Training Set " + "\n" + "Quantity : " + q8 + "\n" + "Price : $" + p8 + "\n" + "\n";
            }
            if (q9==0) {
                alert("                             <------BELENCIA SPORTS------>"
                 + "\n" + 
                 "Name : " + fname + "\n" +
                 "Email : " + email + "\n"+
                 "----------------------------------------" + "\n"+
                 buy + "\n" +
                 "Total Bill:  $" + totAll +".00" + "\n" +
                "Thank you, " + fname + "." + "\n" +
                "Come Again !!!" );
                return true;

            }
        }
        
    }
}

function pro1(q1,){
    if(document.getElementById("q1").value=="0"){
        alert("Please Select Quantities you want.")
        return false;
    }
    else{
        var q1 = document.getElementById("q1").value;
        alert("Product : "+ " WILSON Evolution Basketball" + "\n"+
        "Price : " + "$ 50.00" + "\n"+
        "Quntity : " + q1 + "\n"+
        "Total Price : $" + q1*50+".00" + "\n"+  
        "Added to your Cart.");
        return true;
    }
}

function pro2(q2){
    if(document.getElementById("q2").value=="0"){
        alert("Please Select Quantities you want.")
        return false;
    }
    else{
        var q2 = document.getElementById("q2").value;
        alert("Product : "+ " Wall-Mounted Basketball Hoop " + "\n"+
        "Price : " + "$ 78.00" + "\n"+
        "Quntity : " + q2 + "\n"+
        "Total Price : $" + q2*78+".00" + "\n"+
        "Added to your Cart.");
        return true;
    }
}

function pro3(q3){
    if(document.getElementById("q3").value=="0"){
        alert("Please Select Quantities you want.")
        return false;
    }
    else{
        var q3 = document.getElementById("q3").value;
        alert("Product : "+ " Portable Basketball Hoop System " + "\n"+
        "Price : " + "$ 210.00" + "\n"+
        "Quntity : " + q3 + "\n"+
        "Total Price : $" + q3*210+".00" + "\n"+
        "Added to your Cart.");
        return true;
    }
}

function pro4(q4){
    if(document.getElementById("q4").value=="0"){
        alert("Please Select Quantities you want.")
        return false;
    }
    else{
        var q4 = document.getElementById("q4").value;
        alert("Product : "+ " Basketball Net " + "\n"+
        "Price : " + "$ 6.00" + "\n"+
        "Quntity : " + q4 + "\n"+
        "Total Price : $" + q4*6+".00" + "\n"+
        "Added to your Cart.");
        return true;
    }
}

function pro5(q5){
    if(document.getElementById("q5").value=="0"){
        alert("Please Select Quantities you want.")
        return false;
    }
    else{
        var q5 = document.getElementById("q5").value;
        alert("Product : "+ " Electric Pump Kit " + "\n"+
        "Price : " + "$ 32.00" + "\n"+
        "Quntity : " + q5 + "\n"+
        "Total Price : $" + q5*32+".00" + "\n"+
        "Added to your Cart.");
        return true;
    }
}

function pro6(q6){
    if(document.getElementById("q6").value=="0"){
        alert("Please Select Quantities you want.")
        return false;
    }
    else{
        var q6 = document.getElementById("q6").value;
        alert("Product : "+ " Electronic Scoreboards " + "\n"+
        "Price : " + "$ 40.00" + "\n"+
        "Quntity : " + q6 + "\n"+
        "Total Price : $" + q6*40+".00" + "\n"+
        "Added to your Cart.");
        return true;
    }
}

function pro7(q7){
    if(document.getElementById("q7").value=="0"){
        alert("Please Select Quantities you want.")
        return false;
    }
    else{
        var q7 = document.getElementById("q7").value;
        alert("Product : "+ " Basketball Backpack " + "\n"+
        "Price : " + "$ 105.00" + "\n"+
        "Quntity : " + q7 + "\n"+
        "Total Price : $" + q7*105+".00" + "\n"+
        "Added to your Cart.");
        return true;
    }
}

function pro8(q8){
    if(document.getElementById("q8").value=="0"){
        alert("Please Select Quantities you want.")
        return false;
    }
    else{
        var q8 = document.getElementById("q8").value;
        alert("Product : "+ " Basketball Training Set " + "\n"+
        "Price : " + "$ 36.00" + "\n"+
        "Quntity : " + q8 + "\n"+
        "Total Price : $" + q8*36+".00" + "\n"+
        "Added to your Cart.");
        return true;
    }
}