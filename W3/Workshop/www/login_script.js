$( document ).ready(() => {
    console.log("ready!")
    $("#loginform").submit((event) => {
        event.preventDefault()
        console.log("Submit detected")
        ajaxPost()
    })

    function pageRedirect() {
        window.location.pathname = '/mypage.html'
    }

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
            success : (customer) => {
                if (customer.valid == true) {
                    console.log("good")
                    pageRedirect()
                } else {
                    console.log("bad")
                    $("#errormsg").removeClass("hidemessage")
                    $("#errormsg").addClass("showmessage")
                }
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