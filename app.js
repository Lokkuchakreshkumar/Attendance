let class_attended = document.querySelector("#classes_attended")
let total_classes = document.querySelector("#total_classes")
let btn = document.querySelector(".btn");
let zeromsg = document.querySelector(".zeromsg");
let container = document.querySelector(".container");
let onemsg = document.querySelector("#onemsg");
let secmsg = document.querySelector("#secmsg")
btn.addEventListener("click",(event)=>{
    event.preventDefault();
    let a = parseInt(class_attended.value); 
    let b = parseInt(total_classes.value);
console.log(a);
console.log(b);
    if (!isNaN(a) && !isNaN(b) && a >= 0 && b > 0 && a <= b) {
        let per = Math.ceil((a/b)*100);
    zeromsg.innerText= `Your Present percentage is ${per}`
    let oneabsent = Math.ceil(((a-2)/b)*100);
    let twoabsent = Math.ceil(((a-4)/b)*100);
    if(oneabsent>85){
        onemsg.classList.add("onemsg-style-positive");
         onemsg.innerText = `If you absent for one-class your percentage will be  ${oneabsent}`
        }
        else{
            onemsg.classList.add("onemsg-style-negative")
            onemsg.innerText = `If you absent for one-class your percentage will be  ${oneabsent}`
        }
        if(twoabsent>85){
         secmsg.classList.add("secmsg-style-positive");
             secmsg.innerText = `If you absent for two-classes your percentage will be  ${twoabsent}`
            }
            else{
                secmsg.classList.add("secmsg-style-negative")
                secmsg.innerText = `If you absent for two-classes your percentage will be  ${twoabsent}`
            }
   
    }
})
