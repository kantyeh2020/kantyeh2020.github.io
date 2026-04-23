document.addEventListener("DOMContentLoaded", function () {
    Highcharts.setOptions({
    chart: {
            styledMode: true
    },
    lang: {
            locale: 'en-us'
    }
    });

    const currentMonth = Date.UTC(2023, 9);
    const revTarget = 105;
    const costTarget = 89;

    const currentYear = new Date(currentMonth).getFullYear();


    const commonColumnOptions = {
        accessibility: {
            point: {
                valuePrefix: '$'
            }
        },
        chart: {
            type: 'line',
            className: 'highcharts-column-chart'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            type: 'datetime',
            min: Date.UTC(currentYear),
            max: Date.UTC(currentYear, 11)
        },
        yAxis: {
            tickInterval: 2e6
        },
        series: [{
            name: 'Budget',
            id: 'budget-series',
            colorIndex: 1
        }],
        tooltip: {
            format: `<span style="font-size: 10px">{x:%B %Y}</span><br>
                <span class="highcharts-color-{colorIndex}">●</span> 
                {series.name}: {(divide y 1000000):.2f}M
            `
        }
    };

    const board = Dashboards.board('container', {
        dataPool: {
            connectors: [{
                type: 'CSV',
                id: 'data',
                csv: document.getElementById('csv').innerHTML,
                dataModifier: {
                    type: 'Math',
                    columnFormulas: [{
                        column: 'Result', // I
                        formula: 'D1-C1'
                    }, {
                        column: 'AccResult', // J
                        formula: 'SUM(I$1:I1)'
                    }, {
                        column: 'CostPredA', // K
                        formula: 'AVERAGE(E1,G1)'
                    }, {
                        column: 'RevPredA', // L
                        formula: 'AVERAGE(F1, H1)'
                    }, {
                        column: 'AccResPredP', // M
                        formula: 'J1+SUM(F$1:F1)-SUM(E$1:E1)'
                    }, {
                        column: 'AccResPredO', // N
                        formula: 'J1+SUM(H$1:H1)-SUM(G$1:G1)'
                    }, {
                        column: 'ResPredA', // O
                        formula: 'L1-K1'
                    }, {
                        column: 'AccResPredA', // P
                        formula: 'J1+SUM(O$1:O1)'
                    }]
                }
            }]
        },
        gui: {
            layouts: [{
                id: 'layout-1',
                rows: [{
                    cells: [{
                        id: 'rev-chart'
                    }, {
                        id: 'cost-chart'
                    }]
                }]
            }]
        },
        components: [{
            renderTo: 'rev-chart',
            type: 'Highcharts',
            connector: {
                id: 'data',
                columnAssignment: [{
                    seriesId: 'budget-series',
                    data: ['Date', 'Budget']
                }, {
                    seriesId: 'Revenue',
                    data: ['Date', 'Revenue']
                }]
            },
            sync: {
                highlight: true
            },
            chartOptions: {
                ...commonColumnOptions,
                title: {
                    text: 'Revenue'
                }
            }
        }, {
            renderTo: 'cost-chart',
            type: 'Highcharts',
            connector: {
                id: 'data',
                columnAssignment: [{
                    seriesId: 'budget-series',
                    data: ['Date', 'Budget']
                }, {
                    seriesId: 'Cost',
                    data: ['Date', 'Cost']
                }]
            },
            sync: {
                highlight: true
            },
            chartOptions: {
                ...commonColumnOptions,
                title: {
                    text: 'Cost'
                }
            }
        }]
    }, true);
});
