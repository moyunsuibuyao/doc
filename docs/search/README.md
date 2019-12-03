# 基本用法和功能（Search）

### 基本用法
<br>
在父组件中，引入search组件，并调用：<br><br>

```
import SearchComponent from "../../components/Search/Search";

components: { SearchComponent }
```
```
<search-component></search-component>
  或者
<search-component />
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
* 搜索按钮参数可选（默认三个按钮：搜索，个性化，说明）
<br><br>
* 时间轴可选（查看合同或订单流程的时候需要显示）
<br><br>
* 可缓存（对于搜索返回结果和个性化选择的数据提供缓存参数）
<br><br>
* 提供插槽（针对无法预料的定制化，提供了插槽）
<br><br>
* 提供方法（针对数据的变更提供方法以获得最新的数据）


