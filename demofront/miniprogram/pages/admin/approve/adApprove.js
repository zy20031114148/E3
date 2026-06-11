const { adminPendingList } = require('../../../mock/appointment')

Page({
  data: {
    currentTab: 'all',
    list: adminPendingList,
    statusMap: { pending: '待审核', approved: '已通过', rejected: '已拒绝', cancelled: '已取消', confirmed: '已核验' }
  },
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab
    this.setData({ currentTab: tab })
    if (tab === 'pending') {
      this.setData({ list: adminPendingList.filter(i => i.status === 'pending') })
    } else {
      this.setData({ list: adminPendingList })
    }
  },
  onApprove(e) {
    const id = e.currentTarget.dataset.id
    this.updateStatus(id, 'approved')
  },
  onReject(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '拒绝预约', content: '确定拒绝该预约吗？',
      success: (res) => { if (res.confirm) this.updateStatus(id, 'rejected') }
    })
  },
  updateStatus(id, status) {
    const list = this.data.list.map(i => i.id === id ? { ...i, status } : i)
    this.setData({ list })
    wx.showToast({ title: status === 'approved' ? '已通过' : '已拒绝', icon: 'success' }
    )
  },
  goNotifyMgr() {
    wx.navigateTo({ url: '/pages/admin/notify-mgr/notify-mgr' })
  }
})
