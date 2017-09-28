
class Test {
  constructor() {
    console.log('%c Constructing ES6 test object', 'color: #669'); // eslint-disable-line no-console
    this.isOk = true;
  }

  test() {
    return false;
  }

  go() {
    console.log('%c Testing ...', 'color: #669'); // eslint-disable-line no-console
    if (this.isOk) {
      console.log('%c Test is ok! ', 'background: #9c3'); // eslint-disable-line no-console
    } else {
      console.error('Test failed'); // eslint-disable-line no-console
    }
  }
}

export default Test;
