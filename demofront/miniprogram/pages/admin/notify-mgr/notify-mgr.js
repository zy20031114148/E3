const { mockNotices } = require('../../../mock/notification')

Page({
  data: { list: mockNotices },
  onAdd() {
    wx.showModal({
      title: '发布通知', content: '（对接后端后显示表单）\n标题、内容、发布范围',
      confirmText: '确定'
    })
  },
  onEdit(e) {
    const item = e.currentTarget.dataset.item
    wx.showModal({ title: '编辑通知', content: `编辑 ${item.title}\n（对接后端后显示编辑表单）`, confirmText: '确定' })
  },
  onDetail(e) {
    const item = e.currentTarget.dataset.item
    wx.showModal({ title: item.title, content: item.content, confirmText: '关闭' })
  },
  onDelete(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示', content: '确定删除该通知吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ list: this.data.list.filter(i => i.id !== id) })
          wx.showToast({ title: '已删除', icon: 'success' })
        }
      }
    })
  }
})
