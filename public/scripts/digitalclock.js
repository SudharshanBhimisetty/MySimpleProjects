            function time(){
                let p = document.getElementById("a");
            p.innerHTML = moment().format('LTS');
        
            document.getElementById("d").innerHTML = moment().format('dddd')+'<br/>';
            document.getElementById("d").innerHTML += moment().format('LL');
            }
            setInterval(time,1000);

 