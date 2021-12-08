    function equacao(a,b,c){
      var delta= Math.pow(b,2)-(4*a*c)

      var x1= (-b + Math.sqrt(delta))/(2*a); 
      var x2= (-b - Math.sqrt(delta))/(2*a);  
      
      console.log(x1);
      console.log(x2); 
}
 equacao(1,-5,6);
