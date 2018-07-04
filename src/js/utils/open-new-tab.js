export function openNewTab(url){
    chrome.tabs.create({url: url});
}