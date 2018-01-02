          <script>
                var name = "Tanvir Ahamed";
                document.write(name);
                document.write("<br>");
                var a=5;
                var b=5; 
                var sum = 30;
                function myfunction(){
                    var sum =a+b;
                    document.write("sum is " + sum);
                }
                
                myfunction();
                
                document.write("<br>sum is " + sum);
            </script>

           /*  object with this function*/

            <script>
                
                var person = {
                    firsrName:"tanvir",
                    lastName:"ahamed",
                    age:24,
                    func: function(){
                        return this.firsrName+" "+this.lastName;
                    }
                    
                }
                document.write("<br>"+person.func());
            </script>

            <script>
                var i=0;
                var obj = { a:'after',
                            b:'before',
                            c:123
                          };
                for(i in obj){
                    document.write("<br>"+obj[i]);
                }
            </script>


//checking switch case

<input id="code" type="text" autofocus/>
<button onclick = "check()" >Check</button>


<script>
    function check(){                    
        var txt;
        var codename = document.getElementById("code").value;

        console.log(codename);
        switch(codename){
            case "java":
                txt = "I love java";
                break;
            case "php":
                txt = "I love PHP";
                break;
            case "C#":
                txt = "I love C#";
                break;
            default:
                txt = "Undefined";
        }
        
     document.getElementById("show").innerHTML = txt;

    }
</script>

    <input type="button" value="test" onclick="timeInit()" name="button">
    <input type="button" value="test" onclick="timeclear()" name="button">
    <div id="show"> 
        
    </div>
    <div id="start">
        
    </div>
<script>
    //clearTimeout();
    var timeout;
    function timeoutTrrigger(){
        document.getElementById("show").innerHTML = "time out triggered after few time";
    }

    function timeInit(){
        timeout = setTimeout("timeoutTrrigger()", 5000);
        document.getElementById("start").innerHTML = "time initialized";
    }
    function timeclear(){
        clearTimeout(timeout);

        document.getElementById("start").innerHTML = "time clear";
    }
</script>

<script>

                    function clock(){
                        var date = new Date();
                        hour = date.getHours();
                        minute = date.getMinutes();
                        second = date.getSeconds();

                        document.getElementById("hour").innerHTML = hour ;
                        document.getElementById("minute").innerHTML = minute ;
                        document.getElementById("second").innerHTML = second ;
                    }
                    
                    setInterval("clock()",1000);

                </script>




            <div>
                <span id="hour"></span>:
                <span id="minute"></span>:
                <span id="second"></span>
            </div>

            <script>
                var name = prompt("enter your name :");
                if(name == ""){
                    alert("Field must not be empty!!");
                }else{
                    document.write("Name is: " + name);
                }

                var confm = confirm("enter your confm :");
                if(confm){
                    alert("Field must not be empty!!");
                }else{
                    document.write("Name is: " + confm);
                }
            </script>