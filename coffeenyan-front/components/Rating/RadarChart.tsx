import { Box } from '@mantine/core'
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js'
import { Radar } from 'react-chartjs-2'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
)

type Props = {
  body: number
  acidity: number
  aroma: number
  sweetness: number
  bitterness: number
  balance: number
  aftertastes: number
}

const RadarChart: React.FC<Props> = ({
  body,
  acidity,
  aroma,
  sweetness,
  bitterness,
  balance,
  aftertastes,
}) => {
  const data = {
    labels: [
      'Body',
      'Acidity',
      'Aroma',
      'Sweetness',
      'Bitterness',
      'Balance',
      'Aftertastes',
    ],
    datasets: [
      {
        label: 'Flavor',
        data: [
          body,
          acidity,
          aroma,
          sweetness,
          bitterness,
          balance,
          aftertastes,
        ],
      },
    ],
  }
  const RadarOptions = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,

        ticks: {
          stepSize: 1,
        },
      },
    },
    backgroundColor: 'rgba(128, 91, 57, 0.2)',
    borderColor: 'rgba(128, 91, 57, 0.8)',
    borderWidth: 1.5,
    pointStyle: false,
  }
  return (
    <>
      <Box h="300px">
        <Radar data={data} options={RadarOptions}></Radar>
      </Box>
    </>
  )
}

RadarChart.displayName = 'RadarChart'
export default RadarChart
