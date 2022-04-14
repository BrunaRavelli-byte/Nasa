$("#enviar").click(function(event){
    event.preventDefault();
    const data = $("#data").val();
    console.log(data);

    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?date=${data}&api_key=cEtWLbTgpAdired7zmGGUDsRcNc6a5akkkPa5PH2`, 
        success: function (requisicao){
            $("#p").text(requisicao.date);
            $("#titulo").text(requisicao.title);
            $("#image").attr("src", `${requisicao.hdurl}`);
            $("#image").show();
            $("p").show();
            $("#informação").text(requisicao.explanation);
        }
    })
})

let currentDate = new Date();
const day = currentDate.getDate().toString().padStart(2, '0');
const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
const year = currentDate.getFullYear().toString();

currentDate = `${year}-${month}-${day}`;

const dataEscolhida = $('#data').val();
function current(data){
    if (dataEscolhida > currentDate) {
        console.log("[Aviso!] a data informada não pode ser superior a data atual");
}
}

