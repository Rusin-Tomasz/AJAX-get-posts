$(function () {

    var jsonApiLink = 'https://jsonplaceholder.typicode.com/photos/'
    
    var countPostFlag = $('.list-item').length + 10
    
    function getPost(n) {

        $.getJSON(jsonApiLink + n, function(data) {
            console.log(data);

            var figureHolder = document.createElement('figure');
            $(figureHolder).attr('class', 'list-item');
            var figcaptionHolder = document.createElement('figcaption');
            $(figcaptionHolder).text(n + '' + data.title);
            var imgHolder = document.createElement('img');
            $(imgHolder).attr("src", data.url);

            $(figureHolder).append(imgHolder, figcaptionHolder);

            $('#post-list-container').append(figureHolder);
            if( n < countPostFlag) {
                getPost(++n)
            }
        });
    };
    
    
    /* Zdarzenie click na przycisku */
    $('#load-content').click(function(){
       countPostFlag = $('.list-item').length + 10;
        getPost($('.list-item').length + 1)
    });
    
});
