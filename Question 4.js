function checkBlank(){
    var valid = false;
    if(document.getElementById('firstname').value == "" && document.getElementById('checkme').checked){
        alert("Please enter your first name");
            valid = true;
        }
    }
 
<form method="post" onsubmit="checkBlank()">
   <input type="text" name="firstname" />
   <input type="check" name="checkme" />
   <input type="submit" value="submit"/>
</form>

