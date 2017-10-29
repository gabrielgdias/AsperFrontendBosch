$(function() {

    Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2015 Q1',
            ideal: 2666,
            atual: 2647
        }, {
            period: '2015 Q2',
            ideal: 2778,
            atual: 2441
        }, {
            period: '2015 Q3',
            ideal: 4912,
            atual: 2501
        }, {
            period: '2015 Q4',
            ideal: 3767,
            atual: 5689
        }, {
            period: '2016 Q1',
            ideal: 6810,
            atual: 2293
        }, {
            period: '2016 Q2',
            ideal: 5670,
            atual: 1881
        }, {
            period: '2016 Q3',
            ideal: 4820,
            atual: 1588
        }, {
            period: '2016 Q4',
            ideal: 15073,
            atual: 5175
        }, {
            period: '2017 Q1',
            ideal: 10687,
            atual: 2028
        }, {
            period: '2017 Q2',
            ideal: 8432,
            atual: 1791
        }],
        xkey: 'period',
        ykeys: ['ideal', 'atual'],
        labels: ['Ideal', 'Atual'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });    
});
