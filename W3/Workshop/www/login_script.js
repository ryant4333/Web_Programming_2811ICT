$( document ).ready(() => {
    console.log("ready!")
    $("#loginform").submit((event) => {
        event.preventDefault()
        console.log("Submit detected")
        ajaxPost()
    })

    function ajaxPost() {
        let formData = {
            email : $("#email").val(),
            upwd : $("#upwd").val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "api/login",
            data : JSON.stringify(formData),
            dataType: 'json',
            success : (auth) => {
                if (auth.ok == true) {
                    console.log("good")
                    $("#errormsg").removeClass("showmessage")
                    $("#errormsg").addClass("hidemessage")
                } else {
                    console.log("bad")
                    $("#errormsg").removeClass("hidemessage")
                    $("#errormsg").addClass("showmessage")
                }
                /*$("#postResultDiv").html("<p> Success <br> Email Address: " + customer.email + "<br>" +
                "Password:" + customer.upwd + "</br> Valid User: " + customer.valid + "</p>") */
            },
            error : function(e) {
                alert("Error!")
                console.log("Error: " + e)
            }
        })
        resetData()
    }

    resetData = () => {
        $("#email").val("")
        $("#upwd").val("")
    }
})