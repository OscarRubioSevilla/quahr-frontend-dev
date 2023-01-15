export const patientTableAdapter = patients => {

    return patients.map((patient) => {

        const { nombre, email, apellido_paterno, apellido_materno, paciente_codigo } = patient;

        return {
            code: paciente_codigo,
            name: nombre,
            apellido_paterno,
            apellido_materno,
            email
        }
    })
}