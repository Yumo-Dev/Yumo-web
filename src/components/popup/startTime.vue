<template>
  <div class="startTime">
    <van-popup
      v-model:show="internalShow"
      position="bottom"
      :transition-appear="true"
      :safe-area-inset-bottom="true"
    >
      <div class="content">
        <template v-if="step === 1">
          <van-date-picker
            v-model="currentDate"
            :title="$t('startTime.word_T1')"
            :confirm-button-text="$t('startTime.word_T2')"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirmNext"
            @cancel="close"
          />
        </template>
        <template v-if="step === 2">
          <van-time-picker
            v-model="currentTime"
            :title="$t('startTime.word_T3')"
            :cancel-button-text="$t('startTime.word_T4')"
            :columns-type="columnsType"
            @cancel="cancelBack"
            @confirm="confirmDone"
          />
        </template>
      </div>
    </van-popup>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { ref, computed } from "vue";

const props = defineProps({
  showStartTime: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:showStartTime", "popupClose", "getParameterA"]);

const step = ref(1);
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const currentDate = ref([year, month, date]);
const minDate = new Date(2024, 12, 20);
const maxDate = new Date(2026, 12, 31);
const currentTime = ref(["00", "00", "00"]);
const columnsType = ["hour", "minute", "second"];
const timeBefore = ref("");
const timeEnd = ref("");

const internalShow = computed({
  get() {
    return props.showStartTime;
  },
});

const confirmNext = (value) => {
  timeBefore.value =
    value.selectedValues[0] +
    "-" +
    value.selectedValues[1] +
    "-" +
    value.selectedValues[2];
  // console.log(timeBefore.value, "value");
  step.value = 2;
};

const cancelBack = () => {
  step.value = 1;
};

const confirmDone = (value) => {
  timeEnd.value =
    value.selectedValues[0] +
    ":" +
    value.selectedValues[1] +
    ":" +
    value.selectedValues[2];
  console.log(timeEnd.value, "value");
  // const concatenate = timeBefore.value + " " + timeEnd.value
  // console.log(concatenate, "concatenate")
  emit("getParameterA", timeBefore.value, timeEnd.value);
};

const close = () => {
  emit("popupClose", false);
};
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .startTime {
    .van-popup {
      left: 0;
      right: 0;
      margin: auto;
      min-width: 320px;
      max-width: 750px;
      background: transparent;
      .content {
        border-radius: 20px 20px 0 0;
        background: white;
        .van-picker {
          background: transparent;
          .van-picker__toolbar {
            height: 50px;
            .van-picker__cancel {
              padding: 0 10px;
              font-weight: bold;
              font-size: 14px;
              font-family: "jtFont";
            }
            .van-picker__title {
              line-height: normal;
              font-weight: bold;
              font-size: 14px;
              font-family: "jtFont";
            }
            .van-picker__confirm {
              padding: 0 10px;
              font-weight: bold;
              font-size: 14px;
              font-family: "jtFont";
            }
          }
          .van-picker__columns {
            .van-picker-column {
              font-weight: bold;
              font-size: 14px;
              font-family: "jtFont";
            }
          }
        }
      }
    }
  }
}
</style>