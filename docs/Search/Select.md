# Select下拉选项框

### Select Attributes

属性名|可选值|类型|默认值|说明
-|-|-|-|-
type||String||必传，下拉框的type需设置为‘select’
readonly||Boolean/Function|false|是否只读（如果为Function类型，则结果需返回一个布尔值，data为Function时的参数，值为下拉框的JSON数据）
bindValue|||''|下拉框双向绑定的属性（必传！！！），如果是多选下拉框并且有默认值，则格式为[value1, value2]
clearable|true/false|Boolean|true|是否显示清空文本的按钮
disabled||Boolean/Function|false|是否禁用（如果为Function类型，则结果需返回一个布尔值，data为Function时的参数，值为该下拉框的JSON数据）
size|large, small, mini|String|small|输入框尺寸
labelWidth||String|90px|文本的宽度
placeholder||String|''|输入框占位文本
multiple|true/false|Boolean|false|是否开启下拉框多选
filterable|true/false|Boolean|false|是否开启选项过滤
options||Array/Function|[]|下拉框选项，为Function时需返回一个数组

<br />

### Select Events/Methods

事件名|参数|说明
-|-|-
change|val（目前选中的值），data（该下拉框的JSON数据）|选中值发生变化时触发

<br />

### Options Attributes

属性名|可选值|类型|默认值|说明
-|-|-|-|-
label||String/Number||选项的标签，若不设置则默认与 value 相同
value||String/Number/Object||选项的值
disabled||Boolean/Function|false|是否禁用该选项，为Function需返回布尔值，接收两个参数data（该下拉框的JSON数据）和val（目前选中的值）
