import React from 'react';
import { connect } from 'dva';
import { List } from 'antd';
import BaseComponent from 'components/BaseComponent';
import Icon from 'components/Icon';
import Panel from 'components/Panel';
import SideLayout from '../../components/SideLayout';

@connect()
export default class extends BaseComponent {
  state = {
    activeKey: 'Line',
    chartTypes: [
      {
        title: 'Line',
        icon: 'line-chart',
        key: 'Line',
        components: ['./Line']
      },
      {
        title: 'Bar',
        icon: 'bar-chart',
        key: 'Bar',
        components: ['./Bar']
      },
      {
        title: '饼图 / Pie',
        icon: 'pie-chart',
        key: 'Pie',
        components: ['./Pie', './Pie2']
      },
      {
        title: '点图 / Scatter',
        icon: 'dot-chart',
        key: 'Scatter',
        components: ['./Scatter']
      },
      {
        title: 'Map',
        icon: 'global',
        key: 'Map',
        components: ['./Map']
      },
      {
        title: 'Radar chart/ Radar',
        icon: 'trademark',
        key: 'Radar',
        components: ['./Radar']
      },
      {
        title: 'Dashboard / Gauge',
        icon: 'dashboard',
        key: 'Gauge',
        components: ['./Gauge']
      }
    ]
  };

  onSelect = activeKey => {
    this.setState({
      activeKey
    });
  };

  render() {
    const { chartTypes, activeKey } = this.state;
    const sideContent = (
      <List
        className="charts-type-list"
        dataSource={chartTypes}
        renderItem={item => (
          <List.Item
            actions={[<Icon type="ellipsis" antd />]}
            onClick={e => this.onSelect(item.key)}
          >
            <Icon type={item.icon} antd />
            {item.title}
          </List.Item>
        )}
      />
    );
    const active = chartTypes.filter(item => item.key === activeKey)[0];
    return (
      <SideLayout
        title="G2/BizCharts 图表"
        author="Ant gold clothing"
        site="https://alibaba.github.io/BizCharts/"
        sideContent={sideContent}
      >
        {active.components.map((item, index) => {
          const Chart = require(`${item}`).default;
          return (
            <Panel
              key={index}
              title={
                <div>
                  <Icon type={active.icon} antd />
                  &nbsp;
                  {active.title}
                </div>
              }
              height={400}
            >
              <Chart />
            </Panel>
          );
        })}
      </SideLayout>
    );
  }
}
