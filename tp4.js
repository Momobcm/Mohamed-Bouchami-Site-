function affichagetab()
{
    document.write('<table border=2px width=30%');
    for(let i = 0 ; i <= 30; i++){
        document.write('<tr><td>*</td><td>*</td><td>*</td></tr>');
    }
    document.write('</table>');
}

function  affichagetab2()
{
    var nombre=prompt("Donner le nombre de ligne")
    document.write('<table border=2px width=30%');
    for(let i = 1 ; i <= nombre; i++){
        document.write("<tr><td>"+i+"</td><td>*</td><td>*</td></tr>");
    }
    document.write('</table>');
    
}

function seconnecter()
{
    var identifiant = prompt("Donner votre Identifiant");
    var mdp = prompt("Donner votre Mot de passe");
    if (identifiant == "admin" && mdp == "admin")
    {alert("Identifiant correct");    
    document.write("<h1 style='color:blue';> Bonjour Admin </h1>" );}
    else
    alert("Identifiant incorrect");
}

function seconnecter2()
{
    var i = 0
    do {
    var identifiant = prompt("Donner votre Identifiant");
    var mdp = prompt("Donner votre Mot de passe");
    if( identifiant == "admin" && mdp == "admin")
    {
        alert("Identifiant correct");    
    document.write("<h1 style='color:blue';> Bonjour Admin </h1>" );
    break;
    }
    else
    alert("Identifiant incorrect");
    i+=1;
} while (i<3);
if  (i==3)
alert("Délai dépassé")
}

function cdc()
{
    var chaine = prompt("Donner un mot")
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("a chaine contient " + chaine.length+ "caractères "+"<br>");
    document.write("la première lettre est " + chaine.substr(0,1)+"<br>")
    document.write("la dernière lettre est " + chaine.substr(-1)+"<br>")


}

function Swich()
{
    var color= prompt ("Entrez une couleur");
    switch(color)
    {
        case "rouge" : document.body.style.background = "red";
        break;
        case "ROUGE" : document.body.style.background = "red";
        break;
        case "bleu" : document.body.style.background = "blue";
        break;
        case "BLEU" : document.body.style.background = "blue";
        break;

        default:alert("couleur non")
    }
}

function bonus()
{


}