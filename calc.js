function displayData(n) {
    result.value+=n
}
function evaluatef() {
    if(result.value!=""){
        try{result.value=eval(result.value)}
        catch{ result.value="Input Error"}
    }
    
    
}
function allClear() {
    result.value=" "
}

function backSpace() {
    result.value=result.value.slice(0,-1)
}
function posNeg() {
    result.value*=-1
}