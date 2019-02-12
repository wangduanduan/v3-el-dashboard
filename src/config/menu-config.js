const base = 'Home'

export default [{
  name: 'basic',
  meta: {
    title: '基本'
  },
  sub: [{
    name: 'BasicLayout',
    meta: {
      index: `BasicLayout`,
      title: '基本布局',
      type: 'menu',
      active: false
    }
  }, {
    name: 'BasicContainer',
    meta: {
      index: `BasicContainer`,
      title: '基本容器',
      type: 'menu',
      active: false
    }
  }]
}, {
  name: 'Form',
  meta: {
    title: '表单'
  },
  sub: [{
    name: 'FormRadio',
    meta: {
      index: `FormRadio`,
      title: '单选按钮',
      type: 'menu',
      active: false
    }
  }]
}]
