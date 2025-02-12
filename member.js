function skillsMember() {
    return {
        name: 'John',
        age: 30,
        skills: ['Javascript', 'Python', 'Ruby'],
        getSkills: function() {
            return this.skills;
        }
    }
}