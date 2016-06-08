import React from 'react';
import { mount } from 'enzyme';
import Range from '../index';
import { expect } from 'chai';
import sinon from 'sinon';
const { describe, it } = global;

/*
onMouseMove
*/

describe('Range', () => {
  it('should handle the click event', () => {
    const clickMe = sinon.stub();
    // Here we do a JSDOM render. So, that's why we need to
    // wrap this with a div.
    const wrapper = mount(
      <div>
        <Range onClick={ clickMe } />
      </div>
    );

    wrapper.find('input').simulate('click');
    expect(clickMe.callCount).to.be.equal(1);
  });

  it('should handle the change event', () => {
    const changeMe = sinon.stub();
    // Here we do a JSDOM render. So, that's why we need to
    // wrap this with a div.
    const wrapper = mount(
      <div>
        <Range onChange={ changeMe } />
      </div>
    );

    wrapper.find('input').simulate('change');
    expect(changeMe.callCount).to.be.equal(1);
  });

  it('should handle the keydown event', () => {
    const keyDownMe = sinon.stub();
    // Here we do a JSDOM render. So, that's why we need to
    // wrap this with a div.
    const wrapper = mount(
      <div>
        <Range onKeyDown={ keyDownMe } />
      </div>
    );

    wrapper.find('input').simulate('keydown');
    expect(keyDownMe.callCount).to.be.equal(1);
  });

  it('should handle the onmousemove event', () => {
    const mouseMoveMe = sinon.stub();
    // Here we do a JSDOM render. So, that's why we need to
    // wrap this with a div.
    const wrapper = mount(
      <div>
        <Range onMouseMove={ mouseMoveMe } />
      </div>
    );

    wrapper.find('input').simulate('mousemove');
    expect(mouseMoveMe.callCount).to.be.equal(1);
  });
});
