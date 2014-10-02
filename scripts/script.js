(function() {
  var Loading;

  Loading = (function() {
    function Loading() {
      this.r = 10;
      this.num = 3;
      this.padding = this.r * 1.7;
      this.fill = 'white';
      this.duration = 450;
      this._start();
    }

    Loading.prototype._start = function() {
      var c, height, i, s, width, _i, _ref, _results;
      width = this.r * 2 * this.num + (this.padding - this.r) * (this.num - 1);
      height = this.r * 2;
      s = Snap(width, height);
      _results = [];
      for (i = _i = 0, _ref = this.num; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        c = s.circle(this.r * (i + 1) + this.padding * i, this.r, 0).attr({
          fill: this.fill
        });
        _results.push(this._timer(c, i));
      }
      return _results;
    };

    Loading.prototype._timer = function(el, i) {
      return setTimeout((function(_this) {
        return function() {
          return setInterval(function() {
            return _this._animate(el);
          }, _this.duration * 2);
        };
      })(this), this.duration / this.num * i);
    };

    Loading.prototype._animate = function(el) {
      var toSmall;
      toSmall = (function(_this) {
        return function() {
          return el.animate({
            r: 0
          }, _this.duration, mina.linear);
        };
      })(this);
      return el.animate({
        r: this.r
      }, this.duration, mina.linear, toSmall);
    };

    return Loading;

  })();

  window.onload = function() {
    return setTimeout(function() {
      return new Loading;
    }, 1000);
  };

}).call(this);
