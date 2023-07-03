import Vue from 'vue'
import { Button, Form, FormItem, Input } from 'element-ui'
import { message } from 'element-ui'
Vue.prototype.$message = message;
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
