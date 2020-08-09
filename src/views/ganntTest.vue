<template>
  <div class="wl-gantt-demo">
        <wlGantt  :data="data"
        start-date="2019-9-02" end-date="2020-11-24"></wlGantt>
    </div>
</template>
<script>


export default {

    data(){
      return{
        data: [
        {
          id: 1,
          pid: 0,
          name: "旅行",
          startDate: "2019-09-07",
          endDate: "2019-09-09",
          children: [
            {
              id: "1-1",
              pid: 1,
              name: "云台之间",
              pre: "1-1-1",
              startDate: "2019-09-01",
              endDate: "2019-09-09",
              children: [
                {
                  id: "1-1-1",
                  pid: "1-1",
                  name: "日落云巅",
                  startDate: "2019-09-01",
                  endDate: "2019-09-09"
                }
              ]
            },
            {
              id: "1-2",
              pid: 1,
              pre: "1-1-1",
              name: "天空之镜",
              startDate: "2019-09-08",
              endDate: "2019-10-02"
            },
            {
              id: "1-3",
              name: "蓬莱之岛",
              pid: 1,
              startDate: "2019-10-20",
              endDate: "2019-11-10"
            },
            {
              id: "1-4",
              pid: 1,
              name: "西塘之南",
              startDate: "2019-12-02",
              endDate: "2019-12-07"
            },
            {
              pid: 1,
              id: "1-5",
              name: "凤凰之缘",
              startDate: "2020-01-01",
              endDate: "2020-01-10"
            }
          ]
        },
        {
          id: 2,
          name: "租房子",
          startDate: "2019-09-20",
          endDate: "2019-12-31"
        }
      ]
      }
    }

}
</script>
