export function resolveBookmark(template, parameterValues){
    return template + "/" + Object.values(parameterValues).join("/")
}