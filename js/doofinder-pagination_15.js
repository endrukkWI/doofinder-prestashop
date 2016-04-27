function paginationButton(nulled,nulled_1) {
    $('#pagination a').not(':hidden').each(function () {
            if ($(this).attr('href').search(/[&|\?]p=/) == -1)
                var page = 1;
            else
                var page = $(this).attr('href').replace(/^.*[&|\?]p=(\d+).*$/, '$1');

            var location = window.location.href.replace(/#.*$/, '');
            $(this).attr('href', location+current_friendly_url.replace(/\/page-(\d+)/, '')+'/page-'+page);
    });
    $('#pagination li').not('.current, .disabled').each(function () {
            var nbPage = 0;
            if ($(this).attr('id') == 'pagination_next')
                    nbPage = parseInt($('#pagination li.current').children().html())+ 1;
            else if ($(this).attr('id') == 'pagination_previous')
                    nbPage = parseInt($('#pagination li.current').children().html())- 1;

            $(this).children().click(function () {
                    if (nbPage == 0)
                            p = parseInt($(this).html()) + parseInt(nbPage);
                    else
                            p = nbPage;
                    p = '&p='+ p;
                    reloadContent(p);
                    nbPage = 0;
                    return false;
            });
    });
}

