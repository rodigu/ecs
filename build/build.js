var sketch = (p) => {
    const x = 100;
    const y = 100;
    p.preload = () => { };
    p.setup = () => {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = () => {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
    };
};
new p5(sketch);
//# sourceMappingURL=build.js.map