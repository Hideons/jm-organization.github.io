/**
 * Created by JM Organization on 10.08.2017.
 */

function search_news(news, filter) {
    var pattern = new RegExp(news, "i");

    $('.short-article').each(function () {
        var title = $(this).data('article');

        if (news == '' && news == ' ') {
            if (pattern.test(title)) {
                $(this).show();
            } else {
                $('.short-article').hide();
            }
        }
    });
}
