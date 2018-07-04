export function render(template, parameterValues) {
    return Object
            .keys(parameterValues)
            .reduce((template, parameterName) => {
                debugger;
                return template.replace(`{${parameterName}}`, parameterValues[parameterName])
            }, template);
}
