import React from 'react'
import Footer from '../components/footer/Footer'
import LineChartComponent from '../components/charts/LineChartComponent'
import AreaChartComponent from '../components/charts/AreaChartComponent'
import ColumnChartComponent from '../components/charts/ColumnChartComponent'
import BarChartComponent from '../components/charts/BarChartComponent'
import MixedChartComponent from '../components/charts/MixedChartComponent'
import ScatterChartComponent from '../components/charts/ScatterChartComponent'
import BubbleChartComponent from '../components/charts/BubbleChartComponent'
import MultipleYAxesScatterChartComponent from '../components/charts/MultipleYAxesScatterChartComponent'
import ScatterChartWithCells from '../components/charts/ScatterChartWithCells'
import TwoLevelPieChart from '../components/charts/TwoLevelPieChart'
import TwoSimplePieChart from '../components/charts/TwoSimplePieChart'
import SimpleRadarChart from '../components/charts/SimpleRadarChart'
import SimpleRadialBarChart from '../components/charts/SimpleRadialBarChart'
import SimpleTreemap from '../components/charts/SimpleTreemapChart'
import CustomContentOfTooltip from '../components/charts/CustomContentOfTooltip'
import LegendEffectChartComponent from '../components/charts/LegendEffectChartComponent'

const ChartsMainContent = () => {
  return (
    <div className="main-content">
    <div className="dashboard-breadcrumb dashboard-panel-header mb-30">
        <h2>Charts</h2>
    </div>
    <div className="row">
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Line charts</h5>
                </div>
                <div className="panel-body">
                    <div id="lineChart">
                        <LineChartComponent/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Area charts</h5>
                </div>
                <div className="panel-body">
                    <div id="areaChart">
                        <AreaChartComponent/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Column charts</h5>
                </div>
                <div className="panel-body">
                    <div id="columnChart">
                        <ColumnChartComponent/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Bar charts</h5>
                </div>
                <div className="panel-body">
                    <div id="barChart">
                        <BarChartComponent/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Mixed charts</h5>
                </div>
                <div className="panel-body">
                    <div id="mixedChart">
                        <MixedChartComponent/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Scatter Charts</h5>
                </div>
                <div className="panel-body">
                    <div id="scatterChart">
                        <ScatterChartComponent/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Bubble Charts</h5>
                </div>
                <div className="panel-body">
                    <div id="bubbleChart">
                        <BubbleChartComponent/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>MultipleYAxesScatterChart Charts</h5>
                </div>
                <div className="panel-body">
                    <div id="multipleYAxesScatterChartChart">
                        <MultipleYAxesScatterChartComponent/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Scatter Chart With Cells</h5>
                </div>
                <div className="panel-body">
                    <div id="scatterChartWithCells">
                        <ScatterChartWithCells/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Two Level Pie Chart</h5>
                </div>
                <div className="panel-body">
                    <div id="twoLevelPieChart">
                        <TwoLevelPieChart/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-1">
                <div className="panel-header">
                    <h5>Two Simple Pie Chart</h5>
                </div>
                <div className="panel-body">
                    <div id="twoSimplePieChart">
                        <TwoSimplePieChart/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel chart-panel-2">
                <div className="panel-header">
                    <h5>Simple Radar Chart</h5>
                </div>
                <div className="panel-body">
                    <div id="simpleRadarChart">
                        <SimpleRadarChart/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel">
                <div className="panel-header">
                    <h5>Simple Radial Bar Chart</h5>
                </div>
                <div className="panel-body">
                    <div id="simpleRadialBarChart">
                        <SimpleRadialBarChart/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel">
                <div className="panel-header">
                    <h5>Simple Treemap Charts</h5>
                </div>
                <div className="panel-body">
                    <div id="simpleTreemapChart">
                        <SimpleTreemap/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel">
                <div className="panel-header">
                    <h5>Custom Content Of Tooltip Charts</h5>
                </div>
                <div className="panel-body pb-0">
                    <div id="customContentOfTooltipChart">
                        <CustomContentOfTooltip/>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div className="panel">
                <div className="panel-header">
                    <h5>Legend Effect Opacity Charts</h5>
                </div>
                <div className="panel-body">
                    <div id="legendEffectOpacity">
                        <LegendEffectChartComponent/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer/>
</div>
  )
}

export default ChartsMainContent