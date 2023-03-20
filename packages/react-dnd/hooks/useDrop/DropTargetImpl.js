class DropTargetImpl {
  spec;
  monitor;
  connector;
  constructor(spec, monitor, connector) {
    this.spec = spec;
    this.monitor = monitor;
    this.connector = connector;
  }
  hover(monitor) {
    if (this.spec.hover) {
      this.spec.hover(monitor.getItem(), monitor);
    }
  }
}

export default DropTargetImpl;
