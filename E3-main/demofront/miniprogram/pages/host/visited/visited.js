const { hostRecords } = require('../../../mock/appointment')
const { mockHostStats } = require('../../../mock/stats')

Page({
  data: {
    list: hostRecords,
    stats: mockHostStats,
    statusMap: {
      pending: '待审核', approved: '已通过', rejected: '已拒绝',
      cancelled: '已取消', confirmed: '已核验'
    }
  },
  goHelper() {
    wx.navigateTo({ url: '/pages/host/helper/helper' })
  }
})
