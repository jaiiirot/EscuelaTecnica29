function quellueva() {
    var image = document.getElementById('background');
    image.onload = function () {
        var engine = new RainyDay({
            image: this,
            blur: 10,
            opacity: 1,
            gravityAngle: Math.PI / 8,
            gravityAngleVariance: 0.1
        });

        engine.gravity = engine.GRAVITY_NON_LINEAR;
        engine.trail = engine.TRAIL_SMUDGE; //engine.trail = engine.TRAIL_DROPS

        engine.rain([
                           [0, 3, 3],
                           [2, 8, 1]
                       ], 40);
    };
    image.src = 'images/Fondo_03.jpg';

}