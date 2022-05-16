let horaFinal, diaFinal;
let citas = [];
const guardarCita = () => {
    citas.push({ hora: horaFinal, dia: diaFinal });
    console.log(citas);
    localStorage.setItem('Horarios', JSON.stringify(citas));
    alert("Cita guardada");
}

const saveHorario = (hora, dia) => {
    horaFinal = hora;
    diaFinal = dia;
}

const getCitas = () => {
    let horariosParse = JSON.parse(localStorage.getItem('Horarios'));
    console.log(horariosParse);
    let i = 0;
    horariosParse.forEach(horario => {
        console.log("Entrandooo")
            // dataPrueba.push(${horario.dia}, ${horario.hora});
        document.getElementById(`horario${i}`).innerHTML = `${horario.dia}, ${horario.hora}`;
        i++;
    });

}