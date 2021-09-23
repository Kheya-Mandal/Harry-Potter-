class String {
  constructor(body) {
    var options = {
      bodyA: body,
      pointB: { x: 100, y: 200 },
      length: 50,
      stiffness: 0.4,
    };

    this.string = Constraint.create(options);
    World.add(world, this.string);
  }
  fly() {
    this.string.bodyA = null;
  }
}
