function File() {
    this.name = '';
    this.createdAt = new Date();
    this.directory = null;
    this.content = '';

    this.remove = function () {
        // удаление файла
    };

    this.getName = function () {
        return this.name;
    };

    this.setName = function (newName) {
        this.name = newName;
    };

    this.getDirectory = function () {
        return this.directory;
    };

    this.setDirectory = function (newDirectory) {
        this.directory = newDirectory;
    };

    this.setContent = function (newContent) {
        this.content = newContent;
    };

    this.getContent = function () {
        return this.content;
    };

    this.getCreatedAt = function () {
        return this.createdAt;
    };
}

function Directory() {
    this.name = '';
    this.createdAt = new Date();
    this.subDirectories = [];
    this.files = [];
    this.parentDirectory = null;

    this.setName = function (newName) {
        this.name = newName;
    };

    this.getName = function () {
        return this.name;
    };

    this.addDirectory = function (directory) {
        directory.parentDirectory = this;
        this.subDirectories.push(directory);
    };

    this.addFile = function (file) {
        file.directory = this;
        this.files.push(file);
    };

    function removeElementFromList(items, item) {
        var foundIndex = -1;
        for (var i = 0; i < items.length; i++) {
            if (items[i] === item) {
                foundIndex = i;
                break;
            }
        }
        if (foundIndex !== -1) {
            items.splice(foundIndex, 1);
        }
    }

    this.removeDirectory = function (directory) {
        removeElementFromList(this.subDirectories, directory);
    };

    this.removeFile = function (file) {
        removeElementFromList(this.files, file);
    };

    this.displayStructure = function (level) {
        var prefix = '';
        level = level || 0;
        for (var i = 0; i < level; i++) {
            prefix = prefix + '  ';
        }
        console.log(prefix + this.name);
        this.subDirectories.forEach(function (elem) {
            elem.displayStructure(level + 1);
        })
    };
}

var f1 = new File(),
    f2 = new File(),
    d1 = new Directory(),
    d2 = new Directory(),
    d3 = new Directory(),
    d4 = new Directory(),
    d5 = new Directory();

f1.setName('index1.txt');
f2.setName('index2.txt');
d1.setName('C:');
d2.setName('Users');
d3.setName('Program Files');
d4.setName('Windows');
d5.setName('Dmitry');

d1.addFile(f1); // d1.files.push(f1); f1.directory = d1;
d1.addFile(f2); // d1.files.push(f1); f1.directory = d1;

d1.addDirectory(d2); // d1.subDirectories.push(d2); d2.parentDirectory = d1;
d1.addDirectory(d3); // d1.subDirectories.push(d3); d3.parentDirectory = d1;
d1.addDirectory(d4); // d1.subDirectories.push(d4); d4.parentDirectory = d1;
d2.addDirectory(d5); // d1.subDirectories.push(d4); d4.parentDirectory = d1;

// var xx = {value: 10}, yy = xx;
//
// yy.value = 20;
//
// console.log(xx);
// console.log(yy);

//
// function someFunction(number, coef) {
//     coef = coef || 1;
//     coef = coef === undefined ? 1 : coef;
//     console.log(number * coef);
// }
//
// someFunction(10, 2);  // none,undefined|NaN,undefined,1
// someFunction(10, 3);  // 1,1,1
// someFunction(10);  // 10,10,10
//
// function numeric(num) {
//     if (num !== 0) {
//         console.log(num % 10);
//         numeric(Math.trunc(num / 10));
//     }
// }

function testFunction (value) {
    console.log(10);
    if (value === 10)
        console.log(10);
    alert(10);
}

function <ИМЯ ФУНКЦИИ> ([ПАРАМЕТР1, ...]) {
    [ОПЕРАТОР JAVASCRIPT; ...]
}


function testF () {
    console.log(10);
}