<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario de atención al cliente y mejora de la experiencia del consumidor',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> validar la apropiación de conocimientos sobre atención al cliente, fidelización, protocolos, medición y mejora del servicio.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'Un cliente recibe información clara, solución oportuna y trato respetuoso. ¿Qué resultado se fortalece principalmente?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La rotación del inventario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La satisfacción del cliente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El control de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La reducción del portafolio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 2,
          texto:
            'Ante una solicitud que no puede resolverse de inmediato, ¿qué actuación favorece una atención de calidad?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cerrar el caso sin explicación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transferir la responsabilidad al cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Informar el estado y establecer un tiempo de respuesta.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar registrar la solicitud.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 3,
          texto:
            '¿Qué práctica contribuye a conocer las expectativas del cliente sobre el servicio recibido?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recopilar y analizar su retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reducir los canales de contacto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar el seguimiento posterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Concentrarse únicamente en las ventas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 4,
          texto:
            'Si una empresa desea estandarizar la forma de atender consultas y reclamaciones, ¿qué recurso debe aplicar?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El balance contable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El protocolo de atención.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El plan de producción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El inventario de activos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 5,
          texto: '¿Qué acción favorece la fidelización después de una compra?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Finalizar todo contacto con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar continuamente las condiciones ofrecidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Realizar seguimiento y brindar soporte postventa.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Restringir el acceso a los canales de servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 6,
          texto:
            'Un cliente realiza compras recurrentes y mantiene su preferencia por la empresa debido a experiencias positivas. ¿Qué concepto se evidencia?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fidelización del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Rotación de personal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Distribución física.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Control presupuestal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el propósito de analizar las reclamaciones recurrentes de los clientes?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Identificar causas y establecer acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Aumentar los tiempos de respuesta.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir la información disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar modificaciones en el servicio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 8,
          texto:
            'Cuando se identifica una falla frecuente en la atención, ¿qué acción corresponde a un proceso de mejora?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mantener el procedimiento sin cambios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Definir e implementar una acción correctiva.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar el registro de casos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Suspender la comunicación con los clientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 9,
          texto: '¿Qué actuación es adecuada al recibir una reclamación?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Interrumpir al cliente para responder rápidamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Escuchar, registrar y orientar la solución del caso.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar documentar la situación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Responder sin verificar la información.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 10,
          texto:
            '¿Por qué es importante registrar las interacciones con los clientes?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque permite realizar trazabilidad y seguimiento.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Porque reemplaza la estrategia de servicio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque elimina la necesidad de protocolos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque evita medir la satisfacción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 11,
          texto:
            '¿Qué etapa de la relación con el cliente permite fortalecer la experiencia después de la compra?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La atención postventa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El almacenamiento interno.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La producción del bien.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El cierre contable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 12,
          texto:
            'Un manual de servicio al cliente debe orientar principalmente sobre:',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Políticas, procedimientos y estándares de atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Políticas de procesos exclusivos de fabricación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Registros tributarios de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Políticas de valoración de inventarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 13,
          texto: '¿Qué permite identificar el análisis del ciclo del servicio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Los puntos de interacción que influyen en la experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Únicamente los costos de producción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Solo las actividades contables.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exclusivamente la estructura organizacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 14,
          texto:
            'En un momento de verdad, ¿qué aspecto puede influir directamente en la percepción del cliente?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La calidad de la interacción durante el contacto con la empresa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El número de contactos registrados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura del almacén.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El método de depreciación utilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 15,
          texto:
            '¿Cuál indicador aporta información para valorar la calidad de la atención?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Nivel de satisfacción del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cantidad de maquinaria instalada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Valor de los activos fijos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Número de proveedores internacionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 16,
          texto:
            'Si una medición del servicio evidencia baja satisfacción, ¿qué debe hacer la organización?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar los resultados para conservar el proceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Analizar las causas y formular acciones de mejora.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar los mecanismos de medición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir los canales de atención disponibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 17,
          texto:
            'En el triángulo del servicio, ¿qué elemento orienta las acciones para responder a las necesidades del cliente?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La estrategia de servicio.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El inventario de mercancías.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La estructura financiera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El proceso de facturación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 18,
          texto:
            '¿Qué ventaja ofrece mantener información actualizada sobre los contactos y solicitudes de un cliente?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Facilita la continuidad y personalización de la atención.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Impide realizar seguimiento a los casos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reduce la posibilidad de conocer antecedentes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina la necesidad de responder solicitudes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 19,
          texto:
            '¿Qué práctica ayuda a prevenir la repetición de una falla detectada en el servicio?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Documentar el hallazgo y verificar la acción de mejora.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminar la evidencia del caso.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Evitar comunicar el hallazgo al responsable.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cerrar el caso sin analizar su causa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
        {
          id: 20,
          texto:
            'Una organización integra protocolos, seguimiento, medición y acciones de mejora. ¿Qué busca fortalecer con estas prácticas?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La calidad de la atención y la experiencia del cliente.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La reducción del contacto con el cliente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La eliminación de la retroalimentación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El aumento de los tiempos de respuesta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia una adecuada apropiación de los contenidos relacionados con la atención al cliente, la calidad del servicio, la fidelización y la mejora de la experiencia del consumidor.',
          mensaje_incorrecto:
            'Se recomienda revisar los contenidos del componente formativo Atención al cliente, especialmente los relacionados con servicio, fidelización, protocolos, medición, trazabilidad y acciones de mejora.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra una adecuada apropiación de los contenidos relacionados con la atención al cliente y la calidad del servicio.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Se recomienda revisar nuevamente el componente formativo Atención al cliente y realizar otro intento.',
    },
  }),
}
</script>
