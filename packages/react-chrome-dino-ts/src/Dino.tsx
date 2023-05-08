import React, { ReactNode } from 'react'
import { DinoScript } from './DinoScript'
import { Resources } from './Resources'
import './Dino.css'

export interface DinoGameProps {
  /**
   * Replaces the default instructions.
   */
  instructions?: ReactNode
  /**
   * If true the instructions block will be hidden.
   */
  hideInstructions?: boolean
}

const DinoGame = React.forwardRef<HTMLDivElement, DinoGameProps>(function DinoGame(
  { instructions, hideInstructions },
  ref
) {
  const startDiv = React.useRef<HTMLDivElement>(null)
  const endDiv = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (!(startDiv.current && endDiv.current)) return

    if (!document.querySelector(`#${dinoScriptId}`)) {
      const dinoScriptContainer = document.createElement('script')
      dinoScriptContainer.id = dinoScriptId
      dinoScriptContainer.appendChild(document.createTextNode(DinoScript))
      startDiv.current.appendChild(dinoScriptContainer)
    }

    if (!document.querySelector(`#${runnerScriptId}`)) {
      const runnerScriptContainer = document.createElement('script')
      runnerScriptContainer.id = runnerScriptId
      runnerScriptContainer.appendChild(
        document.createTextNode(`new Runner('.interstitial-wrapper');`)
      )
      endDiv.current.appendChild(runnerScriptContainer)
    }
  }, [])

  return (
    <div ref={ref}>
      <div ref={startDiv} className="react-chrome-dino">
        <div className="interstitial-wrapper" id="main-frame-error">
          <Resources />
          <div ref={endDiv}></div>
        </div>

        {!hideInstructions && (
          <div className="interstitial-wrapper instructions">
            {instructions || (
              <p>
                Press the <span className="kbd">spacebar</span> to start the game and to jump.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
})

const dinoScriptId = 'dino-script-container'
const runnerScriptId = 'runner-script-container'

export default DinoGame
