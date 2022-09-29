let getAmigos = ()=>{
    let list = $('#lista');
    list.empty();
    
    $.get('http://localhost:5000/amigos', respuesta => {
        for (let i = 0; i < respuesta.length; i++) {
            list.append(`<li>${respuesta[i].name}</li>`);
            
        }
    })
}

$('#boton').click(getAmigos)

$('#search').click(()=> {
    let id = $('#input').val()
    $.get(`http://localhost:5000/amigos/${id}`, respuesta => {
        $('#amigo').text(respuesta.name)
    })
})

$('#delete').click(()=>{
    let id = $('#inputDelete').val()
    $.ajax({
        url: `http://localhost:5000/amigos/${id}`,
        type: 'DELETE',
        success: () => {
            $('#success').text(`Amigo ${id} eliminado con éxito`);
            getAmigos(); //Refresca la lista al eliminar un amigo.
        }
    })
})