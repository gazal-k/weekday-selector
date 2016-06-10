/* jshint expr: true */
/* globals fixture */
describe('<weekday-selector> basic', function() {

  var selector;

  describe('when checking weekdays', function() {

    before(function(done) {
      selector = fixture('selector1');
      setTimeout(function() {
        done();
      });
    });

    before(function(done) {
      selector.querySelectorAll('paper-checkbox')[0].click();
      selector.querySelectorAll('paper-checkbox')[2].click();
      selector.querySelectorAll('paper-checkbox')[4].click();
      setTimeout(function() {
        done();
      }, 50);
    });

    it('should set array of indices to value property', function() {
      expect(selector.value).to.deep.equal([0, 2, 4]);
    });

  });

  describe('when checking weekdays after setting different start index', function() {

    before(function(done) {
      selector = fixture('selector1');
      selector.set('startIndex', 1);
      setTimeout(function() {
        done();
      });
    });

    before(function(done) {
      selector.querySelectorAll('paper-checkbox')[0].click();
      selector.querySelectorAll('paper-checkbox')[2].click();
      selector.querySelectorAll('paper-checkbox')[4].click();
      setTimeout(function() {
        done();
      }, 50);
    });

    it('should set array of indices with different start index to value property', function() {
      expect(selector.value).to.deep.equal([1, 3, 5]);
    });

  });

  describe('when setting initial value', function() {

    before(function(done) {
      selector = fixture('selector1');
      selector.set('value', [0, 2, 4]);
      setTimeout(function() {
        done();
      });
    });

    it('should set corresponding checkboxes', function() {
      expect(selector._weekDays[0].checked).to.be['true'];
      expect(selector._weekDays[2].checked).to.be['true'];
      expect(selector._weekDays[4].checked).to.be['true'];
    });
  });

  describe('when setting initial value and different start index', function() {

    before(function(done) {
      selector = fixture('selector1');
      selector.set('startIndex', 1);
      selector.set('value', [1, 3, 5]);
      setTimeout(function() {
        done();
      });
    });

    it('should set corresponding checkboxes', function() {
      expect(selector._weekDays[0].checked).to.be['true'];
      expect(selector._weekDays[2].checked).to.be['true'];
      expect(selector._weekDays[4].checked).to.be['true'];
    });
  });

});
