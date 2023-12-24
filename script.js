let url= 'https://script.google.com/macros/s/AKfycbw_n0DXK4PpODpZigdU1KcCu-qSX6xrLVYCnnMiRFkIf50L1q5nXYTFLOlD6CB_7WTA-A/exec'
let form =document.querySelector('#form');
form.addEventListener("submit",(e)=>{
    e.target.btn.innerHTML="submitting...";
    let d =new FormData(form);
    fetch(url,{
        method:"post",
        body:d
    }).then((res)=>res.text())
    .then((finalRes)=>{
        e.target.btn.innerHTML="submit";
        document.getElementById("res").innerHTML=finalRes;
        form.reset();
        setTimeout(()=>{
            document.getElementById("res").innerHTML='';
        },4000)
    })

    e.preventDefault();

})

   


