export interface IMenuItemChild {
  id: string | number,
  text: string,
  key: string
}

export interface IMenuItem {
  id: string | number,
  text: string,
  key: string,
  children: IMenuItemChild[]
}

export interface IFooterItem {
  id: string | number,
  text: string,
  key: string,
  icon: string
}


export class initData {
  menuList: IMenuItem[] = [
    {
      id: 1, text: '发现音乐', key: 'music', children: [{ id: 1, text: '推荐', key: 'recommend' },
      { id: 2, text: '排行榜', key: 'rank' },
      { id: 3, text: '歌单', key: 'list' },
      { id: 4, text: '主播电台', key: 'broad' },
      { id: 5, text: '歌手', key: 'singer' },
      { id: 6, text: '新歌上架', key: 'newSong' },]
    },
    { id: 2, text: '我的音乐', key: 'mine', children: [] },
    { id: 3, text: '关注', key: 'attention', children: [] },
    { id: 4, text: '商城', key: 'shop', children: [] },
    { id: 5, text: '音乐人', key: 'creater', children: [] },
    { id: 6, text: '下载', key: 'download', children: [] },
  ]
  defaultKey: string[] = ['music']

  footerList: IFooterItem[] = [
    { id: 1, text: '音乐开放平台', key: 'plane', icon: '' },
    { id: 2, text: '云村交易所', key: 'cloud', icon: '' },
    { id: 3, text: 'Amped studio', key: 'amped', icon: '' },
    { id: 4, text: '用户认证', key: 'athentication', icon: '' },
    { id: 5, text: '独立音乐人', key: 'musician', icon: '' },
    { id: 6, text: '赞赏', key: 'donate', icon: '' },
  ]
  defaultFooterKey: string[] = []
  showChildrenList: IMenuItemChild[] = this.menuList[0].children
  attachDefaultKey: string[] = ['recommend']
}