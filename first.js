
// function f(flag,x,y,z)
// {
//     let sum = 0;
//     let prd = 1;
//    if(flag=='a')
//    {
//      sum+= x+y+z;
//      return sum;
//    }
//    else if(flag=='m')
//    {
//        prd*=x*y*z;
//        return prd;
//    }
// }

// console.log(f('a',1,2,3));
// console.log(f('m',1,2,3));





// let fs = require("fs");
// let cmd = process.argv.slice(2);

// (function()
// {
//     let options = [];
//     let files = [];

//     let str = "";
    
//     for(let x in cmd)
//     {
//         if(cmd[x].startsWith("-")&&cmd[x].length==2)
//         {
//             options.push(cmd[x]);
//         }
//         else 
//         {
//             files.push(cmd[x]);
//             if(!fs.existsSync(cmd[x]))
//             {
//                console.log(cmd[x]+ " does not exits");
//                return;
//             }
//         }
//     } 
//     if(files.length<=0)
//     {
//         console.log("file not entered");
//         return;
//     }
//     for(let x in files)
//     {
//        str += fs.readFileSync(files[x].toString());
//     }
//     str = str.split("\n");

//     if(options.includes("-s"))
//     {
//         str = removespace(str);
//     }
//     if(options.includes("-n")&&options.includes("-b"))
//     {
//        if(options.indexOf("-b")>options.indexOf("-n"))
//        {
//            str = addnum(str);
//        }
//        else 
//        {
//           str = addnonempty(str);
//        }
//     }
//     else 
//     {
//        if(options.includes("-b"))
//        {
//         str = addnonempty(str);
//        }
//        else if(options.includes("-n"))
//        {
//         str = addnum(str);
//        }
//     }
//     str = str.join("\n");
//     console.log(str);
// })();

// function removespace(arr)
// {
//     let nArr = [];
//     for(let i =0;i<arr.length;i++)
//     {
//         let prev =arr[i];
//         let curr = arr[i+1];
//         if(prev==""&&curr==""||prev=="\r"&&curr=="\r")
//         {
           
//         }
//         else 
//         {
//             nArr.push(arr[i]);
//         }
//     }
//     return nArr;
// }

// function addnum(arr)
// {
//     let nArr = [];
//     for(let x =0;x<arr.length;x++)
//     {
//         nArr[x] = (x) + 1 + " " + arr[x];
//     }
//     return nArr;
// }
// function addnonempty(arr)
// {
//     let linenumber = 1;
//     let nArr = [];
//     for(let x in arr)
//     {
//         if(arr[x] == "\r" || arr[x]=="")
//         {
//             nArr[x] = arr[x];
//         }
//         else 
//         {
//            nArr[x] = linenumber + " " + arr[x];
//            linenumber++;
//         }
//     }
//     return nArr;
// }
