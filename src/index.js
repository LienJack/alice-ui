import Vue from 'vue'

import aliceIcon from './icon/icon.vue'
import aliceButton from './button'
import aliceSlider from './slider'
import aliceCheckbox from './checkbox'
import aliceCheckboxGroup from './checkboxGroup'
import aliceRadio from './radio'
import aliceRadioGroup from './radioGroup'
import aliceSwitch from './switch'
import aliceNavBar from './navBar'
import aliceSpinner from './spinner'
import aliceCollapse from './collapse'
import aliceCollapseItem from './collapseItem'
import alicePopup from './popup'
import { aliceSelectItem } from './select'
import { tabs, tabsBody, tabsHead, tabsItem, tabsPane } from './tabs'

import { Alert, Confirm } from './dialog'
Vue.prototype.$alert = Alert

Vue.prototype.$confirm = Confirm 

Vue.component('aliceIcon', aliceIcon)
Vue.component('aliceButton', aliceButton)
Vue.component('aliceSlider', aliceSlider)
Vue.component('aliceCheckbox', aliceCheckbox)
Vue.component('aliceCheckboxGroup', aliceCheckboxGroup)
Vue.component('aliceRadio', aliceRadio)
Vue.component('aliceRadioGroup', aliceRadioGroup)
Vue.component('aliceSwitch', aliceSwitch)
Vue.component('aliceNavBar', aliceNavBar)
Vue.component('aliceSpinner', aliceSpinner)
Vue.component('aliceSelectItem', aliceSelectItem)
Vue.component('aliceCollapse', aliceCollapse)
Vue.component('aliceCollapseItem', aliceCollapseItem)
Vue.component('aliceTabs', tabs)
Vue.component('aliceTabsBody', tabsBody)
Vue.component('aliceTabsHead', tabsHead)
Vue.component('aliceTabsItem', tabsItem)
Vue.component('aliceTabsPane', tabsPane)
Vue.component('alicePopup', alicePopup)


import './style/animate.scss'

