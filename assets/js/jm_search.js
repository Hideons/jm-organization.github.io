/**
 * Created by JM Organization on 10.08.2017.
 */

//var input = '#search';

/*$(input).on("input", function () {
    $('#article').each(function () {
        $('#article[data-article="'+$(input)[0].value+'"]').show();
    });
});*/

var input_p = $('#search');

input_p.oniput = function () {
    $('#article').each(function () {
        $('#article[data-article="'+$(input)[0].value+'"]').show();
    });
};
