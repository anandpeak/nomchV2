export const dateFormat = (dateObj) => {
    if (dateObj) {
        let year = dateObj.getFullYear(),
            month = dateObj.getMonth() + 1,
            date = dateObj.getDate();

        return year + "-" + ("00" + month).slice(-2) + "-" + ("00" + date).slice(-2);
    } else {
        return null;
    }
};

export const hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

export const isValidDate = (str) => {
    var m = str.match(/^(\d{4})\-(\d{1,2})\-(\d{1,2})$/);
    return (m) ? new Date(m[1], m[2]-1, m[3]) : null;
}

export const priceFormat = (price) => {
    if (price) {
        return Number.parseInt(price).toFixed().replace(/(\d)(?=(\d{3})+(,|$))/g, '$1\'');
    } else {
        return 0;
    }
};

export const numberFormat = (number) => {
    if (number) {
        return Number.parseInt(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
        return 0;
    }
};

export const numberReverseFormat = (str, find, replace) => {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

export const floatFormat = (floatNumber, digit = 2) => {
    if (floatNumber) {
        let splitNumbers = floatNumber.toString().split(".");

        if (splitNumbers.length === 2) {
            return floatNumber.toFixed(digit);
        } else {
            return splitNumbers[0];
        }
    } else {
        return 0;
    }
};

export const queryUrl = (url) => {
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }

    return obj;
};

export const htmlDecode = (input) => {
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
};

const maxUploadSize = 25;
export const isLargerFile = (sizeInByte) => {
    if (sizeInByte && sizeInByte > 1024) {
        let kb = Math.floor(sizeInByte / 1024);
        let byte = sizeInByte - 1024 * kb;
        if (kb > 1024) {
            let mb = Math.floor(kb / 1024);
            if (mb > maxUploadSize) {
                // larger than 25
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false
    }
};