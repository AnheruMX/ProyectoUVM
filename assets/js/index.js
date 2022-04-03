$(function(){

    $(document).on('click',function(e){

        let elemento = $(e.target).attr('id');
        console.log(elemento);

        if(elemento == 'index-contenedor-modal-' || elemento == 'index-btn-cerrar-modal')
        {
            $('#index-contenedor-modal-').hide();
        }      
    });

    $('#Attach-AC-0121').on('click',function(e){
        $('#index-contenedor-modal-').show();
    });

    $('#Attach-AC-0221').on('click',function(e){
        $('#index-contenedor-modal-').show();
    });
});