const { mockVerifyResult } = require('../../../mock/greeting')

Page({
  data: {
    showResult: false,
    result: null
  },
  onScan() {
    wx.showToast({ title: '模拟扫码中...', icon: 'none' })
    setTimeout(() => this.showMockResult(), 500)
  },
  onManualInput() {
    wx.showModal({
      title: '手动输入', content: '（对接后端后输入预约ID查询）\n开发阶段直接显示模拟结果',
      success: () => this.showMockResult()
    })
  },
  showMockResult() {
    this.setData({
      showResult: true,
      result: { ...mockVerifyResult }
    })
  },
  onConfirm() {
    wx.showLoading({ title: '确认中...' })
    setTimeout(() => {
      const result = { ...this.data.result, confirmed: true }
      this.setData({ result })
      wx.hideLoading()
      wx.showToast({ title: '已确认放行', icon: 'success' })
    }, 600)
  }
})
