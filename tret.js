function main(){
    var name = document.getElementById('name').value ;
    var fname = document.getElementById('fname').value ;
    var func = document.getElementById('func').value ;
    var gender = document.getElementById('gender').value ;
    var jour = parseInt( document.getElementById('jour').value );
    var mois = parseInt( document.getElementById('mois').value) ;
    var year = parseInt( document.getElementById('year').value );
    var ep = parseInt( document.getElementById('ep').value );
    var sf = document.getElementById('sf').value ;
    var ssn = parseInt( document.getElementById('ssn').value );

    var p = year + ep;

    if(jour > 31 ){
        alert("you action declined ( Birth Day )");
    }
    else if(jour < 1 ){
        alert("you action declined ( Birth day )");
    }
    if(mois > 12){
        alert("you action declined ( Birth Month )");
    }
    else if(mois < 1 ){
        alert("you action declined ( Birth Month )");
    }
    if( year > 2023 ){
        alert("you action declined ( Birth Year )");
    }
    else if(year < 1900 ){
        alert("you action declined ( Birth Year )");
    }
    if ( ep > 12){
        alert("you action declined ( Exprience Year )");
    }
    else if(ep < 1 ){
        alert("you action declined ( Exprience Year )");
    }
    if (ssn < 1111){
        alert("you action declined ( Social Security Number )");
    }
    else if(ssn > 9999 ){
        alert("you action declined ( Social Security Number )");
    }
    if ( p > 2004 ){
        alert("you action declined ( Birth year and Exprience Years Does not match )");
    }

}
function next(){
    alert("sorry but still a beta version :<");
}