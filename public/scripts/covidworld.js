Swal.fire({
    title: 'STAY HOME STAY SAFE',
    
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })



$("#close").on("click",function(){
    Swal.fire({
        title: 'Thank You',
        // showConfirmButton: false,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
})

 var country;
 var readable;

$("input[type='text']").keypress(function(event){

     
    if(event.which===13){
        $("#v").removeClass("stats");
        $("#v1").html("<h3>Loading ...</h3>");
        $("#v2").html("");
        $("#v3").html("");
        country = $(this).val();
        $(this).val("");

    
 var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php?country="+country,
	"method": "GET",
	"headers": {
        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
        "x-rapidapi-key": "f4d2987378mshcbefff204317652p1ec503jsnff712c6cd94a"
	}
}



$.ajax(settings).done(function (response) {
    $(document).ready(function(){
        $("#v1").html("<h4>No Country Found</h4>");
     readable=JSON.parse(response)


      $("#v").addClass("stats");
      $("#v1").addClass("p1");
      $("#v2").addClass("p2");
      $("#v3").addClass("p3");
      
      $("#v1").html("<h3>Country: "+readable.latest_stat_by_country[0].country_name+"</h3>");
      $("#v2").html("<li>Total Tests: "+readable.latest_stat_by_country[0].total_tests+"</li>");
      $("#v2").append("<li>Total Cases: "+readable.latest_stat_by_country[0].total_cases+"</li>"); 
      $("#v2").append("<li>Active Cases: "+readable.latest_stat_by_country[0].active_cases+"</li>");
      $("#v2").append("<li>Total Recovered: "+readable.latest_stat_by_country[0].total_recovered+"</li>");
      $("#v2").append("<li>Total Deaths: "+readable.latest_stat_by_country[0].total_deaths+"</li>");
      $("#v3").html("<li>Record Date: "+readable.latest_stat_by_country[0].record_date_pure+"</li>");

     console.log(readable);
    })
});
}})






