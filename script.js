const textarea=document.getElementById("message");
const charCount =document.getElementById("charCount");
const maxlimit=100;

textarea.addEventListener("input",()=>{
    const cur_length=textarea.value.length;
    charCount.innerHTML=`<strong>${cur_length}</strong> /${maxlimit} characters`;
    if(cur_length>maxlimit){
        charCount.classList.add("exceeded");
    }
    else{
        charCount.classList.remove("exceeded");
    }
})