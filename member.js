function skillsMember() {
    var skills = ["HTML", "CSS", "JavaScript", "PHP", "MySQL"];
    var member = ["A", "B", "C", "D", "E"];
    var skillsMember = [];
    for (var i = 0; i < member.length; i++) {
        skillsMember[i] = {
            name: member[i],
            skills: skills,
        };
    }
    return skillsMember;
}
