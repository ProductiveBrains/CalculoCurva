Highcharts.chart('container', {

    title: {
        text: 'Calculo Curva de no se que...jajaj'
    },

    subtitle: {
        text: ' By : Seba & Fermin'
    },

    yAxis: {
        title: {
            text: 'Eje Y : No se que es este Valor'
        }
    },

    xAxis: {
        categories: test1.ejex
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            }
        }
    },

    series: [{
        name: 'Curva',
        data: test1.ejey
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 1500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});
