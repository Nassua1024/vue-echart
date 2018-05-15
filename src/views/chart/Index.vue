<template>
  <div class="chart">
    <header>
      <h3>会员复购率分析</h3>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in date"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-radio v-model="isAll" label="all">所有门店</el-radio>
      <el-radio v-model="isAll" />
      <el-input class="input" v-model="input" placeholder="请输入内容"></el-input>
      <el-button>查询</el-button>
    </header>
    <div class="indicator">
      <el-radio-group v-model="isCustomer">
        <el-radio-button label="按客户计算" />
        <el-radio-button label="按交易计算" />
      </el-radio-group>
      <div class="indic">
        <span>订单数</span>
        <span>2单及以上订单数</span>
        <span>复购率</span>
      </div>
    </div>
    <div ref="echart" class="echart" />
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar'
import 'echarts/lib/chart/line'

export default {
  data () {
    return {
      date: [
        {
          label: '2018年',
          value: '2018'
        }, {
          label: '2017年',
          value: '2017'
        }, {
          label: '2016年',
          value: '2016'
        }, {
          label: '2015年',
          value: '2015'
        }
      ],
      value: '',
      isAll: 'all', // 所有门店
      input: '',
      isCustomer: '按客户计算' // 按客户计算
    }
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const chart = echarts.init(this.$refs.echart)
      chart.setOption({
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: [
          {
              type: 'value',
              interval: 50,
              min: 0,
              max: 250,
              axisLabel: {
                  formatter: '{value}'
              }
          },
          {
              type: 'value',
              min: 0,
              max: 100,
              interval: 20,
              axisLabel: {
                  formatter: '{value} %'
              }
          }
        ],
        series: [
          {
            type: 'bar',
            stack: 'total',
            barWidth: 30,
            itemStyle:{
              normal:{
                color:'#2184C5'
              }
            },
            data: [130, 60, 120, 100, 80, 90, 125, 30, 80, 60, 70, 100]
            
          }, {
            type: 'bar',
            stack: 'total',
            barWidth: 30,
            itemStyle:{
              normal:{
                color:'#C0EBFE'
              }
            },
            data: [100, 100, 70, 50, 70, 40, 30, 100, 80, 70, 90, 140 ]
          }, {
            type: 'line',
            symbolSize: 6,
            itemStyle:{
              normal:{
                color:'#FD8494'
              }
            },
            data: [130, 60, 120, 100, 80, 90, 125, 30, 80, 60, 70, 100]
          }
        ]
      })
    }
  }
}
</script>

<style lang="less">
.chart {
  width: 870px;
  height: 425px;
  margin: 0 auto;
  border: 1px solid #c9c8cd;
  border-radius: 5px;
  header {
    box-sizing: border-box;
    padding: 16px 10px;
    h3{
      display: inline-block;
      line-height: 36px;
      font-size: 16px;
      color: #4d6477;
    }
    .el-select {
      width: 115px;
      margin: 0 54px 0 40px;
    }
    .el-radio+.el-radio {
      margin-left: 20px;
    }
    .input {
      width: 160px;
      .el-input__inner {
        background: #F7F8FA;
        border: none;
        border-radius: 3px;
      }
    }
    .el-button {
      width: 72px;
      height: 32px;
      margin-left: 24px;
      padding: 0;
      background: #4CB6B1;
      border: 1px solid #4CB6B1; 
      text-align: center;
      line-height: 32px;
      border-radius: 3px;
      color: #FFF;
      letter-spacing: 2px;
      &:active {
        border-color: #4CB6B1;
      }
    }
  }
  .indicator {
    display: flex;
    box-sizing: border-box;
    padding: 0 27px;
    justify-content: space-between;
    .el-radio-button__inner {
      width: 90px;
      height: 32px;
      padding: 0;
      text-align: center;
      line-height: 32px;
    }
    .indic span {
      position: relative;
      display: inline-block;
      margin-right: 20px;
      padding-left: 8px;
      line-height: 32px;
      &::before {
        position: absolute;
        left: -8px;
        top: 50%;
        width: 10px;
        height: 10px;
        margin-top: -5px;
        border-radius: 50%;
        content: '';
      }
      &:nth-child(1)::before {
        background: #2184C5;
      }
      &:nth-child(2)::before {
        background: #C0EBfE;
      }
      &:nth-child(3)::before {
        background: #FD8597;
      }
    }
  }
  .echart {
    height: 320px;
  }
}
</style>
