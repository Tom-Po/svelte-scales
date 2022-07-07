<script>
  import { onMount } from 'svelte'

  export let isRinging = false
  let totalProgress = 0
  let sine
  const linear = function linear(p) {
    return p
  }

  function build(amplitude) {
    const startPoint = [0, 200]
    const endPoint = [200, 200]

    const originX = 0
    const originY = 200

    const width = 200
    const pointSpacing = 0.2
    const angularFrequency = 0.03 + amplitude / 10000
    const phaseAngle = 90
    const origin = {
      x: originX,
      y: originY,
    }
    const points = []
    points.push(startPoint)
    let x
    let
      y
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < width / pointSpacing; i++) {
      x = i * pointSpacing + origin.x
      y = Math.sin(angularFrequency * (i + phaseAngle)) * amplitude + origin.y
      points.push([x, y])
    }
    points.push(endPoint)
    if (sine) {
      sine.setAttribute('points', points.join(' '))
    }
  }

  const handleAnimation = function(options) {
    const start = new Date()
    const iT = setInterval(() => {
      const timePassed = ((new Date()).getTime() - start.getTime())
      let progress = timePassed / options.duration
      if (progress > 1) progress = 1
      totalProgress = progress
      const delta = options.delta(progress)
      options.output(delta)
      if (progress === 1) {
        clearInterval(iT)
        totalProgress = 0
      }
    }, options.delay)
  }

  function animate() {
    if ((totalProgress > 0 && totalProgress < 1) || isRinging) return
    const range = 15
    const FPS = 120
    const duration = 1000
    handleAnimation(
      {
        delay: 1000 / FPS,
        duration,
        delta: linear,
        output(delta) {
          let amplitude
          if (delta <= 0.5) {
            amplitude = range * delta
          } else {
            amplitude = 15 - range * delta
          }
          build(amplitude)
          if (totalProgress === 1) {
            animate()
          }
        },
      },
    )
  }

  onMount(() => {
    animate()
  })
</script>

<div class='sineWave' onClick={() => animate()}>
  <svg class='svg' width='25' height='200'>
    <polyline bind:this={sine} stroke={isRinging ? 'coral' : '#E5DCD6'} stroke-width={2} fill='transparent' />
  </svg>
</div>

<style>
  .sineWave {
    display: flex;
    align-items: center;
    background-color: transparent;
    transition: background-color 200ms ease-in-out;
  }

  .svg > * {
    transform: rotate(-90deg) translateX(14px);
    transform-origin: bottom;
    transition: color 200ms ease;
    cursor: pointer;
  }

</style>
