const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
    // Only change code below this line
    let failureItems = []
    for (let i = 0; i < arr.length; i++) {
        failureItems.push(`<li class="${arr[i]}">${arr[i]}</li>`)
    }
    console.log(failureItems);
    // Only change code above this line
    console.log(failureItems.length);

    return failureItems;
}

const failuresList = makeList(result.failure);

[
    '<li class="text-warning">no-var</li>',
    '<li class="text-warning">var-on-top</li>',
    '<li class="text-warning">linebreak</li>'
]
[
    '<li class="no-var">no-var</li>',
    '<li class="var-on-top">var-on-top</li>',
    '<li class="linebreak">linebreak</li>'
]