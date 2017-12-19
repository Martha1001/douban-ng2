import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./types.component.scss']
})
export class TypesComponent implements OnInit {
  @Input() title: string
  @Input() type: string
  types: Array<object>
  movieType: Array<object> = [
    {
      title: '经典',
      href: 'movie/classic'
    },
    {
      title: '冷门佳片',
      href: 'movie/underrated'
    },
    {
      title: '豆瓣高分',
      href: 'movie/doubantop'
    },
    {
      title: '动作',
      href: 'movie/action'
    },
    {
      title: '喜剧',
      href: 'movie/comedy'
    },
    {
      title: '爱情',
      href: 'movie/love'
    },
    {
      title: '悬疑',
      href: 'movie/mystery'
    },
    {
      title: '恐怖',
      href: 'movie/horror'
    },
    {
      title: '科幻',
      href: 'movie/scifi'
    },
    {
      title: '治愈',
      href: 'movie/sweet'
    },
    {
      title: '文艺',
      href: 'movie/artfilm'
    },
    {
      title: '成长',
      href: 'movie/youth'
    },
    {
      title: '动画',
      href: 'movie/animation'
    },
    {
      title: '华语',
      href: 'movie/chinese'
    },
    {
      title: '欧美',
      href: 'movie/western'
    },
    {
      title: '韩国',
      href: 'movie/korean'
    },
    {
      title: '日本',
      href: 'movie/japanese'
    }
  ]

  setTypes(type) {
    switch (type) {
      case 'movie':
        this.types = this.movieType
        break
      // case 'book':
      //   thia.types = this.bookType
      //   break
      default:
        this.types = this.movieType
    }
  }

  constructor() { }

  ngOnInit() {
    this.setTypes(this.type)
  }

}
