exports.get = function(){
    return "data:image/png;base64,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";
}