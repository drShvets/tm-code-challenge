export const findComponentByAriaAttr = (wrapper, component, ariaAttr) => {
  const [_component] = wrapper
    .findAllComponents(component)
    .filter((c) => c.html().includes(`${ariaAttr}`));

  return _component;
};
