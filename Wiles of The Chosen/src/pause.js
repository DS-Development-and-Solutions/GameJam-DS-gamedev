import k from "./kaboom.js";
function pause(game){



	let curTween = null

	onKeyPress("p", () => {
		game.paused = !game.paused
		if (curTween) curTween.cancel()
		curTween = tween(
			pauseMenu.pos,
			game.paused ? center() : center().add(0, 700),
			1,
			(p) => pauseMenu.pos = p,
			easings.easeOutElastic,
		)
		if (game.paused) {
            game.paused = true;
			pauseMenu.hidden = false
			pauseMenu.paused = false
            
		} else {
			curTween.onEnd(() => {
				pauseMenu.hidden = true
				pauseMenu.paused = true
			})
		}
	})

	const pauseMenu = add([
		
        text("Paused"),
        pos(width() / 2, height() / 2),
      
	])

	pauseMenu.hidden = true
	pauseMenu.paused = true

}
export default pause;
