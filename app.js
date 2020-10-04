class Roman_Number_Converter{
    constructor(){
        this.number = [
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

        this.num = document.querySelector('#input').value // input tag in the index.html page
    }

    convertion(num){ // convert the insert Input number to Roman number
        let result = ''
       for(let i = 0; i < this.number.length; i++){ // loop through the this.number array
          
           if(this.number[i].number <= num){
               num = num - this.number[i].number // reduce the value of insert input number for the next looping
                            
               result = result + this.number[i].roman // assign the roman value of num to result
               i--
               
             }

       }

       return result
    }

    conrol(){
          let submit = document.querySelector('#submit')
        
              submit.addEventListener('click',()=>{
                    let input = document.querySelector('#input').value;
                    let result = document.querySelector('#result');
                    result.innerHTML = this.convertion(input)
                    
               
          })

    }



}



let result = new Roman_Number_Converter
console.log(result.conrol())