const { mockAppointments } = require('../../../mock/appointment')
const { mockGreeting } = require('../../../mock/greeting')

Page({
  data: {
    currentTab: 'all',
    list: [],
    statusMap: {
      pending: '待审核', approved: '已通过', rejected: '已拒绝',
      cancelled: '已取消', confirmed: '已核验'
    }
  },
  onShow() {
    this.loadData()
  },
  loadData() {
    const tab = this.data.currentTab
    let list = mockAppointments.map(a => ({
      ...a,
      greeting: a.status === 'approved' ? mockGreeting.greeting : ''
    }))
    if (tab !== 'all') {
      list = list.filter(item => item.status === tab)
    }
    this.setData({ list })
  },
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab
    this.setData({ currentTab: tab }, () => this.loadData())
  },
  onCancel(e) {
    wx.showModal({
      title: '提示', content: '确定撤销该预约吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: '已撤销', icon: 'success' })
          this.loadData()
        }
      }
    })
  },
  onRebook() {
    wx.showToast({ title: '已重新提交预约', icon: 'success' })
  },
  onShowQr(e) {
    const item = e.currentTarget.dataset.item
    const qrData = JSON.stringify({ id: item.id, name: item.visitorName, company: item.company })
    wx.showModal({
      title: '预约二维码',
      content: `扫码内容: ${qrData}\n（对接后端后显示二维码图片）`,
      confirmText: '关闭'
    })
  },
  onViewGreeting(e) {
    const item = e.currentTarget.dataset.item
    wx.showModal({ title: '迎接话术', content: item.greeting, confirmText: '知道了' })
  },
  goNotices() {
    wx.navigateTo({ url: '/pages/visitor/notices/notices' })
  }
})
