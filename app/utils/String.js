

export default class String {

    static capitalize(string) {
        return string?.charAt(0).toUpperCase() + string.slice(1) || '';
    }

    static toCamelCase(string) {
        return string.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); });
    }

    static toUpperCamelCase(string) {
        return string.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
            return index === 0 ? word.toUpperCase() : word.toUpperCase();
        }).replace(/\s+/g, '');
    }

    static toKebabCase(string) {
        return string.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }

    static toSnakeCase(string) {
        return string.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toLowerCase();
    }

    static toPascalCase(string) {
        return string.replace(/(\w)(\w*)/g,
            function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); });
    }

    static toUpperCase(string) {
        return string.toUpperCase();
    }

    static replaceVariableName(string, variableName) {
        return string.replace(/\[\$feature\]/g, variableName);
    }

    static replaceFileName(string, fileName) {
        return string.replace(/\[\$file_name\]/g, fileName);
    }
}