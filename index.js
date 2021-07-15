function timer() {
  var speed = 500,
    counter = 1,
    start = new Date().getTime();

  function instance() {
    var ideal = counter * speed,
      real = new Date().getTime() - start;

    counter++;

    var diff = real - ideal;
    // form.diff.value = diff;
    console.log('ideal', ideal);
    console.log('real', real);
    console.log('diff', diff);
    console.log('speed', speed - diff);
    setTimeout(function() {
      instance();
    }, speed - diff); // 通过系统时间进行修复
    for (let x = 1, i = 0; i < 400000000; i++) {
      x *= i + 1;
    }
  }

  setTimeout(function() {
    instance();
  }, speed);
}
timer();
