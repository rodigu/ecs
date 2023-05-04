var sketch = function (p) {
    var x = 100;
    var y = 100;
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
    };
    p.draw = function () {
        p.background(0);
        p.fill(255);
        p.rect(x, y, 50, 50);
    };
};
new p5(sketch);
//# sourceMappingURL=build.js.map