const {Line} = require('./charts/Line')
const {Bar} = require('./charts/Bar')
const {Axis} = require('./charts/Axis')
const {Points} = require('./charts/Points')

function getContainer(item) {
  if (isDomSupported() && typeof item === 'string') {
    item = document.querySelector(item)
  }
  return item;
}

function isDomSupported() {
  return typeof window !== 'undefined' && typeof document !== 'undefined'
}

function chartFactory(type) {
  if (type === 'bar') return new Bar()
  if (type === 'line') return new Line()
  if (type === 'axis') return new Axis()
  if (type === 'points') return new Points()
  throw new Error(`Unknown Chart type: ${type}`);
}

class Chart {
  constructor(item, {type, data}) {
    const container = getContainer(item)
    const svg = this.initSvg()
    // svg.append(chartFactory('points').draw(data))
    svg.append(chartFactory(type).draw(data))
    // svg.append(chartFactory('axis').draw(data))
    container.append(svg)
  }

  initSvg() {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('width', '100%')
    svg.setAttribute('height', '100%')
    svg.setAttribute('viewBox', '0 0 100 100')
    svg.setAttribute('preserveAspectRatio', 'none')
    return svg
  }
}

export {Chart}