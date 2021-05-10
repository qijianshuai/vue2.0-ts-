import Vue from 'vue'
import {
  Form,
  FormItem,
  Input,
  Select,
  Option,
  CheckboxGroup,
  Checkbox,
  RadioGroup,
  Radio,
  Button,
  MessageBox,
  Message,
  Dialog,
  DatePicker,
  Card,
  Pagination,
  Table,
  TableColumn,
  Switch
} from 'element-ui'
Vue.use(Card)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Select)
Vue.use(Option)
Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(Switch)
Vue.use(Button)
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.prototype.$messageBox = MessageBox
Vue.prototype.$message = Message
Vue.prototype.$bus = new Vue()
