import { ReactP5Wrapper, Sketch, SketchProps } from '@p5-wrapper/react'
import { Font } from 'p5'

// @ts-expect-error no declaration
import safiro from '@joyact/fonts/safiro/safiro-medium.ttf'

export interface PosterSampleProps
  extends SketchProps {
  width: number
  height: number
  showGrid: boolean
  gridColumns: number
  gridGutter: number
}

const sketch: Sketch<PosterSampleProps> = (p5) => {
  let font: Font
  let width = 0
  let height = 0
  let gridColumns = 6
  let gridGutter = 24
  let showGrid = false

  p5.updateWithProps = (props) => {
    width = props.width
    height = props.height
    p5.resizeCanvas(width, height)

    showGrid = props.showGrid
    gridColumns = props.gridColumns
    gridGutter = props.gridGutter

    console.log('props', props)
  }

  p5.preload = () => {
    font = p5.loadFont(safiro)
  }

  p5.setup = () => {
    p5.createCanvas(width, height)
  }

  p5.draw = () => {
    p5.background('#fffcf4')
    p5.textFont(font)
    p5.textSize(100)
    p5.fill(0, 0, 0)
    p5.textAlign(p5.CENTER, p5.CENTER)
    p5.text('joyact', width / 2, height / 2)

    if (showGrid) {
      for (let i = 0; i < gridColumns; i++) {
        const col = (width - gridGutter) / gridColumns
        const x = col * i + gridGutter
        const w = col - gridGutter
        p5.fill(255, 0, 0, 60)
        p5.noStroke()
        p5.rect(x, 0, w, height)
      }
    }
  }
}

export const PosterSample = ({ width, height, showGrid = false, gridColumns = 6, gridGutter = 12 }: PosterSampleProps) => {
  return (
    <ReactP5Wrapper
      sketch={sketch}
      width={width}
      height={height}
      gridColumns={gridColumns}
      gridGutter={gridGutter}
      showGrid={showGrid}
    />
  )
}
