const {ChartBase} = require('./ChartBase')

class Axis extends ChartBase {
  draw(data) {
    const axis = document.createElementNS('http://www.w3.org/2000/svg', 'g')
    axis.append(this.axisX())
    axis.append(this.axisY())
    return  axis
  }

  axisX() {
    const axis = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    axis.setAttribute('y1', this.height - this.padding)
    axis.setAttribute('x2', this.width - this.padding)
    axis.setAttribute('y2', this.height - this.padding)
    axis.setAttribute('stroke', 'black')
    axis.setAttribute('stroke-width', '1')
    return axis
  }

  axisY() {
    const axis = document.createElementNS("http://www.w3.org/2000/svg", "line")
    axis.setAttribute("x1", this.padding)
    axis.setAttribute("y1", this.padding)
    axis.setAttribute("x2", this.padding)
    axis.setAttribute("y2", this.height - this.padding)
    axis.setAttribute("stroke", "black")
    axis.setAttribute("stroke-width", "1")
    return axis
  }
}

export {Axis}