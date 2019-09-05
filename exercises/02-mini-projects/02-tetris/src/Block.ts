export class Block {
    private cells: Cell[]
    private color: string

    constructor(cells: Cell[], color: string) {
        this.cells = cells;
        this.color = color;
    }

    getCells(): Cell[] {
        return this.cells
    }

    getColor(): string {
        return this.color
    }
}

export class Cell {
    x: number
    y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}