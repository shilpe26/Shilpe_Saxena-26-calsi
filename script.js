/*Script.js */
//custom functions

function calculateTip()
{ 
    //store th data of inputs
    var billAmount=this.document.getElementById("billAmount").value;
    var serviceQuality=this.document.getElementById("serviceQuality").value;
    var numPeople=this.document.getElementById("totalPeople").value;
    
    //Quick validation
    if(billAmount==="" || serviceQuality==0){
        this.window.alert("Please enter some values to get this baby up and running");
    return;
    }
    //check to see if this is empty or less than or equal to one
    if(numPeople==="" || numPeople<=1){
        numPeople=1;
        this.document.getElementById("each").style.display = "none";
    }else{
        this.document.getElementById("each").style.display = "block";
    }
    //Do some math
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total=total.toFixed(2);
    //window.alert(total);    
        //display the tip
     this.document.getElementById("totalTip").style.display="block";
     this.document.getElementById("tip").innerHTML=total;
}

    //Hide the tip amount on load
this.document.getElementById("totalTip").style.display="none";
this.document.getElementById("each").style.display="none";

//Clicking the buttons cals ours custom functions
this.document.getElementById("calculate").onclick=function(){ calculateTip(); };
