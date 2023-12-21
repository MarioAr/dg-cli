const fs = require('fs');
class PathWork {

    static checkIfDirectoryExists(path, create=false) {
        if (fs.existsSync(path)) {
            return true;
        } else {
            if (create) {
                fs.mkdirSync(path, { recursive: true });
                return true;
            }
        }

        return false;
    }
}

module.exports = PathWork;
