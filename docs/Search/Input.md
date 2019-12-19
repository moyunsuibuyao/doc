# Input文本框

### Attributes

属性名|可选值|类型|默认值|说明
-|-|-|-|-
type||String||必传，文本框的type需设置为‘input’(searchControls数组里的对象属性，下同)
readonly||Boolean/Function|false|是否只读（如果为Function类型，则结果需返回一个布尔值，data为Function时的参数，值为该文本框的JSON数据）
bindValue|||''|文本框双向绑定的属性（必传！！！）
clearable|true/false|Boolean|true|是否显示清空文本的按钮
disabled||Boolean/Function|false|是否禁用（如果为Function类型，则结果需返回一个布尔值，data为Function时的参数，值为该文本框的JSON数据）
size|large, small, mini|String|small|输入框尺寸
labelWidth||String|90px|文本的宽度
placeholder||String|''|输入框占位文本
maxlength||Number||最大输入长度
minlength||Number||最小输入长度
icon||String||文本框内的图标，详见element-ui文本框icon属性设置
append||Function/String|''|文本框的后置图标，当为Function时，参数data为该文本框的JSON数据
appendStyle||Function/String/Object|''|后置图标样式设置，当为Function时，参数data为该文本框的JSON数据
prepend||Function/String|''|文本框前置图标，用法同append
prependStyle||Function/String/Object|''|前置图标样式设置，用法同appendStyle

<br />

### Events/Methods

事件名|参数|说明
-|-|-
iconClick|e(event事件)，data(该文本框的JSON数据)|点击文本框内图标时触发的方法
change|val|在Input值改变时触发
appendClick|data(该文本框的JSON数据)|点击后置图标时触发
prependClick|data(该文本框的JSON数据)|点击前置置图标时触发
