      
      
      
      var display = document.getElementById("display")
      var varde= [];
      varde[0] = 0;
      varde[1] = 0;
      //Tar information från id=display

        document.body.onclick = function(anEvent) { 
        
        var i = anEvent.target.id;
        display.type='text'
        
        if(i===''){
          return;
        } // exekverar javascript funktionen


        if (display.value ==='0' &&
         i!='percent' &&
          i!='0' &&
          i!='equal' && 
          i!='divide'
           && i!='multiply' && 
           i!='add' && 
           i!='subtract') {
          if(i !='clear'){
            display.value = i;
          }
        //display.value är en output för java scripten. Men var display kommer från html elementet.
          
          else{
            display.value=0; //Vissar 0
          }


          }

          else if (i==='equal'){
            varde[1]=display.value;
            switch(varde[2]){ //Switch case använd här för att man kan välja vilken av koderna som man vill exekvera.
              case 'add': //Denna kod är den som exekverar stegen som räknaren följer när den räknar ut talen.
                varde[0]*= 1;
                varde[1]*= 1;
                varde[0]+=varde[1];
                break;
                
                case 'divide': //Dividera
                  varde[0]= varde[0]/varde[1];
                  break

                
                case 'multiply'://Multiplicera
                  varde[0]= varde[0]*varde[1];
                  break
              
                case 'subtract'://Subtrahera
                  varde[0]-=varde[1];
                  break
                 
              default:
                  return
            }
            
            display.value=varde[0];

          }

          else if(i==='clear') {
            display.value=0;    //Vissa 0 om du trycker på Clear
          } 
          
          else if (i==='dot'){
            if(!display.value.includes('.')){
              display.value +='.'; // Eftersom att talet får ett större värde när du änvänder "dot" så adderas den i funktionen.
            }

          else if(i==='percent') {
            display.value *= 0.01; //1% av 100 är = 100*0.01 vilket betyder att vi måste deklarare det i funktionen.
          }

          else if(i==='negate'){
            display.value *= -1; //...
             }
            }
            
          

         else if ( //"boolean" "local" om du väljer att utföra en av dessa funktioner kommer denna kod 
                   // Att bedöma om den är "true" eller "false"
          i==='divide'   ||
          i==='multiply' || 
          i==='subtract' || 
          i==='add'
          ) 
          
          
          {  
            varde[0]=display.value;
            console.log(varde)// Ger ett meddelande eller i detta fall ett varde från html.
            display.value ='';
            varde[2] = i;
          }


          else{

              display.value += i;
          }
      
    };
