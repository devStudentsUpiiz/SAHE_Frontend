var url = 'http://localhost:8080/api/v1';
$('.js-exportable').DataTable({
    ajax : {
        url : app.backend + '/all',
        dataSrc : function(json) {
            return json;
        }
    },
    dom: 'Bfrtip',
    responsive: true,
    buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
    ]
});