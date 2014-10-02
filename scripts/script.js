(function() {
  var Loading;

  Loading = (function() {
    function Loading() {
      this.maxR = 10;
      this.minR = 0;
      this.num = 3;
      this.padding = this.maxR * 1.7;
      this.fill = 'white';
      this.duration = 450;
      this.interval = this.duration;
      this.icons = [];
      this._initialize();
    }

    Loading.prototype.start = function() {
      return setInterval((function(_this) {
        return function() {
          var c, i, _i, _len, _ref, _results;
          _ref = _this.icons;
          _results = [];
          for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
            c = _ref[i];
            _results.push(_this._timer(c, i));
          }
          return _results;
        };
      })(this), this.duration * 2 + this.interval);
    };

    Loading.prototype._initialize = function() {
      var height, i, width, _i, _ref, _results;
      width = this.maxR * 2 * this.num + (this.padding - this.maxR) * (this.num - 1);
      height = this.maxR * 2;
      this.s = Snap(width, height);
      _results = [];
      for (i = _i = 0, _ref = this.num; 0 <= _ref ? _i < _ref : _i > _ref; i = 0 <= _ref ? ++_i : --_i) {
        _results.push(this.icons.push(this._circle(i)));
      }
      return _results;
    };

    Loading.prototype._circle = function(i) {
      return this.s.circle(this.maxR * (i + 1) + this.padding * i, this.maxR, this.minR).attr({
        fill: this.fill
      });
    };

    Loading.prototype._timer = function(el, i) {
      return setTimeout((function(_this) {
        return function() {
          return _this._animate(el);
        };
      })(this), this.duration / this.num * i);
    };

    Loading.prototype._animate = function(el) {
      var toSmall;
      toSmall = (function(_this) {
        return function() {
          return el.animate({
            r: _this.minR
          }, _this.duration, mina.linear);
        };
      })(this);
      return el.animate({
        r: this.maxR
      }, this.duration, mina.linear, toSmall);
    };

    return Loading;

  })();

  window.onload = function() {
    var loading;
    loading = new Loading;
    return loading.start();
  };

}).call(this);
