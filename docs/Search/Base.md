# Search Component

### Attributes

属性名|可选值|类型|默认值|说明
-|-|-|-|-
col-height||Number|47|控件外层el-col的高度，用以特殊情况，一般不会用到
one-line|true, false|Boolean|false|搜索组件是否只有一行，是的话可以开启此项，并且不要设置show-collapse
show-step|true, false|Boolean|false|是否显示步骤条，在合同流程和订单流程中会有用到
step-active||Number|0|设置当前激活步骤，参照element-ui的步骤条active属性
step|finishStatus、space、direction、processStatus、alignCenter、simple（参照element-ui步骤条属性）；stepsListType有三个参数可选：custom、contract、invoice，分别是自定义，合同步骤条模板和订单步骤条模板；style步骤条的样式设置|Object|{ finishStatus: 'success', space: '', direction: 'horizontal', processStatus: 'process', alignCenter: false, simple: false, stepsListType: 'contract', style: { width: '850px', marginBottom: '20px', marginLeft: '105px', }, }|设置步骤条的属性
steps-list|title、description参照element-ui步骤条属性，titleCss标题的样式，descriptionCss描述文字的样式|Array|[{ title: '生成三方合同', description: '', titleCss: {}, descriptionCss: {} },{ title: '待签章（医疗机构）', description: '', titleCss: {}, descriptionCss: {} },{ title: '待签章（配送企业）', description: '', titleCss: {}, descriptionCss: {} },{ title: '待签章（GPO）', description: '', titleCss: {}, descriptionCss: {} },{ title: '合同生效', description: '', titleCss: {}, descriptionCss: {} }]|步骤条组件的流程数据
gutter||Number|20|搜索控件与搜索按钮的间距
width||String|100%|组件的宽度，如果是固定宽度，则传固定的px值，如：100px
search-controls||Array|[]|搜索控件数据结构
show-btn||Object||搜索组件要显示的按钮，默认显示搜索和个性化，说明按钮默认不显示，其他按钮需自行写JSON定义
table-options||Array|[]|设置个性化过滤列，配合表格组件一起使用
set-storage|true, false|Boolean|false|个性化结合表格组件缓存数据，当页面刷新后依然保持选择时的状态
show-collapse|true, false|Boolean|false|是否显示下拉收缩滑块

<br />

### Events/Methods

事件名|参数|说明
-|-|-
on-search|val, data|搜索事件，val为参照现有项目格式化好的数据，data为原始数据，如想自定义数据格式，可用data获取值
searchData|{ data, search }|获取搜索表单的数据，search，data为原始数据，用法：this.$refs.search.searchData（需要设置组件的ref）
searchHeight||获取组件高度，用法：this.$refs.search.searchHeight（需要设置组件的ref，如组件未加载完成，则返回“组件尚未加载完成”）
