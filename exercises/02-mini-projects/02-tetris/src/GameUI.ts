import { Game } from './Game'

const drawText = (
    context: CanvasRenderingContext2D,
    text: string,
    color: string,
    weight: string,
    alignment: CanvasTextAlign,
    size: number,
    left: number,
    top: number
) => {
    context.font = weight + ' ' + size + 'px "Jura", sans-serif';
    context.textAlign = alignment;
    context.fillStyle = color;
    context.fillText(text, left, top);
}

export const ColorWithAlpha = (
    color: string,
    alpha: number
) => {
    var retColor = 'rgba' + color.substring(3, color.length - 1);
    retColor += ',' + alpha + ')';
    return retColor;
}

export class GameUI {
    private canvas: HTMLCanvasElement;
    private game: Game

    constructor(canvas: HTMLCanvasElement, game: Game) {
        this.canvas = canvas;
        this.game = game;
    }

    private drawBlocks(context: CanvasRenderingContext2D) {
    }

    private drawUpcomingA(context: CanvasRenderingContext2D) {
    }

    private drawUpcomingB(context: CanvasRenderingContext2D) {
    }

    private drawUpcomingC(context: CanvasRenderingContext2D) {
    }

    private drawGameOver(context: CanvasRenderingContext2D) {
        if (this.game.isGameOver()) {
            drawText(context, "GAME OVER", 'rgb(255,255,255)', '500','center', uDrawSize, this.W / 2, this.H / 4);
        }
    }
}