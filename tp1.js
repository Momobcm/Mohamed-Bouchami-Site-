function calcul_moyenne()
{
    var note1=prompt("Donner une premiere note svp:");
    var note2=prompt("Donner une deuxieme note svp:");
    var note3=prompt("Donner une troisieme note svp:");
    var note4=prompt("Donner une quatrieme note svp:");

    var somme = Number(note1)*2 + Number(note2)*2 + Number(note3)*2 + Number(note4)*3;

    var moyenne = somme / 9 ;
    
    document.write("Voici la somme:    " +somme )
    document.write(" Voici la moyenne:    " +moyenne )

    if (moyenne<10)
    document.write(" vous etes redoublant")
    else
    document.write(" vous etes admis")
}

function age_test()
{
    var age=prompt("Donner votre age")

    if (age<18)
    document.write("Vous etes mineur")
    else
    document.write("Vous etes majeur")
}

function simple_affichage()
{
    var nom=prompt("Quel est votre nom")
    var prenom=prompt("Quel est votre prenom")

    document.write("<div style='background-color:SlateBlue; border:2px solid blue; text-align: center ; height:auto;'>");
    document.write("<h1 style='color:blue';> Bonjour "+ prenom +" " + nom + "</h1>" );
    document.write("</div>");
}

function test_color()
{
    var couleur = prompt("donner une couleur");
    if (couleur == "rouge" || couleur == "ROUGE" || couleur == "R" || couleur == "r")
    document.body.style.background="red";
    else if ( couleur =='vert' || couleur == "VERT" || couleur == "V" || couleur == "v")
    document.body.style.background="green";
    else if ( couleur =='bleu'|| couleur == "BLEU" || couleur == "B" || couleur == "b")
    document.body.style.background="blue";
    else if ( couleur =='jaune'|| couleur == "JAUNE" || couleur == "J" || couleur == "j")
    document.body.style.background="yellow";
    else
    alert("couleur inconnue ! ..... ");
    
}
 function somme()
 {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a) + Number(b) ;
    t3.value = s ;
 }

 function soustraction()
 {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a) - Number(b) ;
    t3.value = s ;
 }

 function produit()
 {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a) * Number(b) ;
    t3.value = s ;
 }

 function division()
 {
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
    var s = Number(a) / Number(b) ;
    t3.value = s ;
 }

 function parite()
 {
    var x = Number(document.getElementById("t1").value)
    if (x%2==0){
    alert("PAIR");
    t3.value = "Pair"}
    else{
    alert("IMPAIR")
    t3.value = "Impair"}
 }

 function swap()
 {
   var a = document.getElementById("t1").value;
    var b = document.getElementById("t2").value;
   var v3 = "";
   a = document.getElementById("t1").value;
   b = document.getElementById("t2").value;
   v3=a;
   a=b;
   b=v3;

   inputOne.value = a;
   inputTwo.value = b;
 }