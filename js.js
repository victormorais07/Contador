function tt() {
var n1 = document.getElementById('n1')
var n2 = document.getElementById('n2')
var n3 = document.getElementById('n3')
var res = document.getElementById('resultado')
   n1= Number(n1.value) // inicio
   n2= Number(n2.value) // fim
   n3= Number(n3.value) // pulando 
   res.innerHTML=`contando: <br>`
 var n4
    if(n3<=0){
        alert('erro de contagem, colocando contar em 1.')
        n3=1
    }

   if(n1<n2){

for(  n4 = n1; n4 <=n2; n4 += n3 ){
      
   res.innerHTML +=` ${n4}- `
}
} else{
    for( n4 = n1; n4 >=n2; n4 -= n3 ){
      
        res.innerHTML += ` ${n4}- `

    }
} 
res.innerHTML += ` fim `
 
}
