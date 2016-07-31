function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);

    var xpos = [x1];
    var ypos = [x2];
    
    
    function assembly(x,y) {
        
        for(var i =1; i < 10000; i++) {
            
            xpos.push(xpos[i-1] + x);
            ypos.push(ypos[i-1] + y );
        }
        
    }
    
  assembly(v1,v2);
    
  // console.log(xpos, ypos); // uncomment this line of code to see what the position arrays look like.
        var match;
        var notmatch
    
  function compare(arr1,arr2) {

      for (var z = 0, e = 0 ; z < arr1.length; z++, e++) {
          
          
              
              if( arr1[z] == arr2[e] ) {
                  
                  match = "YES";
                  
              }
              
            else { notmatch = "NO";}
              
              
          }
          
          
          
      
      
      
  }
   
    compare(xpos,ypos);
    if (match == null) {
       
       console.log(notmatch);
       
   }
    
    else console.log(match);
    
    
    
}
