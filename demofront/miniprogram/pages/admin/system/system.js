const { mockSystemSettings } = require('../../../mock/notification')

Page({
  data: {
    settings: { ...mockSystemSettings }
  },
  onFieldChange(e) {
    const field = e.currentTarget.dataset.field
    this.setData({ [`settings.${field}`]: e.detail.value })
  },
  onSave() {
    wx.showToast({ title: '设置已保存（mock）', icon: 'success' })
  },
  goPage(e) {
    wx.navigateTo({ url: e.currentTarget.dataset.url })
  }
})
