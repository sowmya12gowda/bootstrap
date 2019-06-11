function signValidation(){
	     var fname=document.getElementById("fname").value;
	 	 var lname=document.getElementById("lname").value;
	 	 var email=document.getElementById("email").value;
	 	 var pnumber=document.getElementById("pnumber").value;
	 	 var street1=document.getElementById("street1").value;
	 	 var street2=document.getElementById("street2").value;
	 	 var city=document.getElementById("city").value;
	 	 var state=document.getElementById("state").value;
	 	 var zipcode=document.getElementById("zipcode").value;
	 	 var password=document.getElementById("password").value;
	 	 var vpassword=document.getElementById("vpassword").value; 	}

        var fnamecheck=/^[A-Za-z. ]{1.15}$/ ;
        var lnamecheck=/^[A-Za-z. ]{1.15}$/ ;
        var emailcheck=/^[A-Za-z. ]{3,}@[A-Za-z]{3, }[ . ]{1}{A-Za-z.}{2,6}$/ ;

        var pnumbercheck=/^[0-9 ]{10}$/;
        var street1check=/^[a-Za-z. ]{1.15}$/;
        var street2check=/^[a-Za-z. ]{1.15}$/;
        var citycheck=/^[a-Za-z. ]{1.15}$/;
        var statecheck=/^[a-Za-z. ]{1.15}$/;
        var zipcodecheck=/^[a-Za-z. ]{1.15}$/;
        var passcheck=/^[a-Za-z. ]{1.15}$/;
        var vpasscheck=/^[a-Za-z. ]{1.15}$/;
        
        if(fnamecheck.test(fname)){
        	document.getElementById("fnameerror").innerHTML=" ";
        }
        if(lnamecheck.test(lname)){
        	document.getElementById("lnameerror").innerHTML=" ";
        }
        if(emailcheck.test(email)){
        	document.getElementById("emailerror").innerHTML=" ";
        }
        if(pnumbercheck.test(pnumber)){
        	document.getElementById("pnumber").innerHTML=" ";
        }
        if(street1check.test(street1)){
        	document.getElementById("street1error").innerHTML=" ";
        }
        if(street2check.test(street2)){
        	document.getElementById("street2error").innerHTML=" ";
        }
        if(citycheck.test(city)){
        	document.getElementById("cityerror").innerHTML=" ";
        }
        if(statecheck.test(state)){
        	document.getElementById("stateerror").innerHTML=" ";
        }
        if(zipcodecheck.test(zipcode)){
        	document.getElementById("zipcodeerror").innerHTML=" ";
        }
        if(passcheck.test(pass)){
        	document.getElementById("passerror").innerHTML=" ";
        }
        if(vpasscheck.test(vpass)){
        	document.getElementById("vpasserror").innerHTML=" ";
        }
        else{
        		document.getElementById("fnameerror").innerHTML="Fist name cannot be blank ";
        		document.getElementById("lnameerror").innerHTML="last name cannot be blank ";
        		document.getElementById("emailerror").innerHTML=" we need your email adress to contact";
        		document.getElementById("pnumbererror").innerHTML="phone number cannot be blank ";
        	    document.getElementById("street1error").innerHTML="street cannot be blank ";
        		document.getElementById("street2error").innerHTML="street adress cannot be blank ";
        		document.getElementById("cityerror").innerHTML="city cannot be blank ";
        		document.getElementById("stateerror").innerHTML="state cannot be blank ";
                document.getElementById("zipcodeerror").innerHTML="zipcode cannot be blank ";
                document.getElementById("passerror").innerHTML=" password cannot be blank";
                document.getElementById("vpasserror").innerHTML="verify password connot be blank ";
            }   return false
        		        
$(function() {
    $('form').validator({
        validHandlers: {
            '.customhandler':function(input) {
                //may do some formatting before validating
                input.val(input.val().toUpperCase());
                //return true if valid
                return input.val() === 'JQUERY' ? true : false;
            }
        }
    });

    $('form').submit(function(e) {
        e.preventDefault();

        if ($('form').validator('check') < 1) {
            alert('Hurray, your information will be saved!');
        }
    })
});


