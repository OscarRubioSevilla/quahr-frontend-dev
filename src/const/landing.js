export const FEATURES_MENU = [{
        id: 'agenda',
        name: 'Agenda',
        image: 'agenda-deg.png',
        description: 'Optimiza tu tiempo con tu agenda en la nube, siempre sincronizada de tu mano, a tu escritorio con cualquier dispositivo',
        description_image: 'caracteristicas_agenda.png'
    },
    {
        id: 'caja',
        name: 'Caja',
        image: 'caja-deg.png',
        description: 'Tus ingresos y costos bajo control, cuentas por cobrar, personaliza tu lista de precios y así recupera tu inversión',
        description_image: 'caracteristicas_caja.png'
    },
    {
        id: 'pacientes',
        name: 'Pacientes',
        image: 'pacientes-deg.png',
        description: 'Fichas clínica, Odontograma, planes de tratamiento, presupuesto y seguimiento de pagos, archivo, recetas, etc...',
        description_image: 'caracteristicas_pacientes.png'
    },
    {
        id: 'inventario',
        name: 'Inventario',
        image: 'inventario-deg.png',
        description: 'Controla entradas y salidas de materiales, también puedes hacer tu lista de compra para tu visita al deposito dental',
        description_image: 'caracteristicas_inventario.png'
    },
    {
        id: 'laboratorio',
        name: 'Laboratorio',
        image: 'laboratorio-deg.png',
        description: 'Lleva un control de tus órdenes de trabajo por laboratorio, de cada paciente, lo ya recibido o pendientes, lleva costos, etc..',
        description_image: 'caracteristicas_laboratorio.png'
    },
    {
        id: 'comunidad',
        name: 'Comunidad',
        image: 'comunidad-deg.png',
        description: 'Reunimos a profesionales de todo el mundo para compartir conocimiento, opiniones, reseñas de productos, aquí hay espacio para todos',
        description_image: 'caracteristicas_comunidad.png'
    }
]

export const QUESTIONS = [

    {
        id: 1,
        title: '¿Qué es Quahr dental?',
        description: 'Quahr Dental es un sistema de administración y control clÍnico para odontólogos y clÍnicas odontológicas, para tener tu agenda a la mano cuando y donde la necesites.'
    },
    {
        id: 2,
        title: '¿Dónde se guarda mi información?',
        description: 'Su información se encuntra almacenada en una caja de zapatos.'
    },
    {
        id: 3,
        title: '¿Está segura la información que almaceno?',
        description: 'Mas segura que donde estuvo el chapo.'
    },
    {
        id: 4,
        title: '¿Quién tiene acceso a la información de mi clínica?',
        description: 'Nadie, ni nosotros.'
    },
    {
        id: 5,
        title: '¿En qué países puedo usar Quahr dental?',
        description: 'Solo en México.'
    },
    {
        id: 6,
        title: '¿Tengo algún límite de información que pueda cargar?',
        description: 'El límite es tu imaginación.'
    },
    {
        id: 7,
        title: '¿Tendré que pagar por cada actualización de la plataforma?',
        description: 'Todose debe de pagar.'
    }
]

export const API_URL = '';

export const PACKAGES = [{
        id: 1,
        title: 'Profesional',
        features: ['Hasta 100 pacientes', 'Incluye 7 imprimibles para tu control', 'Historia clinica de tus pacientes', 'Recordatorios a pacientes']


    },
    {
        id: 2,
        title: 'Avanzado',
        features: ['*Hasta 100 pacientes', 'Incluye 7 imprimibles para tu control', 'Historia clinica de tus pacientes', 'Recordatorios a pacientes']


    },
    {
        id: 3,
        title: 'Especialista',
        features: ['*Hasta 100 pacientes', 'Incluye 7 imprimibles para tu control', 'Historia clinica de tus pacientes', 'Recordatorios a pacientes']


    }
]
export const PERIODS = [{
        package_id: 1,
        period_number: 1,
        payment: 178,
        savings: 294,
        cash: 10008

    },
    {
        package_id: 1,
        period_number: 2,
        payment: 965,
        savings: 291,
        cash: 1000

    },
    {
        package_id: 1,
        period_number: 3,
        payment: 879,
        savings: 29,
        cash: 1000

    },
    {
        package_id: 2,
        period_number: 1,
        payment: 4756,
        savings: 290,
        cash: 10000

    },
    {
        package_id: 2,
        period_number: 2,
        payment: 2224,
        savings: 294,
        cash: 1048

    },
    {
        package_id: 2,
        period_number: 3,
        payment: 222,
        savings: 29,
        cash: 1000

    },
    {
        package_id: 3,
        period_number: 1,
        payment: 325,
        savings: 29,
        cash: 1000

    },
    {
        package_id: 3,
        period_number: 2,
        payment: 232,
        savings: 291,
        cash: 10144

    },
    {
        package_id: 3,
        period_number: 3,
        payment: 22,
        savings: 2914,
        cash: 1014

    },
]

// Generar constante de Beneficios
export const BENEFITS = [{
        id: 1,
        name: 'Odontograma',
        image: 'beneficios_odontograma.png',
        banner: 'bg-odontograma.jpg',
        description: 'El odontograma más completo, intuitivo y fácil de personalizar.'
    },
    {
        id: 2,
        name: 'Especialidades',
        image: 'beneficios_especialidades.png',
        banner: 'bg-especialidades.jpg',
        description: 'Quahr se adapta a todas las especialidades Odontológicas, tendrás un Periodontograma interactivo, o historial para Ortodoncia.'
    }, {
        id: 3,
        name: 'Historial Clinico',
        image: 'beneficios_historialclinico.png',
        banner: 'bg-historial-clinico.jpg',
        description: 'Revisa todas las interacciones con tus pacientes en una sencilla línea del tiempo, ve cómo se relaciona tu clínica con una correcta administración.'
    },
    {
        id: 4,
        name: 'Diagnosticos',
        image: 'beneficios_diagnosticos.png',
        banner: 'bg-diganosticos.jpg',
        description: 'Nuestros catálogos permiten hacer asignaciónes de código internacional CIE, en tu trabajo con aseguradoras o al generar reportes vamos un paso adelante.'
    },
    {
        id: 5,
        name: 'Notificaciones',
        image: 'beneficios_notificaciones.png',
        banner: 'bg-notifiaciones.jpg',
        description: 'Recibe notificaciones de tus próximas citas, recordatorios de entregas de laboratorios o sobre tus contactos con toda la comunidad odontológica.'
    }
];