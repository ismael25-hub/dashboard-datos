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
} from 'chart.js';

// Registrar los módulos necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function GraficoTendencia({ labels, values }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Ventas ($)',
        data: values,
        borderColor: 'rgb(59, 130, 246)', // Azul
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3, // Curvatura de la línea
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true, // Se adapta al tamaño del contenedor
    maintainAspectRatio: false, // Permite controlar la altura con CSS
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Tendencia de Ventas' },
    },
  };

  return (
    <div style={{ height: '300px', backgroundColor: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <Line data={data} options={options} />
    </div>
  );
}

export default GraficoTendencia;