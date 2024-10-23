import { ReactP5Wrapper, Sketch, SketchProps } from '@p5-wrapper/react'
import { Font, Graphics } from 'p5'

// @ts-expect-error no declaration
import safiro from '@joyact/fonts/safiro/safiro-medium.ttf'

export interface ExportableProps
  extends SketchProps {
  format: { width: number, height: number }
  showGrid: boolean
  gridColumns: number
  gridGutter: number
}

const sketch: Sketch<ExportableProps> = (p5) => {
  let font: Font
  let scaleRatio = 1
  const exportRatio = 4
  let buffer: Graphics
  let format = { width: 1754, height: 2480 }

  p5.updateWithProps = (props) => {
    format = props.format

    const w = format.width / exportRatio
    const h = format.height / exportRatio

    buffer = p5.createGraphics(w, h)
    p5.createCanvas(w, h)
  }

  p5.preload = () => {
    font = p5.loadFont(safiro)
    console.log(font)
  }

  p5.setup = () => {
    const w = format.width / exportRatio
    const h = format.height / exportRatio

    buffer.width = w
    buffer.height = h
    p5.resizeCanvas(w, h)

    // Adjust according to screens pixel density.
    // exportRatio /= p5.pixelDensity()
  }

  p5.draw = () => {
    p5.background(220)

    // Clear buffer each frame
    buffer.clear()
    // Transform (scale) all the drawings
    buffer.scale(scaleRatio)
    // Make all the drawing to the buffer instead of canvas
    buffer.circle(p5.width / 2, p5.height / 2, 100)

    // Draw buffer to canvas
    p5.image(buffer, 0, 0)
  }

  p5.keyReleased = () => {
    if (p5.key == 'e' || p5.key == 'E') {
      exportHighResolution()
    }
  }

  const exportHighResolution = () => {
    scaleRatio = exportRatio

    // Re-create buffer with exportRatio and re-draw
    buffer = p5.createGraphics(scaleRatio * p5.width, scaleRatio * p5.height)
    p5.draw()

    // Get timestamp to name the ouput file
    const timestamp = new Date().getTime()

    // Save as JPG
    p5.save(buffer, p5.str(timestamp), 'jpg')

    // Reset scaleRation back to 1, re-create buffer, re-draw
    scaleRatio = 1
    buffer = p5.createGraphics(p5.width, p5.height)
    p5.draw()
  }
}

export const Exportable = (props: ExportableProps) => {
  return (
    <ReactP5Wrapper
      sketch={sketch}
      {...props}
    />
  )
}
