$( document ).ready(() => {
    console.log("Ready!")
    $("#loginform").submit((event) => {
        event.preventDefault()
        ajaxPost()
    })

    ajaxPost = () => {
        //Prepare form data form web form
        let formData = {
            email : $("#email").val(),
            upwd : $("#upwd").val()
        }

        $.ajax({  //Do ajax post
            type : "POST",
            contentType: "application/json",
            url : window.location + "api/login",
            data : JSON.stringify(formData),
            dataType : 'json',
            success : (customer) => {
                if (customer.valid == true) {
                    $("loginform").removeClass("fail")
                    $("loginform").addClass("success")
                } else {
                    $("loginform").removeClass("success")
                    $("loginform").addClass("fail")
                }
                $("#postResultDiv").html("<p>" + "Post Succssfully! <br>" + "Email Address: " + customer.email + "</br>" +
                "Password: " + customer.upwd + "</br>" + "Valid User: " + customer.valid + "</p>")
            },
            error : (e) => {
                alert("Error!")
                console.log("Error: ", e)
            }
        })
        //reset formdata after posting
        resetData();
    }
    resetData = () => {
        $("#email").val("")
        $("#upwd").val("")
    }
})
