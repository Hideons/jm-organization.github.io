/**
 * Created by Admin on 15.07.2017.
 */

$(document).ready(function () {
    var web_sites_block = $('.web-sites');
    var href_pattern_before = /([a-z]{3,6}:\/\/)/g;
    var href_pattern_after = /\/([\w@\/?=&\.%#]{0,256})\/?/g;

    var other_names_block = $('#other-names');
    var other_name_pattern = /test/;

    web_sites_block.each(function (index, element) {
        var $sites = $(element).data('ws').split(',');

        $sites.forEach(function (site) {
            $(element).append(tags.tag({
                tag: 'a',
                tagContent: tags.tag({
                    tag: 'span',
                    attributes: {
                        class: 'label label-success'
                    },
                    tagContent: site.replace(href_pattern_before, '').replace(href_pattern_after, '')
                }),
                attributes: {
                    href: site,
                    style: 'padding-right: 4px',
                    target: '_blank'
                }
            }));
        });
    });

    other_names_block.each(function (index, element) {
        var $other_names = other_names_block.data('on').split(',');

        $other_names.forEach(function (site) {
            $(element).append(tags.tag({
                tag: 'a',
                tagContent: tags.tag({
                    tag: 'span',
                    attributes: {
                        class: 'label label-default'
                    },
                    tagContent: other_name
                }),
                attributes: {
                    href: '',
                    style: 'padding-right: 4px'
                }
            }));
        });
    });
});