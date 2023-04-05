$(document).ready(function () {
    let data = [
      { "codigo": "001", "producto": "kimono", "pedidos": 26, "valoracion": 4, "visitas": 1000 },
      { "codigo": "002", "producto": "yukata", "pedidos": 26, "valoracion": 4, "visitas": 1000 },
      { "codigo": "003", "producto": "kasa", "pedidos": 20, "valoracion": 3, "visitas": 100 },
      { "codigo": "004", "producto": "zori", "pedidos": 3, "valoracion": 2, "visitas": 10 },
      { "codigo": "005", "producto": "samurai", "pedidos": 40, "valoracion": 4, "visitas": 1000 },
      { "codigo": "006", "producto": "katana", "pedidos": 200, "valoracion": 5, "visitas": 8000 },
      { "codigo": "007", "producto": "kabuto", "pedidos": 66, "valoracion": 3, "visitas": 100 },
      { "codigo": "008", "producto": "yoroi", "pedidos": 92, "valoracion": 5, "visitas": 3000 },
      { "codigo": "009", "producto": "abanico japones", "pedidos": 26, "valoracion": 3, "visitas": 1000 },
      { "codigo": "010", "producto": "wagasa", "pedidos": 29, "valoracion": 4, "visitas": 1200 }
    ];

    let table = $('#myTable').DataTable({
        language: {
            search: "Buscar:",
            lengthMenu: "Mostrar _MENU_ registros por página",
            info: "Mostrando _START_ a _END_ de _TOTAL_",
            paginate: {
                first:      "Primero",
                previous:   "Anterior",
                next:       "Siguiente",
                last:       "Ultimo"
            },
          },
      "data": data,
      "columns": [
        { "data": "codigo" },
        { "data": "producto" },
        { "data": "pedidos" },
        { "data": "valoracion" },
        { "data": "visitas" }
      ],
      "order": [[1, "desc"]],
      "responsive": true,
    });

    // Add container class to wrapper element from dataTable plugin
    $("#myTable_wrapper").addClass("container");
    // $('#myTable').DataTable({
    //     // Change the text of the search box
    //     language: {
    //       search: "Filter results:"
    //     }
    //   });
    // $('#myTable_filter label').text('Buscar');
  });