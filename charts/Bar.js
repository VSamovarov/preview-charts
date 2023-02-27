const {ChartBase} = require('./ChartBase')

class Bar extends ChartBase {
  draw(data) {
    console.log('DerivedClass abstractMethod called');
  }
}

export {Bar}