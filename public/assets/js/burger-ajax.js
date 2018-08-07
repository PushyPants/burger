$('.submit').on('click', function(){
    let newBurger = {
        name: $('#burger-input').val().trim()
    }

    $.ajax('/add/burger', {
        type: 'POST',
        data: newBurger
    }).then(function(){
        console.log('created new burger')
        location.reload();
    });
});

$('.eat').on('click', function(){
    let burgerId = {
        id: $(this).data('id')
    };

    $.ajax('/update/burger',{
        type: 'POST',
        data: burgerId
    }).then(function(){
        console.log('updating burger');
        location.reload();
    })
})

$('.delete').on('click', function(){
    let burgerId = {
        id: $(this).data('id')
    };

    $.ajax('/update/burger',{
        type: 'DELETE',
        data: burgerId
    }).then(function(){
        console.log('updating burger');
        location.reload();
    })
})