const { mockEmployees, filterEmployees } = require('../../../mock/employee')

Page({
  data: {
    list: mockEmployees,
    keyword: ''
  },
  onSearch(e) {
    const keyword = e.detail.value
    this.setData({
      keyword,
      list: keyword ? filterEmployees(keyword) : mockEmployees
    })
  },
  onAdd() {
    wx.showModal({ title: '新增员工', content: '（对接后端后显示新增表单）\n姓名、手机号、部门、职位', confirmText: '确定' })
  },
  onEdit(e) {
    const item = e.currentTarget.dataset.item
    wx.showModal({ title: '编辑员工', content: `编辑 ${item.name}\n（对接后端后显示编辑表单）`, confirmText: '确定' })
  },
  onDelete(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示', content: '确定删除该员工吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ list: this.data.list.filter(i => i.id !== id) })
          wx.showToast({ title: '已删除', icon: 'success' })
        }
      }
    })
  }
})
