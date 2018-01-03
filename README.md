SAP UI5
- 总的见解：mvc架构的企业级前端框架，有自己的框架语言和UI控件，还有web IDE这种可视化的编程工具。
- 使用UI5进行开发主要对控件的组合使用，了解控件的父类子类以及自身可以监听的事件，自己的方法，可以包含的aggregation。还有对数据的操作，包括本地的和远端的数据。
- UI5可以替我们做很多事情，比如如果绑定了odata 或者本地数据，ui5会在每次使用到这些数据时自动获取，修改数据时也会更新view。这些自动工作可以加快开发速度，同时也带来了一些不灵活的因素。
- 从命名空间以及xml的应用可以看到很多java的痕迹，而且并不太像是我理解的MVC框架，或者说他的controller大部分时候不涉及View部分手动更新UI，并不需要手动更新view，而是通过数据绑定来更新view。
- Todomvc的实现过程，我是根据官方的API以及github上的一个sample-app来实现的，我用的是xml view，他可以更加直观的看到界面的结构，还有绑定数据和事件。
    - App
        - todoForm(Input)
        - Todos(Table)
        - menu(Button s)
    - 数据源是本地的一个json文件
    - 筛选的实现是根据json文件中的model变量来判断哪些该显示哪些不该显示{parts: ['todos>/mode', 'todos>done'],formatter: '.getVisible’}
    - 
- 遇到的问题
    - 如何在controller中获得model以及其他的操作只能借助sample代码，后来才找到文档
    - 获取model是没有传入model名字卡了半个下午
    - 项目中自带的grunt job里的build命令没有把ui5需要的库文件搬到dist文件夹里面
    - 只是个初学者
- 优点
    - 熟悉框架的人可以很快的完成开发，或者说是组装
- 缺陷，也可能是因为不太理解这个框架而导致自己认为这是缺陷
    - 不能写自己的dom，自定义性不够强，自定义control是一种解决方案
    - 使用第三方包比较麻烦，貌似不支持npm，搜到的教程是手动
    - 对于SAPUI5这个企业为主要用户的框架，这些或许不能说是缺陷

Es6支持
aggregation
filter
