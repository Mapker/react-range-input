# Range Input Component

A react component that makes <input type='range' /> compatible across all browsers with an optional material design style (cross-browser as well).  
Demo: [https://Mapker.github.io/react-range-input](https://Mapker.github.io/react-range-input)

Install via npm:  
`npm install range-input`  

# Why?  
It is a [known issue](https://github.com/facebook/react/issues/554) the onChange event does not work in IE. This seeks to be a simple drop in replacement for any <input type='range' /> and still have the onChange event fire in IE.

# Usage  

```javascript
import Range from 'react-range-input';

<Range
  className='material'
  onChange={this.handleOnChange}
  onClick={this.handleOnClick}
  onKeyDown={this.handleKeyDown}
  onMouseMove={this.handleOnMouseMove}
  value={20}
  min={0}
  max={100} />
```
