$(document).ready(function() {
	var myChart = echarts.init(document.getElementById('bar-chart'));
	
	var option = {
		title: {
		  text: 'Favorite Recipe Bar Chart'
		},
		tooltip: {},
		legend: {
		  data: ['Fans']
		},
		xAxis: {
		  data: ['Beijing Roast Duck', 'Mouth-Watering Chicken', 'Stewed Pork with Brown Sauce']
		},
		yAxis: {},
		series: [
		  {
			name: 'Fans',
			type: 'bar',
			data: [1000, 700, 500]
		  }
		]
	};
	
	myChart.setOption(option);
});
  
