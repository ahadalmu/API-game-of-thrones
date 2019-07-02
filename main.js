$(document).ready(function () {

    var favChar = [];

    function renderChar() {

        if(localStorage.getItem('favChar') !== null){
          favChar = JSON.parse(localStorage.getItem('favChar'));
          favChar.forEach(function(char){
            $('<li>').text(char).appendTo($('#fav'));
          })
        }
        
      }
     
      renderChar();

      $('#fav').hide();
      $('#fav').click(function () {
          $('span', this).toggle();
      });
      $('#fav').click(function () {
          $('#fav').toggle('slow');
      });


    var submit = $('form');
    submit.on('submit', function (event) {
        var takeName = $('#name').val();
        console.log(takeName)
        event.preventDefault();
        $('body').css('background-image', "url(./img/poster2.jpg)");


        $.ajax({
            method: 'GET',
            url: 'https://anapioficeandfire.com/api/characters?name='+takeName,
            success: function (resulte) {
                console.log(resulte);
                console.log(resulte[0].name);


                var $h2 = $('<h2/>').append('section');
                $('#name1').text("Every thing you want to know about: "+resulte[0].name);     
                $('#name1').css({'color': 'pink', 'size': '38px'});
                

             
                
                $('#culture').html("<strong>Culture: </strong>"+resulte[0].culture);

                $('#gender').text("Gender: "+resulte[0].gender);
                
             
                $('#born').text("Born: "+resulte[0].born);
           
                $('#titles').text("Titles: "+resulte[0].titles[0]);

                $('#playedBy').text("Played By: "+resulte[0].playedBy[0]);
             
            
                  
                  $('<button/>').appendTo('section').text('like').on('click', function(event){

                    event.preventDefault();
              
                    // var value = $('#listInput').val();
                    // $()
                    favChar.push(takeName);
                    localStorage.setItem('favChar', JSON.stringify(favChar));
                    $('<li>').text(takeName).appendTo($('#fav')).css({'list-style':'none','font-family':'Just Another Hand', 'color':'pink'});
                  
                 
                })

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
            $('#quote').css('color','HONEYDEW');
            $('#character').text("By: "+resulte.character);
           

        },
        error: function (error) {
            console.log(error);

        }
    })
    
    // $("#fav").hide();

    // $("#fav1").click(function(){
    //   $this.parent().next("#fav").toggle(slow);
    //   return false;
    // })

    // $('#logo').on('click', togglelogo);

    // function togglelogo(){
    //     console.log('hiii')
    //     $('#got-info').toggleClass('show');
    //   }
    
})
