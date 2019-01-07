function string_square(s){
    if (typeof(s)==='string'){
        return s.length*s.length;
    }
    return -1;
}

module.exports = {string_square}

