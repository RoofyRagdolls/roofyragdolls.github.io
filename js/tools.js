function GetCredits(url, elementToSet) {
    $.get(url, function(data) {
        let text = data.replaceAll("\n", "<br>").replace("cya", "<a href='/'>cya</a>");
        text = ReplaceSpan(text, "Charles Game Dev", "pink");
        text = ReplaceSpan(text, "Oliver Bowles", "orange");
        text = ReplaceSpan(text, "Taycin Tackett", "red");
        text = ReplaceSpan(text, "Jared Lim", "purple");
        text = ReplaceSpan(text, "Jacob Foster", "yellow");
        text = ReplaceSpan(text, "Roofy Ragdolls 2", "#C6C6C6");
        text = ReplaceSpan(text, "You!", "blue");
        text = ReplaceSpan(text, "-", "black");
        text = ReplaceSpan(text, "by", "black");
        text = ReplaceSpan(text, "= Programmers =", "green");
        text = ReplaceSpan(text, "= Artists =", "blue");
        text = ReplaceSpan(text, "= Sound Effects =", "yellow");
        text = ReplaceSpan(text, "= Music =", "purple");
        text = ReplaceSpan(text, "= Designers =", "orange");
        text = ReplaceSpan(text, "= Special Thanks =", "pink");
        elementToSet.innerHTML = text;

    });
}

function ReplaceSpan(text, tag, color) {
    return text.replaceAll(tag, `<span style='color:${color}'>${tag}</span>`)
}