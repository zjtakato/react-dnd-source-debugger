function registerTarget(type, dragSource, manager) {
  const registry = manager.getRegistry();
  const handleId = registry.addTarget(type, dragSource);
  return handleId;
}

export default registerTarget;
