const { mockRoles, allPermissions } = require('../../../mock/notification')

Page({
  data: {
    roles: mockRoles,
    allPermissions,
    expandedId: null
  },
  toggleExpand(e) {
    const id = e.currentTarget.dataset.id
    this.setData({
      expandedId: this.data.expandedId === id ? null : id
    })
  },
  onPermChange(e) {
    wx.showToast({ title: '权限已更新（mock）', icon: 'success' })
  }
})
