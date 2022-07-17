let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText)

        if(buttonText == 'x'){
            buttonText = '*';
            screenValue += buttonText; 
            screen.value = screenValue;
        }

        else if (buttonText == 'C'){
            screenValue = "";
            screen.value = screenValue;
        }

        else if(buttonText == 'DEL'){
            screenValue = screenValue.slice(0, -1);
            screen.value = screenValue;
        }

        else if (buttonText == '='){
            if(screenValue.slice(0,3) == 'Sin'){
                var pi = Math.PI;
                var deg = screenValue.slice(4,-1);
                var rad = deg*(pi/180);
                var sin = Math.sin;
                screenValue = eval(sin(rad));
                screen.value = screenValue;
            }
            else if(screenValue.slice(0,3) == 'Cos'){
                var pi = Math.PI;
                var deg = screenValue.slice(4,-1);
                var rad = deg*(pi/180);
                var cos = Math.cos;
                screenValue = eval(cos(rad));
                screen.value = screenValue;
            }
            else if(screenValue.slice(0,3) == 'Tan'){
                var pi = Math.PI;
                var deg = screenValue.slice(4,-1);
                var rad = deg*(pi/180);
                var tan = Math.tan;
                screenValue = eval(tan(rad));
                screen.value = screenValue;
            }
            else if(screenValue.slice(0,3) == 'log')
            {
                var log = Math.log;
                var x = screenValue.slice(4,-1);
                screenValue = eval(log(x)/log(10));
                screen.value = screenValue;
            }
            else
                screen.value = eval(screenValue);
        }

        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}