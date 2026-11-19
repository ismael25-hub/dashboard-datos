import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar los módulos necesarios
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function GraficoComparativo({ labels, values }) {
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Usuarios Activos',
        data: values, // Usaremos otra métrica si quieres, pero aquí usamos la misma
        backgroundColor: 'rgba(16, 185, 129, 0.7)', // Verde
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Comparativa por Mes' },
    },
  };

  return (
    <div style={{ height: '300px', backgroundColor: 'white', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default GraficoComparativo;