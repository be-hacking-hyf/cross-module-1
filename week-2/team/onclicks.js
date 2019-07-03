var PrintTeamName = document.getElementById("print_team_name");
PrintTeamName.onclick = function() {print_team_name(team_name);}

var PrintTeamMembers = document.getElementById("print_team_members");
PrintTeamMembers.onclick = function() {
                            print_team_members(team_members);
                          }

var PrintIntroduction = document.getElementById("introduction");
PrintIntroduction.onclick = function() {
                            introduction(team_name, team_members);
}