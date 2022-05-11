$('.alerta').hide();

$('#sign_up').submit(function (e) {
    e.preventDefault();
    $('.alerta').hide();
    var form = document.getElementById('sign_up');
    validar(form);
});

function validar(form) {
    if ((validarGenero(form)) != null) {
        if ((validarCorrer(form)) != null) {
            if ( (validarContrasena(form))!= null) {
                if ((validarProgramaAcademico(form))!= null) {
                    if ((validarPeriodo(form))!= null) {
                        crearUsuario(form);
                    } else {
                        console.log("Error en el periodo");
                    }

                } else {
                    console.log("Error en el programa académico");
                }

            } else {
                console.log("Error en la contraseña");
            }
        } else {
            console.log("Error en el correo");
            
        }
    } else {
        console.log("Error en el genero");
        
    }
}

function validarProgramaAcademico(form) {
    var data = form.carrera.value;
    switch (data) {
        case "1":
            return "Ing. en Sistemas Computacionales";
        case "2":
            return "Ing. en Alimentos";
        case "3":
            return "Ing. Mecatrónica";
        case "4":
            return "Ing. Ambiental";
        case "5":
            return "Ing. Metalúrgica";
        default:
            $('#alertaCarrera').show();
            return null;
    }
}

function validarPeriodo(form) {
    var data = form.semestre.value;
    switch (data) {
        case "1":
            return "1ro";
        case "2":
            return "2do";
        case "3":
            return "3ro";
        case "4":
            return "4to";
        case "5":
            return "5to";
        case "6":
            return "6to";
        case "7":
            return "7mo";
        case "8":
            return "8vo";
        case "9":
            return "9no";
        case "10":
            return "10mo";
        default:
            $('#alertaSemestre').show();
            return null;
    }
}

function validarGenero(data) {
    const checked = data.querySelector('input[name=sexo]:checked');
    if (checked) {
        switch (checked.id) {
            case "male":
                return "M";
                break;
            case "female":
                return "F";
                break;
            default:
                return "N";
        }
    } else {
        $('#alertaSexo').show();
        return null;
    }
}

function validarContrasena(form) {
    var pass = form.newContrasena.value;
    if ((form.newContrasena2.value) === pass) {
        if ((pass.length) < 8) {
            document.getElementById('alertaContrasena').innerHTML = 'La contraseña debe ser mayor a 8 caracteres';
            $('#alertaContrasena').show();
            return null;
        } else {
            return "1";
        }

    } else {
        document.getElementById('alertaContrasena2').innerHTML = 'Las contraseñas no coinciden';
        $('#alertaContrasena2').show();
        return null;
    }
}

function validarCorrer(form) {
    var email = form.email.value;
    if (!(email.includes("."))) {
        document.getElementById('alertaCorreo').innerHTML = 'Ingrese un correo válido*';
        $('#alertaCorreo').show();
        return null;
    } else {
        return "1";
    }
}

function crearUsuario(form) {
    var academicProgram = {
        id: parseInt(form.carrera.value),
        name: validarProgramaAcademico(form),
    };
    var rol = {
        id_Role: 1,
        description: "Student User",
        name: "STUDENT",
        status: 1
    };
    var user = {
        userName: form.boleta.value,
        email: form.email.value,
        password: form.newContrasena.value,
        rol: rol
    };
    var student = {
        name: form.nombre.value,
        lastName: form.apellidos.value,
        boleta: form.boleta.value,
        period: validarPeriodo(form),
        gender: validarGenero(form),
        user: user,
        academicProgram: academicProgram
    }
    console.log(JSON.stringify(student));
    signUp(student);
}
function signUp(data) {
    var url = 'http://localhost:8080/api/v1/auth/signup/student';
    $.ajax({
        url: url,
        data : JSON.stringify(data),
        method: 'POST',
        dataType : 'json',
        contentType: "application/json; charset=utf-8",
        success : function(json) {
            console.log("Usuario creado "+json);
        },
        error : function(error) {
            console.log(error);
            
        }
    })

}

