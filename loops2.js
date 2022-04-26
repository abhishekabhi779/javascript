const names = ["amz","yt","fb","twt"]
// for (const n of names){
//     console.log(n);
// }
const fname ={
    yt:"youtube",
    amz:"amazon",
    twt:"twitter"

};
for (const n in fname){
    console.log(`${n}:${fname[n ]}`);
}