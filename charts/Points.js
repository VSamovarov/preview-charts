const {ChartBase} = require('./ChartBase')
const POINT_RADIUS = '3'
  class Points extends ChartBase {
  draw(data) {
    const pointGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    const pointCoordinates = this.dataToPoints(data)
    for (let i = 0; i < pointCoordinates.length; i++) {
      const point = document.createElementNS('http://www.w3.org/2000/svg', 'circle')
      point.setAttribute('cx', pointCoordinates[i].x)
      point.setAttribute('cy', pointCoordinates[i].y)
      point.setAttribute('r', POINT_RADIUS)
      pointGroup.append(point)
    }
    return pointGroup
  }
}

export {Points}