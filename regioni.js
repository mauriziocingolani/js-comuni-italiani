/* 
 * Estrae la lista dei link alle 20 regioni. 
 * Rimpiazza il contenuto della pagina con i 20 link ale pagine delle regioni.
 * 
 * Pagina di applicazione: http://www.comuni-italiani.it/regioni.html
 */
var regioni = $('a[href$="index.html"]').filter(function (index, element) {
    return parseInt($(element).attr('href'), 10) > 0;
});
$('body').empty();
regioni.each(function (index, regione) {
    $('body').append(regione);
    $('body').append('<br />');
});