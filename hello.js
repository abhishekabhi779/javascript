 function getuserroll(name,roll){
     switch (roll) {case "admin":return `${name} you are admin`

        case "sub-admin":
             return `${name} you are sub-admin`
        case "tester":
                return `${name} you are tester`
        case "user":
                return `${name} you are user`}
 }
    
console.log(getuserroll("abhi" ,"admin"));
console.log(getuserroll("kabi" ,"tester"));
console.log(getuserroll("bob" ,"user"));