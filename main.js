(function(){
    //霓虹灯效果
    function flash(){
        var titlelist=document.getElementsByClassName("title");
        var time=new Date();
        var value="0 0 "+Math.abs(time.getSeconds()-30)+"px #f77158;";
        for(var i=0;i<titlelist.length;i++){
            titlelist[i].style.textShadow=value;
            // titlelist[i].style.color="red";
        }
    };
    var settime=window.setInterval(flash,1000);
})()