class Loading
  constructor: ->
    @maxR = 10 
    @minR = 0
    @num = 3
    @padding = @maxR * 1.7
    @fill = 'white'
    @duration = 450
    @interval = @duration
    @icons = []

    @_initialize()

  start: ->
    setInterval =>
      @_timer c, i for c, i in @icons
    , @duration * 2 + @interval

  _initialize: ->
    width = @maxR * 2 * @num + (@padding - @maxR) * (@num - 1)
    height = @maxR * 2
    @s = Snap width, height
    @icons.push @_circle i for i in [0...@num]

  _circle: (i) ->
    @s.circle @maxR * (i + 1) + @padding * i, @maxR, @minR
      .attr
        fill: @fill

  _timer: (el, i) ->
    setTimeout =>
      @_animate el
    , @duration / @num * i

  _animate: (el) ->
    toSmall = =>
      el.animate
        r: @minR, @duration, mina.linear

    el.animate
      r: @maxR, @duration, mina.linear, toSmall

window.onload = ->
  loading = new Loading
  loading.start()
