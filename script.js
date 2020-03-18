function ShowFact()
{
    var url = 'https://api.chucknorris.io/jokes/random';
    var request = new XMLHttpRequest();

    request.open('GET', url);
    request.onload = function()
    {
        var factData = JSON.parse(request.responseText);
        console.log(factData);
        RenderFact(factData);
    }
    request.send();
}

function RenderFact(data)
{
    var dateElement = document.getElementById("created_at");
    var iconElement = document.getElementById("icon");
    var textElement = document.getElementById("text");

    var date = `${data.created_at}`.substring(0,19);

    dateElement.innerText = date;
    iconElement.setAttribute('src', `${data.icon_url}`);
    textElement.innerText = `${data.value}`;
    textElement.setAttribute('style', "border: 1px solid black");


}
/*
{
    "categories":[],
    "created_at":"2020-01-05 13:42:19.897976",
    "icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
    "id":"dFY9GPyiR4muQQGrc6mjsg",
    "updated_at":"2020-01-05 13:42:19.897976",
    "url":"https://api.chucknorris.io/jokes/dFY9GPyiR4muQQGrc6mjsg",
    "value":"Chuck Norris can run so fast, he can actually shoot an apple off of his own head"
}-->*/