<template>

  <div class="box">
      <el-row style="height:10%">
          <dv-border-box-11 title="hello world"></dv-border-box-11>
      </el-row>
      <el-row style="height:45%">
          <el-col :span="8" class="center_col centet_left">
              <dv-border-box-1><dv-charts :option="option" /></dv-border-box-1>
          </el-col>
          <el-col :span="16" class="center_col">
              <dv-border-box-3>
                  <dv-charts :option="optionCenterRight" />
              </dv-border-box-3>
          </el-col>
      </el-row>

      <el-row style="height:45%">
          <el-col :span="6" class="center_col">
              <dv-border-box-8 dur="6">
                  <dv-charts :option="optionBottomLeft1" />
              </dv-border-box-8>
          </el-col>
          <el-col :span="6" class="center_col bottom_left_2">
              <dv-border-box-8 dur="6">
                  <dv-capsule-chart :config="optionBottomLeft2" class="jiaolangzhutu" />
              </dv-border-box-8>
          </el-col>
          <el-col :span="6" class="center_col">
              <dv-border-box-8 dur="6">dv-border-box-8</dv-border-box-8>
          </el-col>
          <el-col :span="6" class="center_col">
              <dv-border-box-8 dur="6">dv-border-box-8</dv-border-box-8>
          </el-col>
      </el-row>
     

  </div>

</template>
<script>

export default {
    data(){
        return{
            option:{
                  title: {
                text: '畅销饮料占比饼状图',
                style: {
                    fill: '#fff',
                    fontSize: 17,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    textBaseline: 'bottom'
                    }
                        },
                series: [
                    {
                    type: 'pie',
                    data: [
                        { name: '可口可乐', value: 93 },
                        { name: '百事可乐', value: 32 },
                        { name: '哇哈哈', value: 65 },
                        { name: '康师傅', value: 44 },
                        { name: '统一', value: 52 },
                    ],
                    insideLabel: {
                        show: true
                    }
                    }
                ]
            },

optionBottomLeft1:{
      title: {
    text: '剩余油量表',
    style: {
      fill: '#fff'
    }
  },
  series: [
    {
      type: 'gauge',
      data: [ { name: 'itemA', value: 55 } ],
      center: ['50%', '55%'],
      axisLabel: {
        formatter: '{value}%',
        style: {
          fill: '#fff'
        }
      },
      axisTick: {
        style: {
          stroke: '#fff'
        }
      },
      animationCurve: 'easeInOutBack'
    }
  ]
},

optionCenterRight:{
  title: {
    text: '周销售额趋势'
  },
  xAxis: {
    name: '第一周',
    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
  },
  yAxis: {
    name: '销售额',
    data: 'value'
  },
  series: [
    {
      data: [1200, 2230, 1900, 2100, 3500, 4200, 3985],
      type: 'bar',
      gradient: {
        color: ['#37a2da', '#67e0e3']
      }
    }
  ]
},

optionBottomLeft2:{
data: [
    {
      name: '南阳',
      value: 167
    },
    {
      name: '周口',
      value: 67
    },
    {
      name: '漯河',
      value: 123
    },
    {
      name: '郑州',
      value: 55
    },
    {
      name: '西峡',
      value: 98
    }
  ]
},




        }
    }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}
.box{
    height: 100%;
    background: url("../assets/bg.png");
    background-size: 100%;
}
.center_col{
    height: 100%;
    
}
.centet_left{
    /* background: #fff; */
}
.bottom_left_2{
    position: relative;
}
.jiaolangzhutu{
    height: 80%;
    width: 80%;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%,-50%);
}
</style>