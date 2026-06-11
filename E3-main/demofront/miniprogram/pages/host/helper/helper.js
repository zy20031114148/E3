Page({
  data: {
    form: {
      visitorName: '', visitorPhone: '', company: '', purpose: '', date: ''
    },
    submitting: false
  },
  onFieldChange(e) {
    const field = e.currentTarget.dataset.field
    this.setData({ [`form.${field}`]: e.detail.value })
  },
  onDateChange(e) {
    this.setData({ 'form.date': e.detail.value })
  },
  onSubmit() {
    const { form } = this.data
    if (!form.visitorName || !form.visitorPhone || !form.company || !form.purpose || !form.date) {
      wx.showToast({ title: '请填写完整信息', icon: 'none' })
      return
    }
    this.setData({ submitting: true })
    setTimeout(() => {
      this.setData({ submitting: false })
      wx.showToast({ title: '代填预约成功', icon: 'success' })
    }, 800)
  }
})
