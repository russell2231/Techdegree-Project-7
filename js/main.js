const alertBanner = document.querySelector('#alert');

// Make HTML for banner
alertBanner.innerHTML = `
    <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p>
        <p class="alert-banner-close">x</p>
    </div>
    `;

alertBanner.addEventListener('click', (e) => {
	const element = e.target;
	if (element.classList.contains('alert-banner-close')) {
		alertBanner.style.display = 'none';
	}
});

// Traffic Graph
// Data
let trafficData = {
	labels   : [
		'16-22',
		'23-29',
		'30-5',
		'6-12',
		'13-19',
		'20-26',
		'27-3',
		'4-10',
		'11-17',
		'18-24',
		'25-31'
	],
	datasets : [
		{
			data                 : [
				750,
				1250,
				1000,
				2000,
				1500,
				1750,
				1250,
				1850,
				2250,
				1500,
				2500
			],
			backgroundColor      : 'rgba(116, 119, 191, .3)',
			borderWidth          : 2,
			pointBackgroundColor : '#fff',
			pointBorderColor     : '#ACADE6',
			borderColor          : '#B7B9E9'
		}
	]
};

let trafficOptions = {
	aspectRatio : 2.5,
	animation   : {
		duration : 0
	},
	scales      : {
		yAxes : [
			{
				ticks : {
					beginAtZero : true
				}
			}
		]
	},
	legend      : {
		display : false
	}
};
// Create Graph
const trafficCtx = document.querySelector('#traffic-chart');
let trafficChart = new Chart(trafficCtx, {
	type    : 'line',
	data    : trafficData,
	options : trafficOptions
});

// Daily Traffic Graph
// Data
const dailyData = {
	labels   : [
		'S',
		'M',
		'T',
		'W',
		'T',
		'F',
		'S'
	],
	datasets : [
		{
			label           : '# of Hits',
			data            : [
				75,
				115,
				175,
				125,
				225,
				200,
				100
			],
			backgroundColor : '#7477BF',
			borderWidth     : 1
		}
	]
};
const dailyOptions = {
	scales : {
		yAxes : [
			{
				ticks : {
					beginAtZero : true
				}
			}
		]
	},
	legend : {
		display : false
	}
};

// Make Graph
const dailyCtx = document.querySelector('#daily-chart');
let dailyChart = new Chart(dailyCtx, {
	type    : 'bar',
	data    : dailyData,
	options : dailyOptions
});

// Mobile Chart
// Data
const mobileData = {
	labels   : [
		'Desktop',
		'Tablet',
		'Phones'
	],
	datasets : [
		{
			label           : '# of Users',
			data            : [
				2000,
				550,
				500
			],
			borderWidth     : 0,
			backgroundColor : [
				'#7477BF',
				'#78CF82',
				'#51B6C8'
			]
		}
	]
};

const mobileOptions = {
	legend : {
		position : 'right',
		labels   : {
			boxWidth  : 20,
			fontStyle : 'bold'
		}
	}
};

// Create Graph
const mobileCtx = document.querySelector('#mobile-chart');
let mobileChart = new Chart(mobileCtx, {
	type    : 'doughnut',
	data    : mobileData,
	options : mobileOptions
});

// Messaging Section
const user = document.querySelector('#userField');
const message = document.querySelector('#messageField');
const send = document.querySelector('#send');

send.addEventListener('click', (e) => {
	if (user.value === '' && message.value === '') {
		alert('Please fill out user and message fields before sending');
	} else if (user.value === '') {
		alert('Please fill out user field before sending');
	} else if (message.value === '') {
		alert('Please fill out message field before sending');
	} else {
		alert(`Message successfully sent to: ${user.value}`);

		user.value = '';
		message.value = '';
	}
});
