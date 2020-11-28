export const findByTestAttribute = (component, attribute) => {
    return component.find(`[data-test='${attribute}']`);
}
