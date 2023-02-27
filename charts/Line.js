const {ChartBase} = require('./ChartBase')

/**
 * Draw a line through points using bezier curves
 * @param {Object<number, number>[]} points
 * @returns {SVGPathElement}
 */
function bezierCurve(points) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  let d = ''
  for (let i = 0; i < points.length; i++) {
    if (i === 0) {
      d += `M ${points[i].x} ${points[i].y}`
    } else {
      const p = points[i] // current point
      const prev = points[i - 1] // previous point
      const distance = p.x - prev.x // distance between current and previous points
      const c1 = { x: prev.x + distance / 3, y: prev.y } // start point of bezier curve
      const c2 = { x: p.x - distance / 3, y: p.y } // end point of bezier curve
      d += ` C ${c1.x} ${c1.y}, ${c2.x} ${c2.y}, ${p.x} ${p.y}` // add bezier curve to path
    }
  }
  path.setAttribute('d', d)
  return path
}

/**
 * Draw a line through points
 * @param  {Object<number, number>[]} points
 * @returns {SVGPathElement}
 */
function brokenLine (points) {
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
  let d = ''
  for (let i = 0; i < points.length; i++) {
    if (i === 0) {
      d += "M" + points[i].x  + "," + points[i].y
    } else {
      d += "L" + points[i].x  + "," + points[i].y
    }
  }
  path.setAttribute('d', d)
  return path
}

class Line extends ChartBase {
  draw(data) {
    const points = this.dataToPoints(data)
    return bezierCurve(points)
  }
}

export {Line}