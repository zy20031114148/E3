const { hostAppointments } = require('../../../mock/appointment')

Page({
  data: {
    list: hostAppointments,
    statusMap: { pending: '待审核', approved: '已通过', rejected: '已拒绝', cancelled: '已取消', confirmed: '已核验' }
  },
  onApprove(e) {
    const id = e.currentTarget.dataset.id
    wx.showLoading({ title: '审批中...' })
    setTimeout(() => {
      const greeting = `🤖 欢迎${
        hostAppointments.find(i => i.id === id)?.company || ''
      }的访客莅临，请提前准备会议室和访客证。`
      const list = this.data.list.map(i =>
        i.id === id ? { ...i, status: 'approved', showGreeting: true, greeting } : i
      )
      this.setData({ list })
      wx.hideLoading()
      wx.showToast({ title: '已通过 · AI话术已生成', icon: 'success' })
    }, 800)
  },
  onReject(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '拒绝预约', content: '确定拒绝该预约申请吗？',
      success: (res) => {
        if (res.confirm) {
          const list = this.data.list.map(i => i.id === id ? { ...i, status: 'rejected' } : i)
          this.setData({ list })
          wx.showToast({ title: '已拒绝', icon: 'success' })
        }
      }
    })
  }
})
