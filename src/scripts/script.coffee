class Loading
  constructor: ->
    @r = 10
    @num = 3 
    @padding = @r * 1.7
    @fill = 'white'
    @duration = 450

    @_start()

  _start: ->
    width = @r * 2 * @num + (@padding - @r) * (@num - 1)
    height = @r * 2

    s = Snap width, height

    for i in [0...@num]
      c = s
        .circle @r * (i + 1) + @padding * i, @r, 0
        .attr
          fill: @fill
      @_timer c, i

  _timer: (el, i) ->
    setTimeout =>
      setInterval =>
        @_animate el
      , @duration * 2
    , @duration / @num * i

  _animate: (el) ->
    toSmall = =>
      el.animate
        r: 0, @duration, mina.linear

    el.animate
      r: @r, @duration, mina.linear, toSmall

window.onload = ->
  setTimeout ->
    new Loading
  , 1000
