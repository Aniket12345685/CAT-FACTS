let btn1=document.querySelector("#btn");
let wor=document.querySelector("#btn");
btn1.addEventListener("click",()=>{
    wor.innerText="CLICK FOR NEXT FACT";
    getfacts()
    
})
const getfacts=async()=>{
    let URL="https://catfact.ninja/fact"
    let factpara=document.querySelector(".facts")
    let response=await fetch(URL);
    let data=await response.json();
    factpara.innerText=data.fact

    
}