/* 
 * Estrae i link delle province
 */

$('body').append($('<div id="province"></div>'))
$('a').each(function (index, a) {
    $('#province').load('http://www.comuni-italiani.it/' + $(a).attr('href'));
});

