class ChartBase {
  constructor() {
    this.width  = 100
    this.height = 100
    this.padding = 0
    this.chartWidth = this.width - this.padding * 2;
    this.chartHeight = this.height - this.padding * 2;
    if (this.draw === ChartBase.prototype.drawData) {
      throw new Error('Cannot instantiate abstract class with abstract drawData methods');
    }
  }
  draw() {
    throw new Error('abstract Method drawData must be implemented');
  }

  /**
   * Mapping data to coordinates
   * @param {number[]} data
   * @returns {Object<number, number>[]}
   */
  dataToPoints(data) {
    const points = []
    const maxValue = Math.max(...data)
    const step = this.chartHeight / maxValue
    const xSegment = this.chartWidth / (data.length - 1)
    for (let i = 0; i <= data.length - 1; i++) {
      points.push({x: this.padding + i * xSegment, y: this.height - this.padding - data[i] * step})
    }
    return points
  }
}

export {ChartBase}