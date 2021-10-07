LUIGC.message({
    title: 'Atenção',
    content: '<h1>CPF inválido, favor alterar</h1>',
    id: 'fluig-modal',
    actions: [{
    'label': 'Save',
    'bind': 'data-open-modal',
    },{
    'label': 'Close',
    'autoClose': true
    }]
    }, function(err, data) {
    if(err) {
    // clicou no botao de cancelar
    console.log('clicou no botao de cancelar')
    } else {
    // clicou em ok
    console.log('clicou em ok')
    }
    });

    //https://style.fluig.com/javascript.html#modals