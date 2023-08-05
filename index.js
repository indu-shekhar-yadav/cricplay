const namec=document.getElementById('name_id');
const runc=document.getElementById('run_id');
const wicketc=document.getElementById('wicket_id');
const agec=document.getElementById('age_id');
const submitc=document.getElementById('submit_id1');
const txt1= document.getElementById('input-get');
const btn1= document.getElementById('btn-get');
const out1= document.getElementById('output1');
const out2= document.getElementById('output2');
const out3= document.getElementById('output3');
const out4= document.getElementById('output4');
const deletec=document.getElementsByClassName('del-btn');

let i=0;
const name_arr=[];
const run_arr=[];
const wicket_arr=[];
const age_arr=[];
function getdata1(){                        // input
  console.log("bye")
    name_arr[i]= namec.value;
    run_arr[i]= String(runc.value);
    wicket_arr[i]= String(wicketc.value);
    age_arr[i]= String(agec.value);    
    i=i+1;

    // console.log(name_arr);
}

submitc.addEventListener('click',getdata1);


function fun1(){              //output
  console.log("hello vmro")
  // console.log(txt1.value);
  // out1.innerHTML=String(txt1.value);
    for(let x=0; x<(i); x++){
      console.log(name_arr[x]);
        if(String(txt1.value)==String(name_arr[x])){
            console.log(name_arr[x]);
            out1.innerHTML=name_arr[x];
            out2.innerHTML=run_arr[x];
            out3.innerHTML=wicket_arr[x];
            out4.innerHTML=age_arr[x];
              
          }
    }
    
}

btn1.addEventListener('click',fun1);


      var scrollAnimElements = document.querySelectorAll("[data-animate-on-scroll]");
      var observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting || entry.intersectionRatio > 0) {
              const targetElement = entry.target;
              targetElement.classList.add("animate");
              observer.unobserve(targetElement);
            }
          }
        },
        {
          threshold: 0.15,
        }
      );
      
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.observe(scrollAnimElements[i]);
      }