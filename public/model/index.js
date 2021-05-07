module.exports = (sequelize, Sequelize) => {
  const enfermos = sequelize.define("enfermos", {
    fecha_reporte_web: {
      type: Sequelize.STRING
    },
    id_de_caso: {
      type: Sequelize.STRING
    },
    fecha_de_notificaci_n: {
      type: Sequelize.STRING
    },
    departamento: {
      type: Sequelize.STRING
    },
    departamento: {
      type: Sequelize.STRING
    },
    departamento_nom: {
      type: Sequelize.STRING
    },
    ciudad_municipio: {
      type: Sequelize.STRING
    },
    ciudad_municipio_nom: {
      type: Sequelize.STRING
    },
    edad: {
      type: Sequelize.STRING
    },
    sexo: {
      type: Sequelize.STRING
    },
    fuente_tipo_contagio: {
      type: Sequelize.STRING
    },
    ubicacion: {
      type: Sequelize.STRING
    },
    estado: {
      type: Sequelize.STRING
    },
    pais_viajo_1_cod: {
      type: Sequelize.STRING
    },
    pais_viajo_1_nom: {
      type: Sequelize.STRING
    },
    recuperado: {
      type: Sequelize.STRING
    },
    fecha_inicio_sintomas: {
      type: Sequelize.STRING
    },
    fecha_diagnostico: {
      type: Sequelize.STRING
    },
    fecha_recuperado: {
      type: Sequelize.STRING
    },
    tipo_recuperacion: {
      type: Sequelize.STRING
    },
    per_etn_: {
      type: Sequelize.STRING
    }
  });

  return enfermos;
};