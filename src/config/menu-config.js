const base = 'Home'

export default [{
  name: 'basic',
  meta: {
    title: '基本',
    icon: 'el-icon-location'
  },
  sub: [{
    name: 'BasicLayout',
    meta: {
      index: `/Home/BasicLayout`,
      title: '基本布局',
      type: 'menu',
      active: false
    }
  }, {
    name: 'BasicContainer',
    meta: {
      index: `/Home/BasicContainer`,
      title: '基本容器',
      type: 'menu',
      active: false
    }
  }]
}, {
  name: 'Form',
  meta: {
    title: '表单',
    icon: 'el-icon-news'
  },
  sub: [{
    name: 'FormRadio',
    meta: {
      index: `/Home/FormRadio`,
      title: '单选按钮',
      type: 'menu',
      active: false
    }
  }]
}]
