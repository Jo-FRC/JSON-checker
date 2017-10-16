document.getElementById("button_check").addEventListener("click", function (){
    var checkJson = document.getElementById("json_checker").value;
    try {
        JSON.parse(checkJson); throw "Your JSON code is VALID";
    } catch (e) {
        if (e !== "Your JSON code is VALID") {
            document.getElementById('result').innerHTML = "Your JSON code is INVALID! :(";
        } else {
            document.getElementById('result').innerHTML = "Your JSON code is VALID! :)"; }
    }
});
