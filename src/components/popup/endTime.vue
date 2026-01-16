<template>
  <div class="endTime">
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
            :title="t('startTime.word_T1')"
            :confirm-button-text="t('startTime.word_T2')"
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="confirmNext"
            @cancel="close"
          />
        </template>
        <template v-if="step === 2">
          <van-time-picker
            v-model="currentTime"
            :title="t('startTime.word_T3')"
            :cancel-button-text="t('startTime.word_T4')"
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
import { showToast } from "vant";
import { useI18n } from "vue-i18n";
import { ref, computed } from "vue";
import { defineProps, onMounted } from "vue";

const props = defineProps({
  showEndTime: {
    type: Boolean,
    default: false,
  },
  startA: {
    type: String,
    default: false,
  },
  startB: {
    type: String,
    default: false,
  },
});

const emit = defineEmits([
  "update:showEndTime",
  "update:startA",
  "update:startB",
  "popupClose",
  "getParameterB",
]);

const { t } = useI18n();
const step = ref(1);
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1;
const date = now.getDate();
const currentDate = ref([]);
const minDate = new Date(2024, 12, 20);
const maxDate = new Date(2026, 12, 31);
const currentTime = ref([]);
const columnsType = ["hour", "minute", "second"];
const timeBefore = ref("");
const timeEnd = ref("");

const internalShow = computed({
  get() {
    return props.showEndTime;
  },
});

const confirmNext = (value) => {
  timeBefore.value =
    value.selectedValues[0] +
    "-" +
    value.selectedValues[1] +
    "-" +
    value.selectedValues[2];

  const timestamp1 = new Date(timeBefore.value).getTime();
  const timestamp2 = new Date(props.startA).getTime();
  if (Number(timestamp1) < Number(timestamp2)) {
    showToast(t("endTime.word_T1"));
    return;
  }
  currentTime.value = props.startB.split(':')
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

  const concatenate = timeBefore.value + " " + timeEnd.value;

  const fullDateTime1 = `${timeBefore.value}T${timeEnd.value}`;
  const fullDateTime2 = `${props.startA}T${props.startB}`;
  const timestamp1 = new Date(fullDateTime1).getTime();
  const timestamp2 = new Date(fullDateTime2).getTime();
  if (Number(timestamp1) <= Number(timestamp2)) {
    showToast(t("endTime.word_T2"));
    return;
  }
  emit("getParameterB", concatenate);
};

const close = () => {
  emit("popupClose", false);
};

onMounted(() => {
  currentDate.value = props.startA.split('-')
});
</script>

<style lang="scss">
@media (max-width: 10000px) {
  .endTime {
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