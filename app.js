class Roman_Number_Converter{
    constructor(){
       this.input = document.querySelector('#input') // input tag in the index.html page
       this.submit = document.querySelector('#submit') // buttom tag in the index.html page

    }

    convertion(num){ // convert the insert Input number to Roman number
           const number = [
            {number : 1000, roman : 'M'},
            {number : 900, roman : 'CM'},
            {nuber : 500, roman : 'D'},
            {number : 400, roman : 'CD'},
            {number : 100, roman : 'C'},
            {number : 90, roman : 'XC'},
            {number : 50, roman : 'L'},
            {number : 40, roman : 'XL'},
            {number : 10, roman : 'X'},
            {number : 9, roman : 'IX'},
            {number : 5, roman : 'V'},
            {number : 4, roman : 'IV'},
            {number : 1, roman : 'I'}
        ]
        let result = ''
       for(let i = 0; i < number.length; i++){ // loop through the this.number array
          
           if(number[i].number <= num){
               num = num - number[i].number // reduce the value of insert input number for the next looping
                            
               result = result + number[i].roman // assign the roman value of num to result
               i--
               
             }

       }

       return result
    }

    conrol(){
               
                  let submit = this.submit
                  submit.addEventListener('click',()=>{ //on click the submit
                    
                        let input = this.input.value; // the input tag in the index.html page
                        console.log(this.input)
                         let result = document.querySelector('#result'); // the span in the index.html page
                          if(input.match(/[0-9]/)){

                         result.innerHTML = this.convertion(input) // assign the input as the argument for convertion function change the result text

                         //animate the result 
                         result.style.border = '2px solid chocolate'
                         result.style.fontSize = '25px'
                         result.style.color = '#090'
                         result.style.paddingBottom = '30px'
                          }

                          else{
                                 
                               setInterval(()=>{
                                            let content = document.querySelector('.content')
                                            let error =document.querySelector('#alert')
                                            error.innerHTML = 'INSERT NUMBER'
                                            error.style.color = 'white'
                                            content.style.background = ' rgb(75, 34, 5)'
                        

                               },1000)

                               
                                        
                          }
                    
                   })

    }



}



let result = new Roman_Number_Converter
console.log(result.conrol())