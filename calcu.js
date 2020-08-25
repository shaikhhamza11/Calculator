let screen = document.getElementById("screen");
let buttons = document.querySelectorAll("button");
let screenValue = "";
for (items of buttons) {
    items.addEventListener('click', (e) => {
        buttonValue = e.target.innerText;
        // console.log(buttonValue);
        if (buttonValue == "X")
         {
            buttonValue = "*";
            screenValue += buttonValue;
            screen.value = screenValue;
        }
        else if(buttonValue=="C")
        {
            screenValue="";
            screen.value = screenValue;
        }
        
        else if(buttonValue=="=")
        {
            screen.value=eval(screenValue);
            
        }
        else if(buttonValue=="%")
        {
           screenValue *=0.01;
           screen.value=screenValue;
            
        }
       
        else if(buttonValue=="\u2408")
        {
           screenValue=screen.value.substring(0,screen.value.length  -1);
           screen.value=screenValue;
       
         }
         
        else{
            screenValue += buttonValue;
            screen.value = screenValue;
        }


    });
}
