const { mockOverview, mockTrend, mockCompanyRank, mockDeptRank } = require('../../../mock/stats')

Page({
  data: {
    overview: mockOverview,
    trend: mockTrend,
    companyRank: mockCompanyRank,
    deptRank: mockDeptRank,
    maxBar: 0,
    maxCount: 0
  },
  onLoad() {
    this.setData({
      maxBar: Math.max(...mockTrend.map(i => i.count)),
      maxCount: Math.max(...mockCompanyRank.map(i => i.count))
    })
  }
})
