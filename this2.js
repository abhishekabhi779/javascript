console.log(this);
var user = {
    firstname : "Abhi",
    gitcount :4,
    getgitcount:function(){
        console.log("line 6",this);
    }
};
user.getgitcount();