export function render(template, parameterValues) {
    return Object
            .keys(parameterValues)
            .reduce((template, parameterName) => {
                return template.replace(`{${parameterName}}`, parameterValues[parameterName])
            }, template);
}
