const { mockHolidays } = require('../../../mock/notification')

Page({
  data: { list: mockHolidays },
  onAdd() {
    wx.showModal({
      title: '新增节假日', content: '（对接后端后显示新增表单）\n名称、日期、类型',
      confirmText: '确定'
    })
  },
  onDelete(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示', content: '确定删除该节假日吗？',
      success: (res) => {
        if (res.confirm) {
          this.setData({ list: this.data.list.filter(i => i.id !== id) })
          wx.showToast({ title: '已删除', icon: 'success' })
        }
      }
    })
  }
})
