import asusprimea320m_k from '../assets/img/products/Asus_a320m-k.png';
import amdryzen53400g from '../assets/img/products/AMD-RYZEN-5-3400G.png';
import amdryzen55600g from '../assets/img/products/AMD-RYZEN-5-5600G.png';
import EVGA_SuperNOVA_550W_Ga from '../assets/img/products/EVGA_SuperNOVA_550W_Ga.png';
import Kingston_SSD_240GB from '../assets/img/products/Kingston_SSD_240GB.png';
import Logitect_G203 from '../assets/img/products/LOGITECH_G203.png'
import Alloy_FPS_PRO from '../assets/img/products/HYPERX_ALLOY_FPS_PRO.png'
import Logitech_G502 from '../assets/img/products/LOGITECH-G502-HERO.png'
import Apex_Pro_TKL from '../assets/img/products/APEX_PRO_TKL.png'
import Cloud_Flight from '../assets/img/products/HYPERX_CLOUD_FLIGHT.png'

const productosdata = [
    {
        "id": "mobo1",
        "category": "componentes",
        "title": "PRIME-A320M-K",
        "photo": asusprimea320m_k,
        "description": "ASUS Prime es la siguiente evolución de la tarjeta madre ASUS, nacida con un pedigree que data de 1989. Nuestro equipo de ingenieros de clase mundial son apasionados en darle el poder a todo el mundo de disfrutar de los beneficios de la personalización y los ajustes, y la fuerza motriz detrás del desarrollo de Prime es el hacer los controles avanzados fácilmente accesibles - maximizando rendimiento, estabilidad y compatibilidad para tener las mejores experiencias de armado de PC DIY. En resumen: es hora de Prime.",
        "charact1": "5X Protection II – Avanzadas salvaguardas de hardware para protección general",
        "charact2": "Iluminación LED: Efectos de iluminación en la línea de canal de audio",
        "charact3": "M.2 nativo: Velocidades de almacenamiento ultra rápidas",
        "price": 49.99,
        "stock": 5
    },
    {
        "id": "ssd1",
        "category": "componentes",
        "title": "Kingston SSD 240Gb",
        "photo": Kingston_SSD_240GB,
        "description": "La unidad de estado sólido A400 de Kingston mejora dramáticamente la capacidad de respuesta de su sistema existente con velocidades increíbles de inicio, carga y transferencia, comparadas con los discos duros mecánicos",
        "charact1": "Capacidad de almacenamiento: 240 GB",
        "charact2": "Unidad de estado sólido (SSD)",
        "charact3": "Velocidad de escritura 412 Mbps",
        "price": 27.99,
        "stock": 3
    },
    {
        "id": "pw1",
        "category": "componentes",
        "title": "SuperNOVA 550W",
        "photo": EVGA_SuperNOVA_550W_Ga,
        "description": "La última incorporación a la destacada línea de fuentes de alimentación EVGA. Con la certificación 80 Plus Gold, condensadores 100% japoneses, un ventilador de doble rodamiento de bolas duradero y un diseño completamente modular, esta fuente de alimentación está construida para uso y durabilidad a largo plazo. Sobre la base de la línea de fuentes de alimentación con clasificación 80 Plus Gold de EVGA, la serie EVGA GA combina todas estas características a un precio excelente.",
        "charact1": "El sistema de control térmico inteligente EVGA ECO elimina el ruido del ventilador a cargas bajas a medias.",
        "charact2": "Código UPC: 843368061845",
        "charact3": "Peso: 5.85 Kg",
        "price": 69.99,
        "stock": 7
    },
    {
        "id": "proc1",
        "category": "componentes",
        "title": "Ryzen 5 5600g",
        "photo": amdryzen55600g,
        "description": "Un procesador Recomendado para quienes necesiten capacidad de video en sistemas moderados y no quieran pagar mucho dinero por una tarjeta gráfica independiente. Si lo que buscas es construir un sistema económico ahora también podría usar esto como base para reducir costos con la capacidad de agregar más tarde una mejor tarjeta gráfica.",
        "charact1": "# de núcleos 6 núcleos",
        "charact2": "Frecuencia de operación 3,9 GHz",
        "charact3": "Tipos de memoria DDR4 3200",
        "price": 245.99,
        "stock": 5
    },
    {
        "id": "proc2",
        "category": "componentes",
        "title": "Ryzen 5 3400g",
        "photo": amdryzen53400g,
        "description": "Empieza a Vivir los Juegos a 1080p Aquí. Los procesadores para computadoras de escritorio Ryzen™ con gráficos Radeon™ ofrecen la tarjeta gráfica más rápida para equipos de escritorio. Combinan la potencia de los procesadores Ryzen™ con todo el poder gráfico de Radeon™ Vega para que vivas una experiencia de juego de alto rendimiento en los títulos más populares, todo sin necesidad de una tarjeta gráfica aparte.",
        "charact1": "Núcleos de CPU: 4",
        "charact2": "Velocidad base de reloj: 3.7GHz",
        "charact3": "Velocidad máxima de memoria: 2933MHz",
        "price": 220.99,
        "stock": 2
    },
    {
        "id": "mouse1",
        "category": "perifericos",
        "title": "Logitech g203",
        "photo": Logitect_G203,
        "description": "Aprovecha al máximo tu tiempo de juego con el mouse G203 para juegos disponible en una variedad de vibrantes colores. Con la tecnología LIGHTSYNC, un sensor para juegos y un diseño clásico de 6 botones, animarás tu acción y tu espacio.",
        "charact1": "DPI MAX 8.000",
        "charact2": "Diseño clásico",
        "charact3": "Iluminación RGB Lightsync",
        "price": 29.99,
        "stock": 3
    },
    {
        "id": "keyb1",
        "category": "perifericos",
        "title": "Alloy Fps pro",
        "photo": Alloy_FPS_PRO,
        "description": "HyperX Alloy FPS Pro es un teclado mecánico para juegos sin llave (TKL) con interruptores de tecla Cherry MX y retroiluminación LED roja. Como un teclado compacto ultra minimalista de 87 teclas, el HyperX Alloy FPS está diseñado para jugadores que buscan durabilidad, confiabilidad y precisión. Con su diseño compacto y su marco de acero sólido, el HyperX Alloy FPS Pro durará sin importar cuán intenso sea su juego. Los interruptores de tecla Cherry MX responden rápidamente para garantizar un contacto de tecla de alta precisión que también es confiable en durabilidad. Las 87 teclas responden con facilidad, lo que significa una mayor comodidad y menos desgaste de las articulaciones cuando está aplastando a su competencia. Cuenta con efectos de iluminación LED iluminados personalizables, para que pueda mostrar su estilo con un teclado para juegos que se ilumina tanto en sentido figurado como literal.",
        "charact1": "Ultra-minimalistico TKL idealmente diseñado para profesionales de los FPS",
        "charact2": "Teclas mecanicas Cherry MX",
        "charact3": "Diseño portátil con cable desmontable",
        "price": 99.99,
        "stock": 3
    },
    {
        "id": "heads1",
        "category": "perifericos",
        "title": "HyperX Cloud Flight",
        "photo": Cloud_Flight,
        "description": "Escapa de los límites de las conexiones por cable y deambula libremente con los HyperX Cloud Flight™ inalámbrico. Gracias a una conexión inalámbrica sólida y perfecta para juegos, a la increíble duración de la batería de 30 horas y a la practicidad característica de los HyperX, los Cloud Flight te permiten jugar de manera ininterrumpida durante más tiempo. Supervisa fácilmente la duración de la batería y ajusta el volumen de salida y del micrófono con el software HyperX NGenuity. El diseño de casco cerrado te ayuda a mantenerte inmerso, mientras que el duradero control deslizante de acero y la estructura de alta calidad se han creado para resistir el desgaste y el uso diarios",
        "charact1": "Comodidad exclusiva de HyperX",
        "charact2": "Audio de juego envolvente",
        "charact3": "Función inalámbrica perfecta para juegos con una batería duradera",
        "price": 79.99,
        "stock": 3
    },
    {
        "id": "keyb2",
        "category": "perifericos",
        "title": "Apex pro TKL",
        "photo": Apex_Pro_TKL,
        "description": "El teclado mecánico Apex Pro TKL resuelve las deficiencias de los teclados de juego gracias a los interruptores mecánicos Omni Point, que son para 100 millones de pulsaciones de teclas. Cada tecla individual se puede ajustar para satisfacer el accionamiento deseado, desde los toques de luz de plumas más rápidos del mundo, hasta prensas profundas y sin tipografía, y cualquier cosa en medio, lo que te permite jugar con más precisión, rápida y con confianza.",
        "charact1": "Respuesta 8 veces más rápida, actuación 5 veces más rápida y durabilidad 2 veces mayor",
        "charact2": "Reposamuñecas magnético desmontable de tacto suave",
        "charact3": "Interruptores mecánicos ajustables, primeros en su tipo, para una sensibilidad personalizable por tecla",
        "price": 159.99,
        "stock": 3
    },
    {
        "id": "mouse2",
        "category": "perifericos",
        "title": "Logitech g502",
        "photo": Logitech_G502,
        "description": "El G502 Mouse Gaming Hero de Logitech es un mouse para diestros diseñado para ofrecerte la precisión, la capacidad de respuesta y las funciones de juego necesarias en el campo de batalla. es un Mouse para un rendimiento profesional , Además, viene con cinco pesas de 3,6 g que puedes usar para ajustarlo a tus preferencias.",
        "charact1": "Gana ventaja Usando Logitech Gaming Software para programar 11 botones",
        "charact2": "Guarda 5 perfiles diferentes en el Mouse para llevar tu configuración",
        "charact3": "Avanza con procesamiento de frecuencia de cuadro rápido hasta la fech",
        "price": 69.95,
        "stock": 3
    }
  ]
export default productosdata;