document.addEventListener("DOMContentLoaded", function () {
    Highcharts.setOptions({
		chart: {
			styledMode: true
		},
        lang: {
            locale: "en-us"
        }
    });

    const commonLineOptions = {
        chart: {
            type: "line",
            zoomType: "xy"
        },
        credits: {
            enabled: false
        },
        xAxis: {
            title: {
                text: "Parameters"
            }
        },
        yAxis: {
            type: "logarithmic",
            title: {
                text: "Expressibility Mean"
            },
            plotLines: [
                {
                    value: 2.13054338976816e-05,
                    color: "rgba(0, 0, 0, 0.9)",
                    dashStyle: "Dash",
                    width: 2,
                    zIndex: 3,
                    label: {
                        text: "ref mean",
                        align: "right",
                        style: {
                            color: "rgba(0, 0, 0, 0.9)"
                        }
                    }
                },
                {
                    value: 2.492586440293979e-05,
                    color: "rgba(128, 128, 128, 0.45)",
                    dashStyle: "Dash",
                    width: 1.5,
                    zIndex: 2,
                    label: {
                        text: "ref mean + std",
                        align: "right",
                        style: {
                            color: "rgba(128, 128, 128, 0.75)"
                        }
                    }
                },
                {
                    value: 1.7685003392423408e-05,
                    color: "rgba(128, 128, 128, 0.45)",
                    dashStyle: "Dash",
                    width: 1.5,
                    zIndex: 2,
                    label: {
                        text: "ref mean - std",
                        align: "right",
                        style: {
                            color: "rgba(128, 128, 128, 0.75)"
                        }
                    }
                }
            ]
        },
        legend: {
            layout: "vertical",
            align: "right",
            verticalAlign: "middle"
        },
        tooltip: {
            shared: false,
            pointFormat: "<b>{series.name}</b><br/>x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: true
                }
            }
        },
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: "horizontal",
                        align: "center",
                        verticalAlign: "bottom"
                    }
                }
            }]
        }
    };

    Dashboards.board("container", {
        dataPool: {
            connectors: [
{
                type: "CSV",
                id: "Circuit_1_data",
                csv: "\"X\";\"Circuit 1_Forward_Y\";\"Circuit 1_Reverse_Y\"\n12.0;0.0686124085652287;0.0472103471832435\n24.0;0.0020573339995512;0.0016543145513771\n36.0;5.171349072626263e-05;0.0002007375294449\n48.0;2.989110168751262e-05;5.79221221642496e-05\n60.0;2.081856705790324e-05;2.9983817976860644e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_10_data",
                csv: "\"X\";\"Circuit 10_Forward_Y\";\"Circuit 10_Reverse_Y\"\n8.0;0.1522455372842669;0.0962503121951798\n16.0;0.0038332359765611;0.0030012631648315\n24.0;7.055662587985428e-05;0.0001674372922358\n32.0;1.9694876260237335e-05;3.0576976666296164e-05\n40.0;2.808107984900659e-05;2.4110407917501248e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_11_data",
                csv: "\"X\";\"Circuit 11_Forward_Y\";\"Circuit 11_Reverse_Y\"\n16.0;0.0027809933088411;0.0233266803081389\n32.0;3.144041551294375e-05;0.0011072462173328\n48.0;2.1029593905417943e-05;0.0001077539329055\n64.0;2.6167754841982765e-05;2.2829985347415675e-05\n80.0;2.0629298434540408e-05;3.05565075842543e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_12_data",
                csv: "\"X\";\"Circuit 12_Forward_Y\";\"Circuit 12_Reverse_Y\"\n16.0;0.0032977614089565;0.0243867359870635\n32.0;2.257608300170193e-05;0.000124205609654\n48.0;2.06101920921632e-05;3.237774153048672e-05\n64.0;2.307425974731566e-05;2.392664928818107e-05\n80.0;2.6056382653213744e-05;2.6445478412840426e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_13_data",
                csv: "\"X\";\"Circuit 13_Forward_Y\";\"Circuit 13_Reverse_Y\"\n20.0;6.627324978760905e-05;0.0086550956718457\n40.0;2.1624744644964297e-05;2.258409896616076e-05\n60.0;2.9500782818570287e-05;2.6622845771552908e-05\n80.0;2.458227639170677e-05;2.4662166480916457e-05\n100.0;1.880918113539228e-05;2.11657880122187e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_14_data",
                csv: "\"X\";\"Circuit 14_Forward_Y\";\"Circuit 14_Reverse_Y\"\n20.0;4.8368904357540266e-05;0.0024549152747019\n40.0;2.210722723714083e-05;3.004121969403756e-05\n60.0;2.0301925982689527e-05;2.0546046319236725e-05\n80.0;2.47487063843784e-05;3.052515218061725e-05\n100.0;1.5664636046309782e-05;2.945003092846366e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_15_data",
                csv: "\"X\";\"Circuit 15_Forward_Y\";\"Circuit 15_Reverse_Y\"\n12.0;0.0126815587252475;0.0041398703853709\n24.0;2.853602532424987e-05;2.5111688785340095e-05\n36.0;2.9029952070477167e-05;2.023463838268048e-05\n48.0;2.079186360863427e-05;2.1929477539790927e-05\n60.0;1.8521143406426133e-05;3.0707797395809256e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_16_data",
                csv: "\"X\";\"Circuit 16_Forward_Y\";\"Circuit 16_Reverse_Y\"\n15.0;0.0083472064929418;0.0422895107111121\n30.0;0.0001282087131867;0.0010507466662687\n45.0;2.770960403986381e-05;8.420979760147143e-05\n60.0;2.8430936887369304e-05;2.337932990960714e-05\n75.0;1.968751961908928e-05;1.650661583754644e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_17_data",
                csv: "\"X\";\"Circuit 17_Forward_Y\";\"Circuit 17_Reverse_Y\"\n15.0;0.0076248018784544;0.0206237857674876\n30.0;6.027377901814536e-05;0.0004480494898605\n45.0;3.417416517426119e-05;5.1258037075635737e-05\n60.0;2.186605586290497e-05;2.2882467205262652e-05\n75.0;2.688179019472148e-05;2.579670410552044e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_18_data",
                csv: "\"X\";\"Circuit 18_Forward_Y\";\"Circuit 18_Reverse_Y\"\n16.0;0.001585266587936;0.0429628749398388\n32.0;1.9532630736132216e-05;9.622806711284248e-05\n48.0;2.4078179636075812e-05;2.872921495080706e-05\n64.0;1.4099898418991464e-05;1.8043096359188617e-05\n80.0;2.4318241583514647e-05;1.7281600128238837e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_19_data",
                csv: "\"X\";\"Circuit 19_Forward_Y\";\"Circuit 19_Reverse_Y\"\n16.0;0.0033751390893913;0.0082484217131884\n32.0;3.370223188955675e-05;5.233809358405942e-05\n48.0;1.5688105868910592e-05;2.286490195642962e-05\n64.0;3.2176763365421356e-05;3.0481474846424125e-05\n80.0;1.940942191776783e-05;3.258988412150785e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_2_data",
                csv: "\"X\";\"Circuit 2_Forward_Y\";\"Circuit 2_Reverse_Y\"\n12.0;0.0686124085652287;0.0165278466939412\n24.0;0.0012073938401628;0.0001945528235413\n36.0;3.193151999921135e-05;2.132969935631683e-05\n48.0;2.3816510296394405e-05;2.1094527515525577e-05\n60.0;2.0747974686539673e-05;3.0841597899723965e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_3_data",
                csv: "\"X\";\"Circuit 3_Forward_Y\";\"Circuit 3_Reverse_Y\"\n15.0;0.0084861414404486;0.0431605419358801\n30.0;0.0001150673702294;0.0009510184166874\n45.0;2.5255101501554247e-05;6.300459744364184e-05\n60.0;2.566406062909772e-05;2.396283100703021e-05\n75.0;1.694692443469475e-05;3.668825651154226e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_4_data",
                csv: "\"X\";\"Circuit 4_Forward_Y\";\"Circuit 4_Reverse_Y\"\n15.0;0.006834619130147;0.017991964620233\n30.0;6.225966463907235e-05;0.000307375984657\n45.0;2.600475308211722e-05;2.1717714628634466e-05\n60.0;2.62619473552395e-05;2.533213953087696e-05\n75.0;2.4197318767074584e-05;3.3092570810567623e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_5_data",
                csv: "\"X\";\"Circuit 5_Forward_Y\";\"Circuit 5_Reverse_Y\"\n32.0;8.935380342119104e-05;0.0076823503327669\n64.0;2.6998050092487207e-05;4.190759432748858e-05\n96.0;2.085990675799334e-05;3.0016851162788697e-05\n128.0;3.1702670483112596e-05;2.1633966181766745e-05\n160.0;2.1100515794937223e-05;1.930850974100727e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_6_data",
                csv: "\"X\";\"Circuit 6_Forward_Y\";\"Circuit 6_Reverse_Y\"\n32.0;2.5092083188811735e-05;4.7520104029956205e-05\n64.0;2.50872390104021e-05;2.2610823503667495e-05\n96.0;2.748170054466372e-05;2.101285004593527e-05\n128.0;3.179816346063867e-05;1.78374448251837e-05\n160.0;3.009753327530497e-05;2.365040414943918e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_7_data",
                csv: "\"X\";\"Circuit 7_Forward_Y\";\"Circuit 7_Reverse_Y\"\n23.0;0.0009366214538813;0.016994439499417\n46.0;3.4868285421547364e-05;0.000844032931482\n69.0;3.0484159583140432e-05;0.0001034532873038\n92.0;3.215187805976987e-05;2.1199646002298595e-05\n115.0;2.461686001255036e-05;2.427013271943587e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "Circuit_8_data",
                csv: "\"X\";\"Circuit 8_Forward_Y\";\"Circuit 8_Reverse_Y\"\n23.0;0.0010248721206615;0.0154967039563294\n46.0;2.179155627636076e-05;0.0011622703192655\n69.0;2.5180313515773428e-05;0.0001281219525786\n92.0;2.2227096322433796e-05;4.896992376188496e-05\n115.0;2.2135967781239076e-05;1.4400999243861614e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "efficient_su2_data",
                csv: "\"X\";\"efficient_su2_Forward_Y\";\"efficient_su2_Reverse_Y\"\n20.0;0.0001349797588495;0.0043403237633379\n40.0;3.952805914547025e-05;5.6039265735140296e-05\n60.0;2.8122389965306577e-05;2.8603548823469185e-05\n80.0;2.7474848460468755e-05;2.538119571049793e-05\n100.0;2.5119932868914865e-05;2.8968770873295357e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "excitation_preserving_data",
                csv: "\"X\";\"excitation_preserving_Forward_Y\";\"excitation_preserving_Reverse_Y\"\n18.0;0.0001222736740091;0.6691844150545087\n36.0;1.760736776677165e-05;2.6197945736558016e-05\n54.0;1.7689765275849404e-05;2.2029605542316392e-05\n72.0;2.6725034017668144e-05;3.706709521342872e-05\n90.0;3.193064240816334e-05;2.5241770040318146e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "pauli_feature_map_data",
                csv: "\"X\";\"pauli_feature_map_Forward_Y\";\"pauli_feature_map_Reverse_Y\"\n12.0;0.6699583922890279;0.3105035687063196\n24.0;0.2942353028602129;0.2243487923766458\n36.0;0.1840677637888793;0.19357589948845\n48.0;0.1364653116830766;0.1830556792678084\n60.0;0.1125245934464702;0.1792951551989045",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "pauli_two_design_data",
                csv: "\"X\";\"pauli_two_design_Forward_Y\";\"pauli_two_design_Reverse_Y\"\n12.0;0.0079796965465222;0.0294018109729233\n24.0;3.2021921416858635e-05;0.0001061828469149\n36.0;2.11799350946306e-05;1.5926573369490866e-05\n48.0;2.954656632710151e-05;2.7473453980865947e-05\n60.0;2.2709854549698465e-05;2.50872135873647e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "real_amplitudes_data",
                csv: "\"X\";\"real_amplitudes_Forward_Y\";\"real_amplitudes_Reverse_Y\"\n12.0;0.0086782813950975;0.0181824518304495\n24.0;5.8031954383781694e-05;0.0005106775519569\n36.0;2.758792407952149e-05;3.16162602138298e-05\n48.0;2.9399965999832393e-05;2.457270794622925e-05\n60.0;2.4599246898422103e-05;3.15017865431819e-05",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "z_feature_map_data",
                csv: "\"X\";\"z_feature_map_Forward_Y\";\"z_feature_map_Reverse_Y\"\n8.0;0.6705561228450618;0.3101250889408561\n16.0;0.2923213194064802;0.2256087417596165\n24.0;0.1841653528666228;0.1951400366561705\n32.0;0.1381776353195778;0.1828183917242518\n40.0;0.1116099822446713;0.1777275276744573",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            },
{
                type: "CSV",
                id: "zz_feature_map_data",
                csv: "\"X\";\"zz_feature_map_Forward_Y\";\"zz_feature_map_Reverse_Y\"\n8.0;0.6699583922890279;0.3105035687063196\n16.0;0.2942353028602129;0.2243487923766458\n24.0;0.1840677637888793;0.19357589948845\n32.0;0.1364653116830766;0.1830556792678084\n40.0;0.1125245934464702;0.1792951551989045",
                options: {
                    firstRowAsNames: true,
                    itemDelimiter: ";"
                }
            }
            ]
        },
		editMode: {
            enabled: true,
            contextMenu: {
                enabled: true,
                items: ['editMode', 'viewFullscreen']
            }
        },
        gui: {
            layouts: [{
                id: "layout-1",
                rows: [{
                    cells: [{
                        id: "forward-chart"
                    }, {
                        id: "reverse-chart"
                    }]
                }]
            }]
        },
        components: [{
            renderTo: "forward-chart",
            type: "Highcharts",
            connector: [
                {
                                "id": "Circuit_1_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 1",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 1_Forward_Y"
                                                                ],
                                                                "name": "Circuit 1",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_10_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 10",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 10_Forward_Y"
                                                                ],
                                                                "name": "Circuit 10",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_11_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 11",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 11_Forward_Y"
                                                                ],
                                                                "name": "Circuit 11",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_12_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 12",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 12_Forward_Y"
                                                                ],
                                                                "name": "Circuit 12",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_13_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 13",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 13_Forward_Y"
                                                                ],
                                                                "name": "Circuit 13",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_14_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 14",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 14_Forward_Y"
                                                                ],
                                                                "name": "Circuit 14",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_15_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 15",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 15_Forward_Y"
                                                                ],
                                                                "name": "Circuit 15",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_16_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 16",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 16_Forward_Y"
                                                                ],
                                                                "name": "Circuit 16",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_17_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 17",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 17_Forward_Y"
                                                                ],
                                                                "name": "Circuit 17",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_18_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 18",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 18_Forward_Y"
                                                                ],
                                                                "name": "Circuit 18",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_19_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 19",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 19_Forward_Y"
                                                                ],
                                                                "name": "Circuit 19",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_2_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 2",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 2_Forward_Y"
                                                                ],
                                                                "name": "Circuit 2",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_3_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 3",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 3_Forward_Y"
                                                                ],
                                                                "name": "Circuit 3",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_4_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 4",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 4_Forward_Y"
                                                                ],
                                                                "name": "Circuit 4",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_5_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 5",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 5_Forward_Y"
                                                                ],
                                                                "name": "Circuit 5",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_6_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 6",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 6_Forward_Y"
                                                                ],
                                                                "name": "Circuit 6",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_7_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 7",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 7_Forward_Y"
                                                                ],
                                                                "name": "Circuit 7",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_8_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 8",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 8_Forward_Y"
                                                                ],
                                                                "name": "Circuit 8",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "efficient_su2_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "efficient_su2",
                                                                "data": [
                                                                                "X",
                                                                                "efficient_su2_Forward_Y"
                                                                ],
                                                                "name": "efficient_su2",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "excitation_preserving_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "excitation_preserving",
                                                                "data": [
                                                                                "X",
                                                                                "excitation_preserving_Forward_Y"
                                                                ],
                                                                "name": "excitation_preserving",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "pauli_feature_map_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "pauli_feature_map",
                                                                "data": [
                                                                                "X",
                                                                                "pauli_feature_map_Forward_Y"
                                                                ],
                                                                "name": "pauli_feature_map",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "pauli_two_design_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "pauli_two_design",
                                                                "data": [
                                                                                "X",
                                                                                "pauli_two_design_Forward_Y"
                                                                ],
                                                                "name": "pauli_two_design",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "real_amplitudes_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "real_amplitudes",
                                                                "data": [
                                                                                "X",
                                                                                "real_amplitudes_Forward_Y"
                                                                ],
                                                                "name": "real_amplitudes",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "z_feature_map_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "z_feature_map",
                                                                "data": [
                                                                                "X",
                                                                                "z_feature_map_Forward_Y"
                                                                ],
                                                                "name": "z_feature_map",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "zz_feature_map_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "zz_feature_map",
                                                                "data": [
                                                                                "X",
                                                                                "zz_feature_map_Forward_Y"
                                                                ],
                                                                "name": "zz_feature_map",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                }
],
            sync: {
                highlight: true,
                extremes: true,
                visibility: true
            },
            chartOptions: {
                ...commonLineOptions,
                title: {
                    text: "Circuit 9 + other circuits",
					align: "left"
                },
                subtitle: {
                    text: "Generated from expressibility_transform_to_parameters_mean_std_circuit{target}+{other}_countsall.csv".replace("{target}", "9"),
					align: "left"
                }
            }
        }, {
            renderTo: "reverse-chart",
            type: "Highcharts",
            connector: [
                {
                                "id": "Circuit_1_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 1",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 1_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 1",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_10_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 10",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 10_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 10",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_11_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 11",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 11_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 11",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_12_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 12",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 12_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 12",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_13_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 13",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 13_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 13",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_14_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 14",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 14_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 14",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_15_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 15",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 15_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 15",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_16_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 16",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 16_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 16",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_17_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 17",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 17_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 17",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_18_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 18",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 18_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 18",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_19_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 19",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 19_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 19",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_2_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 2",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 2_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 2",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_3_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 3",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 3_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 3",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_4_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 4",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 4_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 4",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_5_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 5",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 5_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 5",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_6_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 6",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 6_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 6",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_7_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 7",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 7_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 7",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "Circuit_8_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "Circuit 8",
                                                                "data": [
                                                                                "X",
                                                                                "Circuit 8_Reverse_Y"
                                                                ],
                                                                "name": "Circuit 8",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "efficient_su2_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "efficient_su2",
                                                                "data": [
                                                                                "X",
                                                                                "efficient_su2_Reverse_Y"
                                                                ],
                                                                "name": "efficient_su2",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "excitation_preserving_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "excitation_preserving",
                                                                "data": [
                                                                                "X",
                                                                                "excitation_preserving_Reverse_Y"
                                                                ],
                                                                "name": "excitation_preserving",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "pauli_feature_map_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "pauli_feature_map",
                                                                "data": [
                                                                                "X",
                                                                                "pauli_feature_map_Reverse_Y"
                                                                ],
                                                                "name": "pauli_feature_map",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "pauli_two_design_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "pauli_two_design",
                                                                "data": [
                                                                                "X",
                                                                                "pauli_two_design_Reverse_Y"
                                                                ],
                                                                "name": "pauli_two_design",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "real_amplitudes_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "real_amplitudes",
                                                                "data": [
                                                                                "X",
                                                                                "real_amplitudes_Reverse_Y"
                                                                ],
                                                                "name": "real_amplitudes",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "z_feature_map_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "z_feature_map",
                                                                "data": [
                                                                                "X",
                                                                                "z_feature_map_Reverse_Y"
                                                                ],
                                                                "name": "z_feature_map",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                },
                {
                                "id": "zz_feature_map_data",
                                "columnAssignment": [
                                                {
                                                                "seriesId": "zz_feature_map",
                                                                "data": [
                                                                                "X",
                                                                                "zz_feature_map_Reverse_Y"
                                                                ],
                                                                "name": "zz_feature_map",
                                                                "legendSymbol": "lineMarker",
                                                                "connectNulls": false
                                                }
                                ]
                }
],
            sync: {
                highlight: true,
                extremes: true,
                visibility: true
            },
            chartOptions: {
                ...commonLineOptions,
                title: {
                    text: "Other circuits + Circuit 9",
					align: "left"
                },
                subtitle: {
                    text: "Generated from expressibility_transform_to_parameters_mean_std_circuit{other}+{target}_countsall.csv".replace("{target}", "9"),
					align: "left"
				},
            }
        }]
    }, true);
});
