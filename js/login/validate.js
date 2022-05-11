function validarProgramaAcademico(data){
    switch(data){
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
            alert("Elija un programa académico");
    }
}

function validarPeriodo(data){
    switch(data){
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
            alert("Elija un semestre");
    }
}

function validarGenero(data){
    switch(data){
        case "1":
            return "F";
        case "2":
            return "M";
        default:
            alert("Elija un género");
    }
}
export {validarGenero,validarProgramaAcademico,validarPeriodo};