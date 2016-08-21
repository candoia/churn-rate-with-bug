'use strict';
$(window).load(function() {
	let json = api.boa.run('churn.boa');
	$('#loading').hide();
	$('#content').show();
	let count = 0;
	let totalBugs = json.totalbugs;
	let labels = [];
	let dataset = [];
	for(let index in json.churn) {
		count++;
		let label =
			$('#table-output-body').append(`<tr><td> ${count} </td> <td> ${index} </td> <td>
                    ${json.churn[index]/totalBugs} </td> </tr>`)
			labels.push(index);
		dataset.push(json.churn[index]/totalBugs);
	}
	let chartData = {
			labels: labels,
			datasets: [{
				fillColor: '#ff8080',
				strokeColor: '#bf6060',
				data: dataset
			}]
	}

	let canvas = document.createElement('canvas');
	canvas.setAttribute('width', '400px');
	canvas.setAttribute('height', '300px');
	canvas.id = "chart-output";
	$('#content').prepend(canvas);

	let ctx = canvas.getContext('2d');
	new Chart(ctx).Bar(chartData, { 'responsive': true, });
});
