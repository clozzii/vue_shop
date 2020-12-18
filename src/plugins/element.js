import Vue from 'vue'
import { Button, Form, FormTtem, Input, Message, MessageBox } from 'element-ui'

Vue.use(Button, Form, FormTtem, Input, Message)

Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.$confirm
