$( document ).ready(() => {
    console.log("ready!")
    $("#loginform").submit((event) => {
        event.preventDefault()
        console.log("Submit detected")
        ajaxPost()
    })

    function ajaxPost() {
        let formData = {
            email : $("#email").val()
            upwd : $("#upwd").val()
        }
        $.ajax({
            type : "POST",
            contentType : "application/json",
            url : window.location + "api/login",
            data : JSON.stringify(formData),
            dataType: 'json',
            success : (customer) => {
                if (customer.valid == true) {
                    console.log("good")
                    $("#loginform").removeClass("fail")
                    $("#loginform").addClass("success")
                } else {
                    console.log("bad")
                    $("#loginform").removeClass("success")
                    $("#loginform").addClass("fail")
                }
                $("#postResultDiv").html("<p> Success <br> Email Address: " + customer.email + "<br>" +
                "Password:" + customer.upwd + "</br> Valid User: " + customer.valid + "</p>")
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