export function getImageUrl(file) {
    return new URL('../assets/' + file, import.meta.url).href;
}
