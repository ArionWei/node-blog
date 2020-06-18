const getBlogList = (author, keyword) => {
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: 1592319483908,
      author: 'David'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: 1592319586705,
      author: 'David'
    }
  ]
}

module.exports = { getBlogList };
