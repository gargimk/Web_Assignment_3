/*---------------------------( 1 )-------------------------------------------------*/
var excercise1 = function(nums) {
    var sum = 0;
    var avg = 0,
        i;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    avg = sum / (nums.length);
    return avg;
};

(function() {
    document.getElementById("div1").innerHTML += excercise1([2, 3, 4, 5]).toString();
})();

/*----------------------------( 2 )---------------------------------------------------*/
var excercise2 = function(nums) {
    var largest = -Infinity;
    var i;

    for (i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    return largest;
};

(function() {
    document.getElementById("div2").innerHTML += excercise2([3, 4, 6, 98, 12, 6]).toString();
})();

//using underscore.js
var us_excercise2 = function(nums) {
    return _.max(nums);
};

(function() {
    document.getElementById("div2").innerHTML += " </br> Using underscore.js: " + us_excercise2([3, 4, 6, 98, 12, 6]).toString();
})();

/*-----------------------------( 3 )-----------------------------------------------------*/
var excercise3 = function(nums) {
    var i;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            return true;
        }

    }
    return false;
};
(function() {
    document.getElementById("div3").innerHTML += excercise3([5, 77, 99, 87, 66, 57, 23]).toString();
})();

//using underscore.js
var us_excercise3 = function(nums) {
    return _.some(nums, function(n) {
        return n % 2 === 0;
    });
};
(function() {
    document.getElementById("div3").innerHTML += "</br> using underscore.js: " + us_excercise3([5, 77, 99, 87, 66, 57, 23]).toString();
})();
/*--------------------------------( 4 )---------------------------------------------------*/
var excercise4 = function(nums) {
    var i;
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % 2 !== 0) {
            return false;
        }

    }
    return true;
};
(function() {
    document.getElementById("div4").innerHTML += excercise4([52, 772, 992, 872, 66, 5712, 24]).toString();
})();

//using underscore.js
var us_excercise4 = function(nums) {
    return _.every(nums, function(n) {
        return n % 2 === 0;
    });
};
(function() {
    document.getElementById("div4").innerHTML += "</br> using underscore.js: " + us_excercise4([52, 772, 992, 872, 66, 5712, 24]).toString();
})();
/*----------------------------------( 5 )------------------------------------------------------*/
var arrayContains = function(arr_str, str) {
    var i;
    for (i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === str) {
            return true;
        }
    }
    return false;
};
(function() {
    document.getElementById("div5").innerHTML += arrayContains(["hello", "world", "wide", "web"], "wide").toString();
})();
/*---------------------------------( 6 )--------------------------------------------------------*/
var arrayContainsTwo = function(arr_str, str) {
    var i;
    var count = 0;
    for (i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === str) {
            count = count + 1;
            if (count >= 2) {
                return true;
            }
        }
    }
    return false;
};
(function() {
    document.getElementById("div6").innerHTML += arrayContainsTwo(["hello", "abc", "web", "web"], "web").toString();
})();


//Now for three count
var arrayContainsThree = function(arr_str, str) {
    var i;
    var count = 0;
    for (i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === str) {
            count = count + 1;
            if (count >= 3) {
                return true;
            }
        }
    }
    return false;
};
(function() {
    document.getElementById("div7").innerHTML += arrayContainsThree(["hello", "web", "web", "web"], "web").toString();
})();

//Now for N  count
var arrayContainsNTimes = function(arr_str, str, n) {
    var i;
    var count = 0;
    for (i = 0; i < arr_str.length; i++) {
        if (arr_str[i] === str) {
            count = count + 1;
        }
    }
    if (count === n) {
        return true;
    }
    return false;

};
(function() {
    document.getElementById("div8").innerHTML += arrayContainsNTimes(["world", "web", "web", "web"], "web", 4).toString();
})();