
            function solve(string){
            let value = 0;
            let realNum;
            var NewAry =[];
            let text = string.toLocaleLowerCase();
            let resAry = text.split(/[aeiou]/).filter(
                index => index !== ""
            );  
            resAry.map(letter =>{
                if(letter.match(/[a-z]{2}/)){
                    for(let i in letter){
                        value = value + letter[i].charCodeAt(0) - 96;
                        realNum = value ;   
                    }
                }else{
                    let num = letter.charCodeAt(0) - 96;
                    NewAry.push(num);
                }
            }) 
                NewAry.push(realNum);
        let largestNumber = 0;
        NewAry.map(num =>{
            num > largestNumber ? largestNumber = num : ''
        })
           return largestNumber
        }
        
        console.log(solve("zzzb"))
        console.log(solve("luffy")) 
