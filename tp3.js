function resultat()
{
    var a = document.getElementById("a1").value;
    var b = document.getElementById("a2").value;
    var c = document.getElementById("a3").value;
    var d = document.getElementById("c1").value;
    var e = document.getElementById("c2").value;
    var f = document.getElementById("c3").value;
    
        var somme = Number(a)*(d) + Number(b)*(e) + Number(c)*(f) ;
        var coef=  Number(d)+Number(e)+Number(f)
    
        var moyenne = somme / coef;

        a4.value = moyenne ;

        var moyenne = Number(document.getElementById("a4").value)
    if (moyenne<10)
    a5.value = "Redoublent"
    else if ( moyenne<14)
    a5.value = "Passable"
    else
    a5.value = "Mention Bien"
}