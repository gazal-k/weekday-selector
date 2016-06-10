Polymer({
  is: 'weekday-selector',

  properties: {

    /**
     * selected week day indices
     */
    value: {
      type: Array,
      value: [],
      notify: true
    },

    /**
     * set this if the week indices should start with a different value
     */
    startIndex: {
      type: Number,
      value: 0
    },

    _weekDays: Array,

  },

  observers: ['_valueChange(value, startIndex)'],

  _valueChange: function(value, startIndex) {
    var weekDays = [];
    value = value || [];
    var i;
    for (i = startIndex; i < startIndex + 7; i += 1) {
      weekDays.push({
        i: i,
        checked: (value.indexOf(i) !== -1),
        label: moment.weekdays(i - startIndex)
      });
    }
    this.set('_weekDays', weekDays);
  },

  _setValue: function() {
    var me = this;
    me.debounce('setValue', function() {
      var i;
      var value = [];
      for (i = 0; i < me._weekDays.length; i += 1) {
        if (me._weekDays[i].checked) {
          value.push(me._weekDays[i].i);
        }
      }
      console.log(value);
      me.set('value', value);
    }, 50);
  }
});
