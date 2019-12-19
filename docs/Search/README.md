# 基本用法和功能（Search）

### 基本用法
<br>
在父组件中，引入search组件，并调用：<br><br>

```
import SearchComponent from "../../components/Search/Search";

components: { SearchComponent },
data() {
  return: {
    searchControls: [
      {
        key: "timeSelect",
        type: "time",
        label: "时间选择",
        bindValue: "",
        placeholder: "选择时间",
      },
      {
        key: "timeRangeSelect",
        type: "timeRange",
        label: "时间范围选择",
        bindValue: "",
        placeholder: "选择时间",
      },
      {
        key: "code",
        type: "input",
        label: "合同编号",
        bindValue: "",
        placeholder: "请输入合同编号",
      },
    ],
    tableOptions: [
      {
        key: 'projectName',
        label: '集采项目',
        show: true,
        filter: true,
      },
      {
        key: 'pattern',
        label: '采购模式',
        show: true,
      },
    ],
  };
}
```
```
<search-component
  ref="search"
  :search-controls="searchControls"
  :table-options="tableOptions"
>
</search-component>
  或者
<search-component
  ref="search"
  :search-controls="searchControls"
  table-options="tableOptions"
/>
```
<br>

### 功能
<br>
搜索组件针对交易平台有如下几点功能：
<br><br>

* 只需要按照对应的格式书写json就能生成搜索控件
<br><br>
* 搜索控件参数可选（搜索的来源与Element-UI，大部分的参数也来源于此）
<br><br>
* 搜索按钮参数可选（默认三个按钮：搜索，个性化，说明，其他想要自定义的按钮可以通过json自定义生成）
<br><br>
* 步骤条组件可选（查看合同或订单流程的时候会用到）
<br><br>
* 可缓存（对于搜索返回结果和个性化选择的数据提供缓存参数）
<br><br>
* 提供插槽（针对无法预料的定制化，提供了插槽）
<br><br>
* 提供方法（针对数据的变更提供方法以获得最新的数据）
<br>


