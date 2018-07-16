var getlocation = "";
function checkweather()
 {
    var location = document.querySelector("#cityname").value;
    if(location==""){
        alert("Please enter a valid location");
    }
    else{
        getlocation = location;
        let searchURL = "http://localhost:3000/" + location;
        fetch(searchURL)
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            displayLocationResult(result);
        })
        .catch(function(error){
            console.log(error.message);
        });
    }
 }   
    
function displayLocationResult(result){
    let msgDiv = document.querySelector("#message");
    let div = document.querySelector("#result");
    //test
    console.log(result);

     if(result.message){
         div.innerHTML = "";
         msgDiv.innerHTML = `<div class="alert alert-danger alert-dismissible" role="alert">\
                             <strong>oops!</strong> ${result.messsage}\
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
                             <span aria-hidden="true">&times;</span>\
                             </button>\</div>`;
     }
     else{

        msgDiv.innerHTML =   `<div class="well">\
                              <h3 style="text-align:center";>Weather of ${getlocation}</h3>\
                              </div>`;
        div.innerHTML = "";
        const weather = result.consolidated_weather;
        console.log(weather);
        
        for(let i = 0;i<weather.length;i++){
            console.log(weather[i].weather_state_name);
            var elements = `<div>${weather[i]}`;
            var getdata =` <div class="row"  id="id_${i}">
                              <div class="col-sm-6 col-md-4" "col-lg-4">
                                 <div class="thumbnail">
                                     <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLpViQNwCjh3h0EuLZw61x5wfjUl8hprUodTZJul7vk6KCzfL1" alt="sun-image">
                                     <div class="caption">
                                        <h3>Date:<h5> ${weather[i].applicable_date}</h5></h3>
                                        <p><h3>Minimum Temperature<h5> ${weather[i].min_temp}</h3></h5></p>
                                      </div>
                                  </div>
                              </div>
                         </div>`
            $("#result").append(getdata);
        }
        
     }
    

    
    
}
