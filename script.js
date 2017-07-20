$(document).ready(function(){
   $("button").click(callBack);
});

function callBack(){
    console.log("hehe xd");
    var values = $("#sign_up_form").serialize();
    $.ajax({
        url:"./form.php",
        method: "post",
        data: values,
        success: function(result){
            console.log("success: ", typeof(result));
            var Result = JSON.parse(result);


            if(Result.success === true){
                console.log("js success: ", Result);
                // console.log()
            }
            else{
                console.log("js error: " , Result);
            }


        },
        error: function(e){
            console.log("ajax connection error: " + e);
        }
    });
}