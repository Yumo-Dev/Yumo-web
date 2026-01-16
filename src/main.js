import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import store from './store/index'
import i18n from './languages'

import { Popup } from 'vant';
import { Overlay } from 'vant';
import { Tab, Tabs } from 'vant';
import { Toast } from 'vant';
import { DatePicker } from 'vant';
import { TimePicker } from 'vant';
import { CountDown } from 'vant';
import { Rate } from 'vant';
import { setToastDefaultOptions } from 'vant';

import 'vant/lib/index.css';
import '@vant/touch-emulator';

setToastDefaultOptions({ duration: 2000 });

const app = createApp(App)

router.afterEach(() => {
  const main = document.querySelector('#app .el-main')
  if (main) main.scrollTop = 0
})

app.use(ElementPlus)
app.use(Popup);
app.use(Overlay);
app.use(Tab);
app.use(Tabs);
app.use(Toast);
app.use(DatePicker);
app.use(TimePicker);
app.use(CountDown);
app.use(Rate);

app.use(router)
app.use(store)
app.use(i18n)
app.mount('#app')
