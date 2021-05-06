// You want to build a rectangular-shaped house with a floor area of 1200 sq. ft. One possible set of dimensions for the length and width is 30 ft. by 40 ft. What are two other possible sets of dimensions that could be used for the length and width?

let area = 1200;

for (let length = 1; length < 1200; length++) {
    for (let width = 1; width <1200; width++) {
        if (length * width === area) {
            console.log(`Length: ${length}, Width: ${width}`);
        };
    }
}

// try again but solve for duplicates!