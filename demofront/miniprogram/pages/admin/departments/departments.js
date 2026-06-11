const { mockDepartments } = require('../../../mock/department')

Page({
  data: { list: mockDepartments.filter(d => d.parentId === 0) },
  onAdd() {
    wx.showModal({ title: '新增部门', content: '（对接后端后显示新增表单）\n部门名称、负责人', confirmText: '确定' })
  },
  onEdit(e) {
    const item = e.currentTarget.dataset.item
    wx.showModal({ title: '编辑部门', content: `编辑 ${item.name}\n（对接后端后显示编辑表单）`, confirmText: '确定' })
  },
  onDelete(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示', content: '确定删除该部门吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ list: this.data.list.filter(i => i.id !== id) })
          wx.showToast({ title: '已删除', icon: 'success' })
        }
      }
    })
  }
})
