import React from 'react';
import { shallow, render } from 'enzyme';
import sinon from 'sinon';

import TextInput from './index';

describe('<TextInput />', () => {
  it('renders text when text is added', () => {
    const wrapper = render(<TextInput />);
    expect(wrapper.text()).toContain('this is the test');
  });

  it('simulates click events', () => {
    const onButtonClick = sinon.spy();
    const wrapper = shallow(<TextInput onButtonClick={onButtonClick} />);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });


});

describe('A spy', function() {
  var foo,
    bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it('tracks that the spy was called', function() {
    expect(foo.setBar).toHaveBeenCalled();
  });
});
