const track=document.querySelector('.volume-slider');
const volume_value_el=document.querySelector('.volume-value');

const changeBgTo=color =>(track.style.background=color);

track.addEventListener('input',()=> {
    const value=track.value;

    if(value<50)changeBgTo('#2cff7d');
    else if(value>=50 && value<65)changeBgTo('#c6ff26');
    else if(value>=65 && value<80)changeBgTo('#ffae2c');
    else changeBgTo('#ff2c2c');

    volume_value_el.innerText=value;
    volume_value_el.style.opacity=1;
    track.style.boxShadow='0 5px 15px rgba(255, 255, 255, 0.15)';


});
track.addEventListener('change',()=>{
    setTimeout(()=>{
        volume_value_el.style.opacity=0;
        track.style.boxShadow='0 5px 15px rgba(255, 255, 255, 0)';
    },1000);
});