import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

export const Linear = () =>{

    const tipicaVerbal = JSON.parse(localStorage.getItem('tipicaVerbal'));
  const tipicaManual = JSON.parse(localStorage.getItem('tipicaManual'));

    const data = {
        labels: ['Información', 'Vocabulario', 'Aritmética', 'Semejanzas', 'Comprensión', 'Dígitos', 'Figuras Incompletas', 'Historietas', 'Cubos', 'Rompecabezas', 'Claves', 'Laberintos'],
        datasets: [
          {
            label: 'Perfil',
            data: [tipicaVerbal.informacion, tipicaVerbal.vocabulario, tipicaVerbal.aritmetica, tipicaVerbal.semejanzas, tipicaVerbal.comprension, tipicaVerbal.digitos, tipicaManual.figurasI,   tipicaManual.historietas,  tipicaManual.cubos, tipicaManual.rompeCabezas ,  tipicaManual.claves,  tipicaManual.laberintos],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          },
        
        ]
      };
      
      const options = {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      };
    return(
        <Line data = {data} options= {options}/>
    )
}