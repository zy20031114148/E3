const { mockEmployees } = require('../../../mock/employee')

const mockHosts = mockEmployees.filter(e => e.status === 1).map(e => ({
  id: e.id, name: e.name, department: e.department
}))

Page({
  data: {
    form: {
      visitorName: '',
      visitorPhone: '',
      company: '',
      purpose: '',
      hostName: '',
      hostId: '',
      visitorCount: 1,
      carPlate: '',
      date: '',
      time: '',
      remark: ''
    },
    hostList: mockHosts,
    submitting: false
  },
  onFieldChange(e) {
    const field = e.currentTarget.dataset.field
    this.setData({
      [`form.${field}`]: e.detail.value
    })
  },
  onHostChange(e) {
    const idx = e.detail.value
    const host = mockHosts[idx]
    this.setData({
      'form.hostName': host.name,
      'form.hostId': host.id
    })
  },
  onCountChange(e) {
    this.setData({ 'form.visitorCount': e.detail.value })
  },
  onDateChange(e) {
    this.setData({ 'form.date': e.detail.value })
  },
  onSubmit() {
    const { form } = this.data
    if (!form.visitorName || !form.visitorPhone || !form.company || !form.purpose || !form.hostName || !form.date) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }
    this.setData({ submitting: true })
    setTimeout(() => {
      this.setData({ submitting: false })
      wx.showToast({ title: '预约提交成功', icon: 'success' })
      wx.redirectTo({ url: '/pages/visitor/records/records' })
    }, 1000)
  }
})
