# Vuex 笔记

**Getter**

`store`中的计算属性。`getter`接收`state`作为第一个参数，其他`getter`作为第二个参数。
`getter`会暴露为`store.getters`对象。

`mapGetters`辅助函数将`store`中的`getter`映射到局部计算属性

**Mutation**

`mutation`是更改`store`中状态的唯一方法。每个`mutation`都有一个接受字符串的**事件类型(type)**和一个**回调函数**。回调函数接受`state`作为第一个参数。第二个参数为`commit`提交的`payload`
要出发回调函数需要以相应的`type`调用`store.commit`方法。
可以在组件中使用`this.$store.commit('xxx')`提交mutation，或者使用`mapMutations`辅助函数将组件中的`methods`映射为`store.commit`调用。

> mutation必须是同步类型

**Action**

Action类似与Mutation。不同之处在于：

- Action提交的是mutation，而不是直接变更状态
- Action可以包含任意异步操作

Action函数接受一个**与store实例具有相同方法和属性的context对象**作为参数。因此可以调用`context.commit`提交一个`mutation`，或者通过`context.state`和`context.getters`来获取`state`和`getters`

Action通过`store.dispatch`触发。Action同样支持载荷方式和对象方式进行分发

```javascript
// 以载荷形式分发
store.dispatch('incrementAsync', {
  amount: 10
})
// 以对象形式分发
store.dispatch({
  type: 'incrementAsync',
  amount: 10
})
```

在组件中使用 `this.$store.dispatch('xxx') `分发 action，或者使用 `mapActions` 辅助函数将组件的 methods 映射为 `store.dispatch` 调用

**Module**

vuex可以将store分割成模块`module`。每个模块拥有自己的state，getter，mutation，action，甚至嵌套子模块。

模块内部的`getter`和`mutaion`接收的第一个参数是**模块的局部状态对象**。对于模块内部的`action`，state通过`contaxt.state`对象暴露出来。根结点状态则为`context.rootState`。对于模块内部的`getter`，根结点状态会作为第三个参数暴露出来。

**Plugins**

vuex的store接受`plugins`选项。这个选项暴露出每次 mutation 的钩子。vuex插件就是一个函数，它接受**store作为唯一参数**

```javascript
const myPlugin = store => {
  // 当 store 初始化后调用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  })
}
```

然后像这样使用：

```javascript
const store = new Vuex.Store({
  // ...
  plugins: [myPlugin]
})
```

在插件中不允许直接修改状态——类似于组件，只能通过提交 mutation 来触发变化。


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


