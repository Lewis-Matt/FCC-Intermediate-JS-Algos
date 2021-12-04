function spinalCase(str) {
    // Matches whitespace OR underscores
    // The plus matches all the spaces/underscores (otherwise it would just stop at the first one)
    let regex = new RegExp(/\s+|_+/g)
    // Need to put a space between any letters when the case changes (i.e. thisIsCamel to this Is Camel)
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    // Replace spaces and underscores with dashes, convert to lowercase
    return str.replace(regex, '-').toLowerCase();
}
console.log(spinalCase('ThisIsSpinalTap'));

// Another method
function spinalCaseAlt(str) {
    return str
        // Convert to array, seperated at whitespaces or underscores, or if it is
        // followed by an uppercase letter. ?= is a positive lookahead, so it is looking for a capital letter
        .split(/\s|_|(?=[A-Z])/)
        // Convert back to a string seperated by dashes
        .join("-")
        // Convert to lowercase
        .toLowerCase()
}
console.log(spinalCaseAlt('this_string_Sucks'));