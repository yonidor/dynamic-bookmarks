export function extract_parameters(template) {
    let parameters = [];

    let regex = /{(\w+)}/g
    let match;
    while(match = regex.exec(template))
        parameters.push(match[1])

    return parameters;
}
