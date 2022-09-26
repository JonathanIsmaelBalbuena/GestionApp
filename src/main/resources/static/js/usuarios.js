// Call the dataTables jQuery plugin
$(document).ready(function() {
  cargarUsuarios();
  $('#usuarios').DataTable();
});

function getHeaders() {
  return {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': localStorage.token
  };
}

async function cargarUsuarios() {
  const request = await fetch('api/usuarios', {
    method: 'GET',
    headers:  getHeaders()
  });
  const usuarios = await request.json();
  console.log(usuarios);
  
    let listadoHtml = '';
    for(let usuario of usuarios) {
      let botonEliminar = '<a href="#" onclick="eliminarUsuario(' + usuario.id + ')" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a>';
      let usuarioHTML = '<tr>' 
          + '<td>' + usuario.id +'</td>' 
          + '<td>' + usuario.nombre + " " + usuario.apellido +'</td>'
          + '<td>' + usuario.email + '</td>'
          + '<td>' + usuario.telefono +'</td>'
          + '<td>' + botonEliminar + '</td></tr>';

        listadoHtml += usuarioHTML;
    }
    document.querySelector('#usuarios tbody').outerHTML = listadoHtml;

}

async function eliminarUsuario(id) {
  if(!confirm('Desea eliminar este usuario ?')) { // alert con opcion SI/NO
    return;
  } 

  const request = await fetch('api/usuarios/' + id, {
    method: 'DELETE',
    headers:  getHeaders()
  });

  console.log("usuarios id: " + id + " eliminado" );

  location.reload;
  //cargarUsuarios();
}