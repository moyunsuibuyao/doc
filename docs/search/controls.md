# 搜索控件

### 组件通用属性
<br>

属性名|可选值|类型|默认值|说明
-|-|-|-|-
width||String|100%|组件的宽度，如果是固定宽度，则传固定的px值，如：100px
gutter||Number|20|搜索控件与搜索按钮的间距
searchControls||Array|[]|搜索控件数据结构
tableOptions||Array|[]|个性化配合表格组件的数据结构
showBtn||Object||搜索组件下搜索按钮的数据结构
setStorageTable|true, false|Boolean|false|个性化结合表格组件缓存数据
setStorageSearch|true, false|Boolean|false|是否缓存搜索后的控件的值
showCollapse|true, false|Boolean|true|是否显示下拉收缩滑块

### 控件通用属性
<br>

属性名|可选值|类型|默认值|说明
-|-|-|-|-
type|input、select、date、range、time、timerange|String||控件类型，必须传，在后面文档中会有详细说明
readonly|true、false|Boolean|false|是否只读
bindValue||String/Number/Object/Array||控件v-model绑定的属性，必传，某些控件的bindValue结构需要严格控制，后面文档会有介绍
clearable|true、false|Boolean|true|是否显示清空按钮
disabled|true、false|Boolean|false|是否禁用控件
size|small、medium、min|Boolean|small|控件的大小
placeholder||String||控件无内容时显示的文字

### 按钮通用属性
<br>

属性名|可选值|类型|默认值|说明
-|-|-|-|-
type|input、select、date、range、time、timerange|String||控件类型，必须传，在后面文档中会有详细说明
readonly|true、false|Boolean|false|是否只读
bindValue||String/Number/Object/Array||控件v-model绑定的属性，必传，某些控件的bindValue结构需要严格控制，后面文档会有介绍
clearable|true、false|Boolean|true|是否显示清空按钮
disabled|true、false|Boolean|false|是否禁用控件
size|small、medium、min|Boolean|small|控件的大小
placeholder||String||控件无内容时显示的文字
