function validarUsuario() {
    var user=document.getElementById("txtUser").value;
    var pass=document.getElementById("txtPassword").value;
    var lblError=document.getElementById("lblError");

    var repoUsuarios = new RepoUsuarios();
    var usuario = repoUsuarios.getUsuario (user);
    if (usuario != undefined) {
        if (usuario.esPasswordValida(pass)) {
            window.location = "busquedaWindows.html";
        } else {
            lblError.innerHTML = "<i class='fa fa-exclamation-circle prefix animated pulse infinite'></i>" 
            + "Password Incorrecta!"
            + "<br>";
        }
    } else {
        lblError.innerHTML = "<i class='fa fa-exclamation-circle prefix animated pulse infinite'></i>" 
            + "Usuario no encontrado!"
            + "<br>";
    }
}

