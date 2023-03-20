function registerSource(type, dragSource, manager) {
  const registry = manager.getRegistry();
  const handleId = registry.addSource(type, dragSource);
  return handleId;
}

export default registerSource;
