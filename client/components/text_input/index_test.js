import React from 'react';
import { mount, shallow, render } from 'enzyme';
import sinon from 'sinon';

import TextInput from './index';

describe('<TextInput />', () => {
  it('renders text when text is added', () => {
    const wrapper = render(<TextInput />);
    expect(wrapper.text()).toContain("a string");
  });

  it('should have green text under 10 chars and red otherwise', () => {
    let e = 0

    const wrapper = render(<TextInput />);
    expect(wrapper.text.length).toBeGreaterThan(e);
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
