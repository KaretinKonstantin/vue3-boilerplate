import { BreadcrumbItem } from '@/types/types'
import { RouteRecordRaw } from 'vue-router'

export const debounce = (callback: any, ms: number) => {
  let timeout: any
  return function (...args: any) {
    clearTimeout(timeout)
    timeout = setTimeout(() => callback(...args), ms)
  }
}

export const throttle = (callback: (...args: any[]) => void, ms: number) => {
  let timer: any = null

  return function wrapper(...args: any[]) {
    if (timer) return
    timer = setTimeout(() => {
      callback(args)
      clearTimeout(timer)
      timer = null
    }, ms)
  }
}

export const createBreadcrumbs = (
  items: RouteRecordRaw[] | BreadcrumbItem[],
  router = true,
): BreadcrumbItem[] => {
  if (!router) return items as BreadcrumbItem[]

  const routeItems = (items as unknown as RouteRecordRaw[])
    .slice(1, items.length)
    .filter(item => item.meta?.pageTitle)
  return routeItems.map((item, index) => {
    return {
      label: item.meta?.pageTitle as string,
      url: index + 1 === routeItems.length ? '' : item.path,
    }
  })
}

export const getVideoFromUrl = (link: string) => {
  let _link = ''
  const isReady = !link.includes('iframe') && link.includes('embed')

  const computeYoutubeLink = (link: string) => {
    if (link.includes('youtu.be')) {
      return link.replace('youtu.be', 'youtube.com/embed')
    } else {
      return link.replace('watch?v=', 'embed/')
    }
  }

  const computeRutubeLink = (link: string) => {
    return link.replace('video', 'embed')
  }

  const computeVimeoLink = (link: string) => {
    const [id] = link.match(/([0-9]+)/) as any
    return `https://player.vimeo.com/video/${id}`
  }

  const computeVkVideoLink = (link: string) => {
    const regex = /-?(\d+)/g
    const matches = link.match(regex)
    if (matches) {
      const [oid, id] = matches.map(match => parseInt(match, 10))

      if (link.includes('vk.com')) {
        return `https://vk.com/video_ext.php?oid=${oid}&id=${id}`
      } else {
        return `https://vkvideo.ru/video_ext.php?oid=${oid}&id=${id}`
      }
    }
  }

  if (isReady) {
    return link
  } else if (link.includes('iframe')) {
    const match = link.match(/<iframe[^>]*src="([^"]+)"[^>]*>/)
    if (match && match[1]) {
      _link = match[1]
    }
  } else {
    if (link.includes('youtube.com') || link.includes('youtu.be')) {
      _link = computeYoutubeLink(link)
    } else if (link.includes('rutube.ru')) {
      _link = computeRutubeLink(link)
    } else if (link.includes('vkvideo.ru') || link.includes('vk.com')) {
      _link = computeVkVideoLink(link) ?? ''
    } else if (link.includes('vimeo.com')) {
      _link = computeVimeoLink(link)
    }
  }

  return _link.includes('autoplay')
    ? _link.replace(/autoplay=[01]/g, '')
    : _link
}

export const getAllNodesFromElement = (element: Node): Node[] => {
  const nodes = []
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_ALL)
  while (walker.nextNode()) {
    nodes.push(walker.currentNode)
  }

  return nodes
}

export const getElementEdges = (element: HTMLElement) => {
  const width = element?.offsetWidth ?? 0
  const height = element?.offsetHeight ?? 0
  const x = element?.getBoundingClientRect()?.x ?? 0
  const y = element?.getBoundingClientRect()?.y ?? 0

  return {
    top: y,
    bottom: height + y,
    left: x,
    right: width + x,
  }
}

export const getElementCoordsRelativelyContainer = (element: HTMLElement) => {
  const elementEdges = getElementEdges(element)
  const windowOffset = {
    x: window.scrollX,
    y: window.scrollY,
  }

  const result = {
    x: elementEdges.left + windowOffset.x,
    y: elementEdges.top + windowOffset.y,
  }

  return result
}

export const getMonthLabel = (monthIndex: number) => {
  if (monthIndex === 0) return 'Января'
  if (monthIndex === 1) return 'Февраля'
  if (monthIndex === 2) return 'Марта'
  if (monthIndex === 3) return 'Апреля'
  if (monthIndex === 4) return 'Мая'
  if (monthIndex === 5) return 'Июня'
  if (monthIndex === 6) return 'Июля'
  if (monthIndex === 7) return 'Августа'
  if (monthIndex === 8) return 'Сентября'
  if (monthIndex === 9) return 'Октября'
  if (monthIndex === 10) return 'Ноября'
  if (monthIndex === 11) return 'Декабря'
}

export const getNoun = (number: number, words: string[]) => {
  let n = Math.abs(number)
  n %= 100
  if (n >= 5 && n <= 20) {
    return words[2]
  }
  n %= 10
  if (n === 1) {
    return words[0]
  }
  if (n >= 2 && n <= 4) {
    return words[1]
  }
  return words[2]
}
