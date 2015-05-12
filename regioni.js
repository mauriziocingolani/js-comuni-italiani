/* 
 * Estrae la lista dei link alle 20 regioni. 
 * Svuota la pagina e inserisce una sezione per ogni regione in cui viene
 * caricato il titolo, i dati e la lista delle province di ogni regione.
 * 
 * Pagina di applicazione: http://www.tuttitalia.it
 */
var regioni = $('#ar dt a');
$('body').empty();
regioni.each(function (index, regione) {
    if (index == 0) {
        var url = $(regione).attr('href');
        var div = $('<div id="' + url.replace('/', '') + '">');
        $('body').append(div);
        // nome regione
        var title = $('<div id="' + url.replace('/', '') + '_title">');
        div.append(title);
        title.load('http://www.tuttitalia.it' + url + ' #es h1');
        // dati
        var data = $('<div id="' + url.replace('/', '') + '_data">');
        div.append(data);
        data.load('http://www.tuttitalia.it' + url + ' #uj table.uj');
        // province
        var province = $('<div id="' + url.replace('/', '') + '_province">');
        div.append(province);
        province.load('http://www.tuttitalia.it' + url + ' #ea table.af');
    }
});
