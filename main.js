

// const btn= document.getElementById('btn');
const color = document.querySelector(".color");


    
    btn.addEventListener("click",function(){
        
        var r= Math.floor(Math.random()*256);
        var g= Math.floor(Math.random()*256);
        var b= Math.floor(Math.random()*256);
        console.log(r,g,b);
        let rong = "rgb(" + r + ',' + g + ',' + b +")";
        // let rong= "rgb(1,233,4)";
        console.log(rong.toString());
        color.textContent = rong;
    document.getElementById('cc').style.backgroundColor =   rong.toString();
    // document.getElementById('rgbb').style.color =   rong.toString();
});

function changerong(){

    let lal = document.getElementById('lal').value;
    let sobuj = document.getElementById('sobuj').value;
    let neel = document.getElementById('neel').value;
    let color = "rgb(" + lal + ',' + sobuj + ',' + neel +")";
    document.getElementById('amni').innerHTML = color;
    document.getElementById('main').style.backgroundColor = color.toString();
    document.getElementById('ri').style.backgroundColor = color.toString();
    document.getElementById('le').style.backgroundColor = color.toString();
}

// console.log(lal, sobuj , neel);
document.getElementById('lal').addEventListener("input",changerong);
document.getElementById('sobuj').addEventListener("input",changerong);
document.getElementById('neel').addEventListener("input",changerong);
