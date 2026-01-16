import {
  createI18n
} from 'vue-i18n'

import cn from './locales/A1_cn'
import en from './locales/A2_en'

const locale = localStorage.getItem('language_YUMO') ?
  localStorage.getItem('language_YUMO') : "US"
localStorage.setItem('language_YUMO', locale)

const messages = {
  US: {
    ...en
  },
  CN: {
    ...cn
  },
}

// 后端缩写
// CN=中文,
// US=英语,
// KR=韩语,
// JP=日语,
// VN=越南语,
// ES=西班牙语,
// RU=俄罗斯语,
// DE=德语,
// FR=法语,
// RO=罗马尼亚语,
// BG=保加利亚语,
// PT=葡萄牙语
// 获取公告列表

const i18n = createI18n({
  locale: locale,
  messages,
  silentTranslationWarn: true,
})

export default i18n