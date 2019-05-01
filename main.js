$(document).ready(function () {

    var submit = $('form');
    submit.on('submit', function (event) {
        var takeName = $('#name').val();
        console.log(takeName)
        event.preventDefault();


        $.ajax({
            method: 'GET',
            url: 'https://anapioficeandfire.com/api/characters?name='+takeName,
            success: function (resulte) {
                console.log(resulte);

                var $h2 = $('<h2/>').append('section');
                $('#info').text("Every thing about");
                $('#info').css({'color': 'pink', 'size': '38px'});
                

                // var $name = $('<p/>').append('section');
                $('#name').text("Name:"+resulte[0].name);

             
                // var $pCulture = ('section').append$('<p/>')
                $('#culture').text("Culture: "+resulte[0].culture);

                // var $pGender = $('<p/>').append('section');
                $('#gender').text("Gender: "+resulte[0].gender);
                
                // var $pBorn = $('<p/>').append('section');
                $('#born').text("Born: "+resulte[0].born);
                
                // var $pTitles = $('<p/>').append('section');
                $('#titles').text("Titles: "+resulte[0].titles[0]);

                $('#playedBy').text("Played By: "+resulte[0].playedBy[0]);
                // $('#titles').text("Titles: "+resulte[0].titles[0]);
                // $('#titles').text("Titles: "+resulte[0].titles[0]);

            },
            error: function (error) {
                console.log(error);

            }
        })

    });


    $.ajax({
        method: 'GET',
        url: 'https://got-quotes.herokuapp.com/quotes',
        success: function (resulte) {
            console.log(resulte);

            $('#quote').text(resulte.quote);
            $('#character').text("By: "+resulte.character);
           


        },
        error: function (error) {
            console.log(error);

        }
    })
})