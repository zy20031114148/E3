Page({
  data: {
    list: [
      { id: 1, title: '访客进入须知', summary: '来访人员请提前10分钟到达前台登记，携带有效身份证件...', createTime: '2026-06-01' },
      { id: 2, title: '园区停车管理通知', summary: '来访车辆请从南门进入，地下车库B区可供访客使用...', createTime: '2026-05-28' },
      { id: 3, title: '节假日来访安排', summary: '端午节期间（6月22日-24日）来访需提前一天预约...', createTime: '2026-05-20' }
    ]
  },
  onDetail(e) {
    const item = e.currentTarget.dataset.item
    wx.showModal({
      title: item.title,
      content: item.summary + '\n\n（对接后端后显示完整内容）',
      confirmText: '关闭'
    })
  }
})
