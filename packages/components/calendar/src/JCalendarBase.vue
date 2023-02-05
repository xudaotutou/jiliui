<script setup lang="ts">
import { reactive, onMounted, defineProps } from "vue";

const props = defineProps({
  value: Date,
});

const calendarDate = reactive({
  weekText: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
  thisMonthDays: [],
  lastEmptyDays: [],
  nextEmptyDays: [],
  Today:
    new Date().getFullYear() +
    "-" +
    (Number(new Date().getMonth()) + 1) +
    "-" +
    new Date().getDate(),
  isSelect: new Date().getMonth() + 1 + "-" + new Date().getDate(),
});

// 获取当月天数
const getThisMonthDays = (year: number, month: number) => {
  return new Date(year, month, 0).getDate();
};

// 展示的数据
const display = (year: number, month: number) => {
  createDays(year, month);
  createEmptyGrid(year, month);
};

// 当月份展示的数据
const createDays = (year: number, month: number) => {
  let days = getThisMonthDays(calendarDate.year, calendarDate.month);
  for (let i = 1; i <= days; i++) {
    calendarDate.thisMonthDays.push({
      year,
      month,
      day: i,
      dayFormat: zero(i),
    });
  }
};

// 获取展示上个月和下个月的
const createEmptyGrid = (year: number, month: number) => {
  let week = new Date(Date.UTC(year, month - 1, 1)).getDay(),
    emptyNum = week == 6 ? 7 : week;

  let thisMonthDays = getThisMonthDays(year, month);
  let lastMonth = month - 1 < 0 ? 12 : month - 1;
  let preMonthDays =
    month - 1 < 0
      ? getThisMonthDays(year - 1, 11)
      : getThisMonthDays(year, month - 1);
  for (let i = 1; i <= emptyNum; i++) {
    calendarDate.lastEmptyDays.push({
      month: lastMonth,
      day: preMonthDays - (emptyNum - i),
    });
  }
  if (calendarDate.lastEmptyDays.length == 7) {
    calendarDate.lastEmptyDays = [];
  }
  let nextMonth = month + 1 > 12 ? 1 : month + 1;
  let after =
    42 - thisMonthDays - emptyNum - 7 >= 0
      ? 42 - thisMonthDays - emptyNum - 7
      : 42 - thisMonthDays - emptyNum;
  for (let i = 1; i <= after; i++) {
    calendarDate.nextEmptyDays.push({
      month: nextMonth,
      day: i,
    });
  }
};

// 清空数据
const clearDate = (): void => {
  calendarDate.thisMonthDays = [];
  calendarDate.lastEmptyDays = [];
  calendarDate.nextEmptyDays = [];
};

const selectDay = (month: number, day: number) => {
  calendarDate.isSelect = month + "-" + day;
};

const toToday = (): void => {
  (calendarDate.year = new Date().getFullYear()),
    (calendarDate.month = new Date().getMonth() + 1),
    (calendarDate.day = new Date().getDate());
  clearDate();
  display(calendarDate.year, calendarDate.month, calendarDate.day);
  selectDay(calendarDate.month, calendarDate.day);
};

const previousMonth = (): void => {
  calendarDate.year =
    calendarDate.month === 1 ? calendarDate.year - 1 : calendarDate.year;
  calendarDate.month = calendarDate.month === 1 ? 12 : calendarDate.month - 1;
  clearDate();
  selectDay(calendarDate.month, 1);
  display(calendarDate.year, calendarDate.month, calendarDate.day);
};

const nextMonth = (): void => {
  calendarDate.year =
    calendarDate.month === 12 ? calendarDate.year + 1 : calendarDate.year;
  calendarDate.month = calendarDate.month === 12 ? 1 : calendarDate.month + 1;
  clearDate();
  selectDay(calendarDate.month, 1);
  display(calendarDate.year, calendarDate.month, calendarDate.day);
};

onMounted(() => {
  display(calendarDate.year, calendarDate.month);
  (calendarDate.year = props.value.getFullYear()),
    (calendarDate.month = props.value.getMonth() + 1),
    (calendarDate.day = props.value.getDate());
});

// 格式化月份 -- 01
const zero = (i: number) => {
  return i >= 10 ? i : "0" + i;
};
</script>

<template>
  <div class="calendarContainer">
    <div class="calenderHeader">
      <slot name="header">
        <div class="header-detail">
          {{ calendarDate.year }} - {{ calendarDate.month }}
        </div>
        <div class="button-group">
          <button
            class="button"
            @click="previousMonth"
          >
            Previous Month
          </button>
          <button
            class="button"
            @click="toToday"
          >
            Today
          </button>
          <button
            class="button"
            @click="nextMonth"
          >
            Next Month
          </button>
        </div>
      </slot>
    </div>
    <div class="headerLine" />
    <div class="calendarWeekText">
      <div
        v-for="(item, index) in calendarDate.weekText"
        :key="index"
        class="day"
      >
        {{ item }}
      </div>
    </div>
    <div class="gridContainer">
      <div
        v-for="(item, index) in calendarDate.lastEmptyDays"
        :key="index"
        class="grey grid"
        :class="{
          isSelect: calendarDate.isSelect === item.month + '-' + item.day,
        }"
        @click="selectDay(item.month, item.day)"
      >
        {{ item.day }}
      </div>
      <div
        v-for="(item, index) in calendarDate.thisMonthDays"
        :key="index"
        class="grid"
        :class="{
          select:
            calendarDate.Today ===
            item.year + '-' + item.month + '-' + item.day,
          isSelect: calendarDate.isSelect === item.month + '-' + item.day,
        }"
        @click="selectDay(item.month, item.day)"
      >
        {{ item.day }}
      </div>
      <div
        v-for="(item, index) in calendarDate.nextEmptyDays"
        :key="index"
        class="grey grid"
        :class="{
          isSelect: calendarDate.isSelect === item.month + '-' + item.day,
        }"
        @click="selectDay(item.month, item.day)"
      >
        {{ item.day }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendarContainer {
  width: 700px;
  /* height: 500px; */
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
}
.calenderHeader {
  display: flex;
  height: 60px;
  line-height: 60px;
  justify-content: space-between;
}
.button-group {
  /* max-width: 60%; */
  width: 60%;
  /* margin-left: auto; */
  text-align: right;
}
.button {
  border: 1px solid #eee;
  height: 30px;
  font-size: 12px;
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  background: none;
  white-space: nowrap;
}
.button:hover {
  background: rgba(183, 215, 240, 0.677);
}
.headerLine {
  border-bottom: 2px solid #eee;
  height: 5px;
}
.calendarWeekText {
  display: flex;
}
.day {
  flex: 1;
  /* border: 1px solid #eee; */
  text-align: center;
  height: 50px;
  line-height: 50px;
}
.gridContainer {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 5px;
}
.grid {
  width: 14%;
  text-align: center;
  height: 70px;
  line-height: 70px;
  border: 1px solid #eee;
  cursor: pointer;
}
.grid:hover {
  background: rgba(183, 215, 240, 0.677);
}
.grey {
  color: #eee;
}
.select {
  color: rgba(69, 166, 241, 0.677);
  /* background: rgba(183, 215, 240, 0.677); */
}
.isSelect {
  color: rgba(69, 166, 241, 0.677);
  background: rgba(183, 215, 240, 0.677);
}
</style>
