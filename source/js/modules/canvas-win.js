export default ()=> {
  // размеры самолета 113x113
  // размеры моржа 271x212
  // размеры льдины 408x167
  // размеры правой снежинки 94x111
  // размеры левой снежинки 119x141
  // размеры капельки 586x324
  // размеры левого треугольника 50x159
  // размеры правого треугольника 38x101

  let btnPositive = document.querySelector(`.btn--positive`);
  let canvas = document.querySelector(`.canvas-win`);
  let ctx = canvas.getContext(`2d`);

  let ww = window.innerWidth;
  let wh = window.innerHeight;

  canvas.width = ww;
  canvas.height = wh;

  ctx.fillStyle = `#5f458c`;
  ctx.fillRect(0, 0, ww, wh);

  let img = new Image();
  img.src = `../../img/win-primary-images/airplane3.png`;

  img.addEventListener(`load`, function () {
    ctx.globalAlpha = 0;
    ctx.drawImage(img, 200, 200, 113, 113);
  });

  function draw(x) {
    ctx.clearRect(0, 0, ww, wh);

    ctx.globalAlpha = 1;
    rotateCtx(Math.sin(x / 10), 157, 157);
    ctx.translate(x / 10, 0);
    ctx.drawImage(img, 200, 200, 113, 113);

  }

  function rotateCtx(angle, cx, cy) {
    ctx.translate(cx, cy);
    ctx.rotate((Math.PI / 180) * angle);
    ctx.translate(-cx, -cy);
  }

  let x = 0;
  function tick() {
    x += 0.5;
    draw(x);
  }

  btnPositive.addEventListener(`click`, function () {
    let timer = setInterval(()=> {
      if (x > 100) {
        clearInterval(timer);
      }
      requestAnimationFrame(tick);
    }, 1000 / 60);
  });
};
