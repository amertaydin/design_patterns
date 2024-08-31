interface Tool {
  onMouseDown(): void;
  onMouseUp(): void;
}

class Canvas {
  constructor(private tool: Tool) {}

  setTool(tool: Tool) {
    this.tool = tool;
  }

  onMouseDown(): void {
    this.tool.onMouseDown();
  }

  onMouseUp(): void {
    this.tool.onMouseUp();
  }
}

class SelectionTool implements Tool {
  onMouseDown(): void {}

  onMouseUp(): void {}
}

class BrushTool implements Tool {
  onMouseDown(): void {}

  onMouseUp(): void {}
}

class EraserTool implements Tool {
  onMouseDown(): void {}

  onMouseUp(): void {}
}

let canvas = new Canvas(new SelectionTool());
canvas.onMouseDown();
canvas.onMouseUp();

canvas.setTool(new BrushTool());
canvas.onMouseUp();
canvas.onMouseDown();
