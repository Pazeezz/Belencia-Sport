var seconds=0;
function displayseconds(){
    seconds += 1;					
}
setInterval(redirectpage,4000);
	
                                // if you want to link and open the homepage on other any device, You need to paste your file path.
function redirectpage(){       
    window.location.href="mainPage.html";
}
setTimeout('redirectpage()',4000);

