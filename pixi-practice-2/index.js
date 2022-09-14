window.onload = function() {

  const log = console.log();
  const app = new PIXI.Application();
  document.body.appendChild(app.view);

  const datDot = new PIXI.Graphics();
  datDot.beginFill(0xFF0000);
  datDot.drawCircle(0, 0, 20);
  datDot.x = 100;
  datDot.y = 100;
  app.stage.addChild(datDot);

  let xVelocity = 1;
  let yVelocity = 1;
  let crayRadius = 20;

  app.ticker.add(() => {
    datDot.x += xVelocity;
    datDot.y += yVelocity;
    crayRadius += 1;
    datDot.drawCircle(0, 0, crayRadius);
  })


}