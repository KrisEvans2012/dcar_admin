import { Line } from '@/assets/js/BaseCharts'

export default {
  extends: Line,
  props: ['data', 'labels'],
  mounted () {
    this.renderChart({
      labels: this.labels,
      datasets: [
        {
          label: 'label',
          backgroundColor: '#F8F9FE',
          data: this.data
        }
      ]
    }, {responsive: true, maintainAspectRatio: false})
  }
}
