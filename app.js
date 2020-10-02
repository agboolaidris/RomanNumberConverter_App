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
            {number : 5, roman : 'X'},
            {number : 4, roman : 'IX'},
            {number : 1, roman : 'I'}
        ]
    }

    convertion(num){
        let result = ''
       for(let i = 0; i < this.number.length; i++){
          
           if(this.number[i].number <= num){
               result = this.number[i].roman
               console.log(result)

           }
       }
    }
      

}


let result = new Roman_Number_Converter
console.log(result.convertion(10))