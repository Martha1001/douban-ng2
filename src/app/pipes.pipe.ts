import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subStr'
})
export class subStrPipe implements PipeTransform {
  transform(value: string, num: number): string {
    let newVal = value.replace(/<.*?>/g, '')
    return newVal.slice(0, num).concat('...')
  }
}

@Pipe({
  name: 'toArray'
})
export class toArrayPipe implements PipeTransform {
  transform(value: string, sel: string): Array<string> {
    return value.split(sel)
  }
}

@Pipe({
  name: 'arrToArray'
})
export class arrToArrayPipe implements PipeTransform {
  transform(value: Array<object>): Array<string> {
    let newStr: Array<string> = []
    value.map(x => {
      newStr.push(x['name'])
    })
    return newStr
  }
}
